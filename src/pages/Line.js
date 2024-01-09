
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EditableCard from '../components/EditableCard';
import PlusCard from '../components/PlusCard';
import lineImage from '../assets/line.png';
import Header from '../components/Header';

function LinePage() {
  const [lines, setLines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dynamicShopId, setDynamicShopId] = useState("2");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLines = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/line', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query Lines {
                lines {
                  id
                  name
                  shopId
                }
              }
            `,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setLines(result.data.lines);
        } else {
          setError(result.errors);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLines();
  }, []);

  const handleAddLine = async (newLineName) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/line', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation CreateLine($name: String!, $shopId: String!) {
              createLine(name: $name, shopId: $shopId) {
                line {
                  id
                  name
                  shopId
                }
              }
            }
          `,
          variables: {
            name: newLineName,
            shopId: dynamicShopId, 
          },
        }),
      });
 
      const result = await response.json();
      setLines([...lines, result.data.createLine.line]);
    } catch (error) {
      console.error('Error adding line:', error);
    }
  };

  const handleDeleteLine = async (id) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/line', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation DeleteLine($id: Int!) {
              deleteLine(id: $id) {
                line {
                  id
                }
              }
            }
          `,
          variables: {
            id: id,
          },
        }),
      });
 
      const result = await response.json();
 
      if (response.ok && result.data.deleteLine) {
        const updatedLines = lines.filter(line => line.id !== id);
        setLines(updatedLines);
      } else {
        console.error('Error deleting line:', result.errors);
      }
    } catch (error) {
      console.error('Error deleting line:', error);
    }
  };

  const handleLineImageClick = () => {
    navigate('/workstation');
  };
  const handleUpdateLine = async (id, newName) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/line', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation UpdateLine($id: Int!, $name: String!) {
              updateLine(id: $id, name: $name) {
                line {
                  id
                  name
                  shopId
                }
              }
            }
          `,
          variables: {
            id: id,
            name: newName,
          },
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setLines((prevLines) =>
          prevLines.map((line) =>
            line.id === id ? { ...line, name: newName } : line
          )
        );
      } else {
        setError(result.errors);
      }
    } catch (err) {
      setError(err.message);
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

 
  return (
    <div>
      <h2 className="text-center mt-2 mb-0 underline">LINES</h2>
      <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
        {lines.map((line) => (
          <EditableCard
            key={line.id}
            id={line.id}
            name={line.name}
            imageUrl={lineImage}
            onDelete={() => handleDeleteLine(line.id)}
            onImageClick={handleLineImageClick}
            onUpdate={handleUpdateLine}
          />
        ))}
        <PlusCard onAddClick={(newLineName) => handleAddLine(newLineName)} cardType="line" />
      </div>
    </div>
  );
}

export default LinePage;

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
            shopId: "2", // Replace with the appropriate shopId as a string
          },
        }),
      });

      const result = await response.json();
      setLines([...lines, result.data.createLine.line]);
    } catch (error) {
      console.error('Error adding line:', error);
    }
  };

  const handleDeleteLine = async (id, index) => {
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
                  name
                  shopId
                }
              }
            }
          `,
          variables: {
            id: id,
          },
        }),
      });

      await response.json();
      const updatedLines = [...lines];
      updatedLines.splice(index, 1);
      setLines(updatedLines);
    } catch (error) {
      console.error('Error deleting line:', error);
    }
  };

  const handleLineImageClick = () => {
    navigate('/workstation');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-center mt-2 mb-0 underline">LINES</h2>
      <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
        {lines.map((line, index) => (
          <EditableCard
            key={index}
            name={line.name}
            imageUrl={lineImage}
            onDelete={() => handleDeleteLine(line.id, index)}
            onImageClick={handleLineImageClick}
          />
        ))}
        <PlusCard onAddClick={handleAddLine} cardType="line" />
      </div>
    </div>
  );
}

export default LinePage;





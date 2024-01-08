
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

  const handleAddLine = (newLineName) => {
    // Your logic to add a new line
  };

  const handleDeleteCard = (index) => {
    // Your logic to delete a line
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
            onDelete={() => handleDeleteCard(index)}
            onImageClick={handleLineImageClick}
          />
        ))}
        <PlusCard onAddClick={handleAddLine} cardType="line" />
      </div>
    </div>
  );
}

export default LinePage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EditableCard from '../components/EditableCard';
import PlusCard from '../components/PlusCard';
import factoryImage from '../assets/factory.png';
import Header from '../components/Header';

function FactoryPage() {
  const [factories, setFactories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFactories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/factory', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query Factories {
                factories {
                  id
                  name
                  facilityId
                }
              }
            `,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setFactories(result.data.factories);
        } else {
          setError(result.errors);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFactories();
  }, []);

  const handleAddFactory = async (newFactoryName) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/factory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation CreateFactory($facilityId: Int!, $name: String!) {
              createFactory(facilityId: $facilityId, name: $name) {
                factory {
                  id
                  name
                  facilityId
                }
              }
            }
          `,
          variables: {
            facilityId: 4, // Replace with the appropriate facilityId
            name: newFactoryName,
          },
        }),
      });

      const result = await response.json();
      setFactories([...factories, result.data.createFactory.factory]);
    } catch (error) {
      console.error('Error adding factory:', error);
    }
  };

  const handleDeleteFactory = async (id, index) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/factory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation DeleteFactory($id: Int!) {
              deleteFactory(id: $id) {
                factory {
                  id
                  name
                  facilityId
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
      const updatedFactories = [...factories];
      updatedFactories.splice(index, 1);
      setFactories(updatedFactories);
    } catch (error) {
      console.error('Error deleting factory:', error);
    }
  };

  const handleFactoryImageClick = () => {
    navigate('/shop');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-center mt-2 mb-0 underline">FACTORIES</h2>
      <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
        {factories.map((factory, index) => (
          <EditableCard
            key={index}
            name={factory.name}
            imageUrl={factoryImage}
            onDelete={() => handleDeleteFactory(factory.id, index)}
            onImageClick={handleFactoryImageClick}
          />
        ))}
        <PlusCard onAddClick={handleAddFactory} cardType="factory" />
      </div>
    </div>
  );
}

export default FactoryPage;



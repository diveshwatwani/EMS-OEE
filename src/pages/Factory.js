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
            facilityId: 3, // Use dynamicFacilityId
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
 
  const handleDeleteFactory = async (id) => {
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
 
      if (response.ok && result.data.deleteFactory) {
        // Ensure the deletion is successful before updating the state
        const updatedFactories = factories.filter(factory => factory.id !== id);
        setFactories(updatedFactories);
      } else {
        console.error('Error deleting factory:', result.errors);
      }
    } catch (error) {
      console.error('Error deleting factory:', error);
    }
  };

  const handleFactoryImageClick = () => {
    navigate('/shop');
  };

  const handleUpdateFactory = async (id, newName) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/factory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation UpdateFactory($id: Int!, $name: String!) {
              updateFactory(id: $id, name: $name) {
                factory {
                  id
                  name
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
        
        setFactories((prevFactories) =>
          prevFactories.map((factory) =>
            factory.id === id ? { ...factory, name: newName } : factory
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
      <h2 className="text-center mt-2 mb-0 underline">FACTORIES</h2>
      <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
        {factories.map((factory) => (
          <EditableCard
            key={factory.id}
            id={factory.id}
            name={factory.name}
            imageUrl={factoryImage}
            onDelete={() => handleDeleteFactory(factory.id)}
            onImageClick={handleFactoryImageClick}
            onUpdate={handleUpdateFactory}
          />
        ))}
        <PlusCard onAddClick={handleAddFactory} cardType="factory" />
      </div>
    </div>
  );
}

export default FactoryPage;
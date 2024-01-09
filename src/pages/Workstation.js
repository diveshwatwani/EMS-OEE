
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EditableCard from '../components/EditableCard';
import PlusCard from '../components/PlusCard';
import workstationImage from '../assets/workstation.png';
import Header from '../components/Header';

function WorkstationPage() {
  const [workstations, setWorkstations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkstations = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/workstation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query Workstations {
                workstations {
                  id
                  name
                  lineId
                }
              }
            `,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setWorkstations(result.data.workstations);
        } else {
          setError(result.errors);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkstations();
  }, []);

  const handleAddWorkstation = async (newWorkstationName) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/workstation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation CreateWorkstation($lineId: String!, $name: String!) {
              createWorkstation(lineId: $lineId, name: $name) {
                workstation {
                  id
                  name
                  lineId
                }
              }
            }
          `,
          variables: {
            lineId: '98', // You may replace this value with the appropriate lineId
            name: newWorkstationName,
          },
        }),
      });
 
      const result = await response.json();
      setWorkstations([...workstations, result.data.createWorkstation.workstation]);
    } catch (error) {
      console.error('Error adding workstation:', error);
    }
  };
 
  const handleDeleteWorkstation = async (id) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/workstation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation DeleteWorkstation($id: Int!) {
              deleteWorkstation(id: $id) {
                workstation {
                  id
                  lineId
                  name
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
      const updatedWorkstations = workstations.filter((workstation) => workstation.id !== id);
      setWorkstations(updatedWorkstations);
    } catch (error) {
      console.error('Error deleting workstation:', error);
    }
  };

  const handleWorkstationImageClick = () => {
    navigate('/equipment');
  };

  const handleUpdateWorkstation = async (id, newName) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/workstation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation UpdateWorkstation($id: Int!, $name: String!) {
              updateWorkstation(id: $id, name: $name) {
                workstation {
                  id
                  name
                  lineId
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
        setWorkstations((prevWorkstations) =>
          prevWorkstations.map((workstation) =>
            workstation.id === id ? { ...workstation, name: newName } : workstation
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
      <h2 className="text-center mt-2 mb-0 underline">WORKSTATIONS</h2>
      <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
        {workstations.map((workstation) => (
          <EditableCard
            key={workstation.id}
            id={workstation.id}
            name={workstation.name}
            imageUrl={workstationImage}
            onDelete={() => handleDeleteWorkstation(workstation.id)}
            onImageClick={handleWorkstationImageClick}
            onUpdate={handleUpdateWorkstation}
          />
        ))}
        <PlusCard onAddClick={handleAddWorkstation} cardType="workstation" />
      </div>
    </div>
  );
}

export default WorkstationPage;

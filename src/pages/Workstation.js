
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

  const handleAddWorkstation = (newWorkstationName) => {
    // Your logic to add a new workstation
  };

  const handleDeleteCard = (index) => {
    // Your logic to delete a workstation
  };

  const handleWorkstationImageClick = () => {
    navigate('/equipment');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-center mt-2 mb-0 underline">WORKSTATIONS</h2>
      <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
        {workstations.map((workstation, index) => (
          <EditableCard
            key={index}
            name={workstation.name}
            imageUrl={workstationImage}
            onDelete={() => handleDeleteCard(index)}
            onImageClick={handleWorkstationImageClick}
          />
        ))}
        <PlusCard onAddClick={handleAddWorkstation} cardType="workstation" />
      </div>
    </div>
  );
}

export default WorkstationPage;

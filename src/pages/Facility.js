
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EditableCard from '../components/EditableCard';
import PlusCard from "../components/PlusCard";
import facilityImage from '../assets/facility.jpg';
import Header from "../components/Header";

const FacilityPage = () => {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/facility', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
            query Facilities {
              facilities {
                  id
                  name
              }
          }
            `,
          }),
        });

        const result = await response.json();
        console.log(result)

        if (response.ok) {
          setFacilities(result.data.facilities);
        } else {
          setError(result.errors);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFacilities();
  }, []);

  const handleAddFacility = (newFacilityName) => {
 
  };

  const handleDeleteCard = (index) => {
 
  };



  const handleFacilityImageClick = () => {
    navigate("/factory");
  };

  const handleUpdateFacility = async (id, newName) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/facility', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation UpdateFacility($id: Int!, $name: String!) {
              updateFacility(id: $id, name: $name) {
                facility {
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
        setFacilities((prevFacilities) =>
          prevFacilities.map((facility) =>
            facility.id === id ? { ...facility, name: newName } : facility
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
      <h2 className="text-center mt-2 mb-0 underline">FACILITIES</h2>
      <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
        {facilities.map((facility) => (
          <EditableCard
            key={facility.id}
            id={facility.id}
            name={facility.name}
            imageUrl={facilityImage}
            onDelete={() => handleDeleteCard(facility.id)}
            onImageClick={handleFacilityImageClick}
            onUpdate={handleUpdateFacility}
          />
        ))}
        <PlusCard onAddClick={handleAddFacility} cardType="facility" />
      </div>
    </div>
  );
}

export default FacilityPage;
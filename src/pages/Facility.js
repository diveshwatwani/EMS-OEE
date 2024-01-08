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
                  city
                }
              }
            `,
          }),
        });

        const result = await response.json();

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

  const handleAddFacility = async (newFacilityName) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/facility', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation CreateFacility($city: String!, $name: String!) {
              createFacility(city: $city, name: $name) {
                facility {
                  id
                  name
                  city
                }
              }
            }
          `,
          variables: {
            city: "PAKISTAN", // Replace with the appropriate city
            name: newFacilityName,
          },
        }),
      });

      const result = await response.json();
      setFacilities([...facilities, result.data.createFacility.facility]);
    } catch (error) {
      console.error('Error adding facility:', error);
    }
  };

  const handleDeleteFacility = async (id, index) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/facility', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation DeleteFacility($id: Int!) {
              deleteFacility(id: $id) {
                facility {
                  id
                  name
                  city
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
      const updatedFacilities = [...facilities];
      updatedFacilities.splice(index, 1);
      setFacilities(updatedFacilities);
    } catch (error) {
      console.error('Error deleting facility:', error);
    }
  };

  const handleFacilityImageClick = () => {
    navigate("/factory");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-center mt-2 mb-0 underline">FACILITIES</h2>
      <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
        {facilities.map((facility, index) => (
          <EditableCard
            key={index}
            name={facility.name}
            imageUrl={facilityImage}
            onDelete={() => handleDeleteFacility(facility.id, index)}
            onImageClick={handleFacilityImageClick}
          />
        ))}
        <PlusCard onAddClick={handleAddFacility} cardType="facility" />
      </div>
    </div>
  );
};

export default FacilityPage;



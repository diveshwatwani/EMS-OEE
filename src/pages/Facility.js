
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
  //   setFacilities([...facility, { name: newFacilityName }]);
  };

  const handleDeleteCard = (index) => {
  //   const updatedFacility = [...facility];
  //   updatedFacility.splice(index, 1);
  //   setFacilities(updatedFacility);
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
            onDelete={() => handleDeleteCard(index)}
            onImageClick={handleFacilityImageClick}
          />
        ))}
        <PlusCard onAddClick={handleAddFacility} cardType="facility" />
      </div>
    </div>
  );
};

export default FacilityPage;

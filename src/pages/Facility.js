import React from "react";
import { useNavigate } from "react-router-dom";
import EditableCard from '../components/EditableCard';
import PlusCard from "../components/PlusCard";
import facilityImage from '../assets/facility.jpg';
import Header from "../components/Header";

let Facility = [
  {
    name: "Facility 1",
  },
  {
    name: "Facility 2",
  },
  // ... other Facilities
];

function FacilityPage() {
  const [facility, setFacilities] = React.useState([...Facility]);
  const navigate = useNavigate();

  const handleAddFacility = (newFacilityName) => {
    setFacilities([...facility, { name: newFacilityName }]);
  };

  const handleDeleteCard = (index) => {
    const updatedFacility = [...facility];
    updatedFacility.splice(index, 1);
    setFacilities(updatedFacility);
  };

  const handleFacilityImageClick = () => {
    navigate("/factory");
  };

  return (
    <div>
      {/* <Header/> */}
      <h2 className="text-center mt-2 mb-0 underline">FACILITIES</h2>
      <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
        {facility.map((facility, index) => (
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
}

export default FacilityPage;

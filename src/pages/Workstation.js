import React from "react";
import { useNavigate } from "react-router-dom";
import EditableCard from '../components/EditableCard';
import PlusCard from "../components/PlusCard";
import workstationImage from '../assets/workstation.png';
import Header from "../components/Header";

let Workstation = [
  {
    name: "Workstation 1",
  },
  {
    name: "Workstation 2",
  },
  // ... other workstations
];

function WorkstationPage() {
  const [workstations, setWorkstations] = React.useState([...Workstation]);
  const navigate = useNavigate();

  const handleAddWorkstation = (newWorkstationName) => {
    setWorkstations([...workstations, { name: newWorkstationName }]);
  };

  const handleDeleteCard = (index) => {
    const updatedWorkstations = [...workstations];
    updatedWorkstations.splice(index, 1);
    setWorkstations(updatedWorkstations);
  };

  const handleWorkstationImageClick = () => {
    navigate("/equipment");
  };

  return (
    <div>
      {/* <Header/> */}
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

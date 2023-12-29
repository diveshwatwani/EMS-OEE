import React from "react";
import EditableCard from '../components/EditableCard';
import PlusCard from "../components/PlusCard";
import equipmentImage from '../assets/equipment.jpg';
import Header from "../components/Header";

let Equipment = [
  {
    name: "Equipment 1",
  },
  {
    name: "Equipment 2",
  },
  // ... other equipments
];

function EquipmentPage() {
  const [equipments, setEquipments] = React.useState([...Equipment]);

  const handleAddEquipment = (newEquipmentName) => {
    setEquipments([...equipments, { name: newEquipmentName }]);
  };

  const handleDeleteCard = (index) => {
    const updatedEquipments = [...equipments];
    updatedEquipments.splice(index, 1);
    setEquipments(updatedEquipments);
  };

  return (
    <div>
      {/* <Header/> */}
      <h2 className="text-center mt-2 mb-0 underline">EQUIPMENTS</h2>
      <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
        {equipments.map((equipment, index) => (
          <EditableCard
            key={index}
            name={equipment.name}
            imageUrl={equipmentImage}
            onDelete={() => handleDeleteCard(index)}
          />
        ))}
        <PlusCard onAddClick={handleAddEquipment} cardType="equipment" />
      </div>
    </div>
  );
}

export default EquipmentPage;

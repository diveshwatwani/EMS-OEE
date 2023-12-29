import React from "react";
import { useNavigate } from "react-router-dom";
import EditableCard from '../components/EditableCard';
import PlusCard from "../components/PlusCard";
import factoryImage from '../assets/factory.png';
import Header from "../components/Header";

let Factory = [
  {
    name: "Factory 1",
  },
  {
    name: "Factory 2",
  },
  // ... other factories
];

function FactoryPage() {
  const [factorys, setFactorys] = React.useState([...Factory]);
  const navigate = useNavigate();

  const handleAddFactory = (newFactoryName) => {
    setFactorys([...factorys, { name: newFactoryName }]);
  };

  const handleDeleteCard = (index) => {
    const updatedFactorys = [...factorys];
    updatedFactorys.splice(index, 1);
    setFactorys(updatedFactorys);
  };

  const handleFactoryImageClick = () => {
    navigate("/shop");
  };

  return (
    <div>
      {/* <Header/> */}
      <h2 className="text-center mt-2 mb-0 underline">FACTORYS</h2>
      <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
        {factorys.map((factory, index) => (
          <EditableCard
            key={index}
            name={factory.name}
            imageUrl={factoryImage}
            onDelete={() => handleDeleteCard(index)}
            onImageClick={handleFactoryImageClick}
          />
        ))}
        <PlusCard onAddClick={handleAddFactory} cardType="factory" />
      </div>
    </div>
  );
}

export default FactoryPage;

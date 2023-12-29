
import React from "react";

import EditableCard from '../components/EditableCard';
import PlusCard from "../components/PlusCard";
import lineImage from '../assets/line.png';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

let Line = [
  {
    name: "Line 1",
  },
  {
    name: "Line 2",
  },
  {
    name: "Line 3",
  },
  {
    name: "Line 4",
  },
];

function LinePage() {
  const [lines, setLines] = React.useState([...Line]);
  const navigate = useNavigate();

  const handleAddLine = (newLineName) => {
    setLines([...lines, { name: newLineName }]);
  };

  const handleDeleteCard = (index) => {
    const updatedLines = [...lines];
    updatedLines.splice(index, 1);
    setLines(updatedLines);
  };

  const handleLineImageClick = () => {
    navigate("/workstation");
  };

  return (
    <div>
      {/* <Header/> */}
      <h2 className="text-center mt-2 mb-0 underline">LINES</h2>
      <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
        {lines.map((line, index) => (
          <EditableCard
            key={index}
            name={line.name}
            imageUrl={lineImage}
            onDelete={() => handleDeleteCard(index)}
            onImageClick={handleLineImageClick}
          />
        ))}
        <PlusCard onAddClick={handleAddLine} cardType="line" />
      </div>
    </div>
  );
}

export default LinePage;

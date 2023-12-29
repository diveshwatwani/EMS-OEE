import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsPencil, BsTrash, BsSave } from "react-icons/bs";

function EditableCard({ name: initialName, imageUrl, onDelete, onImageClick }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(initialName);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleDeleteCard = () => {
    onDelete();
  };

  const handleInputChange = (event) => {
    setEditedName(event.target.value);
  };

  return (
    <Card style={{ width: "10rem" }} className="rounded-4 shadow-lg overflow-hidden mt-5">
      <Card.Header className="d-flex justify-content-end bg-ey-primary-light">
        {!isEditing && (
          <Button variant="link" className="text-dark mx-1 p-0" onClick={handleEdit}>
            <BsPencil />
          </Button>
        )}
        {isEditing && (
          <Button variant="link" className="text-success mx-1 p-0" onClick={handleSave}>
            <BsSave />
          </Button>
        )}
        <Button variant="link" className="text-danger mx-1 p-0" onClick={handleDeleteCard}>
          <BsTrash />
        </Button>
      </Card.Header>
      <div className="d-flex justify-content-center mt-2">
        <Card.Img
          height={70}
          style={{ width: "auto" }}
          className="mb-2 border rounded-1"
          src={imageUrl || "https://placehold.co/10"}
          alt="Card Image" 
          onClick={onImageClick}
        />
      </div>
      <Card.Body className="bg-black text-center fw-bold text-white">
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={handleInputChange}
            onBlur={handleSave}
            style={{
              width: "100%",  // Take up 100% of the card's width
              padding: "3px", // Adjust padding as needed
              margin: "0",    // Remove margin
              fontSize: "inherit", // Use the default font size
            }}
          />
        ) : (
          <Card.Title>{editedName}</Card.Title>
        )}
      </Card.Body>
    </Card>
  );
}

export default EditableCard;


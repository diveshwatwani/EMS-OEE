import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { BsPlus } from "react-icons/bs";


function AddCard({ onAddClick, cardType }) {
  const [showModal, setShowModal] = useState(false);
  const [newItemName, setNewItemName] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setNewItemName(""); // Reset the input field when closing the modal
  };

  const handleAddItem = () => {
    // Handle adding the new item using onAddClick or any other function
    onAddClick(newItemName);

    // Reset the input field and close the modal
    setNewItemName("");
    setShowModal(false);
  };

  const getModalTitle = () => {
    switch (cardType) {
      case "line":
        return "Add Line";
      case "shop":
        return "Add Shop";
      case "workstation":
        return "Add Workstation";
      case "equipment":
        return "Add Equipment";
        case "factory":
          return "Add Factory";

      default:
        return "Add Item";
    }
  };

  const getFormLabel = () => {
    switch (cardType) {
      case "line":
        return "Enter Line Name:";
      case "shop":
        return "Enter Shop Name:";
      case "workstation":
        return "Enter Workstation Name:";
      case "equipment":
        return "Enter Equipment Name:";
        case "factory":
          return "Enter Factory Name";
      default:
        return "Enter Name:";
    }
  };

  return (
    <>
      <Card style={{ width: "10rem", backgroundColor: "#dddddd" }} className="rounded-4 shadow-lg overflow-hidden mt-5">
        <Card.Body className="d-flex align-items-center justify-content-center">
          <Button variant="link" className="text-dark p-0" onClick={handleShowModal}>
            <BsPlus size={80} />
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{getModalTitle()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="itemName">
            <Form.Label>{getFormLabel()}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Item Name"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddItem}>
            Add {cardType.charAt(0).toUpperCase() + cardType.slice(1)}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCard;

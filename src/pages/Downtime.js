import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import machineImage from '../assets/machineImage.jpg';
import ReasonForm from "../pages/ReasonForm";
import DowntimeCard from "../components/DowntimeCard";

let machines = [
  {
    name: "Machine1",
    area: "Press Shop",
    downtimes: [
      { id: 1, date: "2023-01-01", time: "08:00:00" },
      { id: 2, date: "2023-01-02", time: "10:30:00" },
      { id: 3, date: "2023-01-03", time: "15:45:00" },
    ],
  },
  {
    name: "Machine2",
    area: "Press Shop",
    downtimes: [
      { id: 1, date: "2023-01-01", time: "09:15:00" },
    ],
  },
  {
    name: "Machine3",
    area: "Press Shop",
    downtimes: [
      { id: 1, date: "2023-01-01", time: "11:20:00" },
      { id: 2, date: "2023-01-02", time: "13:00:00" },
      { id: 3, date: "2023-01-03", time: "17:30:00" },
      { id: 4, date: "2023-01-04", time: "08:45:00" },
    ],
  },
];

export default function Downtime() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [selectedDowntime, setSelectedDowntime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (machineName, downtimes) => {
    setSelectedMachine({ machineName, downtimes });
    setSelectedDowntime(null);
    setIsModalOpen(false);
  };

  const handleDowntimeClick = (downtime) => {
    setSelectedDowntime(downtime);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="d-flex flex-column pt-3 ">
        <InputGroup style={{ maxWidth: "400px" }} className="mb-3 mx-auto">
          <Form.Control
            placeholder="Search Machines"
            value={searchTerm ?? ""}
            onChange={(e) =>
              setSearchTerm(e.target.value === "" ? null : e.target.value)
            }
          />
        </InputGroup>
        <div className="d-flex pt-2 gap-3 h-screen justify-content-center align-items flex-wrap">
          {machines
            .filter(
              (machine) =>
                searchTerm === null ? true : machine.name.includes(searchTerm)
            )
            .map((machine) => (
              <React.Fragment key={machine.name}>
                {selectedMachine && selectedMachine.machineName === machine.name ? (
                  <div className="d-flex flex-column align-items-center">
                    <DowntimeCard
                      title={machine.name}
                      imageSrc={machineImage}
                      onCardClick={handleCardClick}
                      selected={true}
                      downtimes={machine.downtimes}
                      selectedDowntime={selectedDowntime}
                      onDowntimeClick={handleDowntimeClick}
                    />
                    <div className="d-flex">
                      {machine.downtimes.map((downtime) => (
                        <Button
                          key={downtime.id}
                          onClick={() => handleDowntimeClick(downtime)}
                          className={`mx-2 bg-ey-primary text-black fw-semibold ${
                            selectedDowntime === downtime ? "selected" : ""
                          }`}
                        >
                          Downtime {downtime.id}
                          <div className="mt-2">
                            <div className="text-muted">Date: {downtime.date}</div>
                            <div className="text-muted">Time: {downtime.time}</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <DowntimeCard
                    title={machine.name}
                    imageSrc={machineImage}
                    onCardClick={handleCardClick}
                    selected={false}
                    downtimes={machine.downtimes}
                  />
                )}
              </React.Fragment>
            ))}
        </div>
        {selectedMachine && selectedDowntime && (
          <Modal
            show={isModalOpen}
            onHide={handleCloseModal}
            dialogClassName="modal-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>{`Downtime Form for ${selectedMachine.machineName} - Downtime ${selectedDowntime.id}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ReasonForm
                machineName={selectedMachine.machineName}
                downtime={selectedDowntime}
              />
            </Modal.Body>
          </Modal>
        )}
      </div>
    </div>
  );
}
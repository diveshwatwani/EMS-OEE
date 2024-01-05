import MyCard from "../components/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Header from "../components/Header1";

let machines = [
  {
    name: "Machine1",
    area: "Press Shop",
  },
  {
    name: "Machine2",
    area: "Press Shop",
  },
  {
    name: "Machine 3",
    area: "Press Shop",
  },
  {
    name: "Machine1",
    area: "Press Shop",
  },

];

export default function MachineCard() {
  const [seachTerm, setSearchTeam] = useState(null);

  console.log(seachTerm);

  return (
 
    <div className="d-flex flex-column pt-3 ">
      <InputGroup style={{ maxWidth: "400px" }} className="mb-3 mx-auto">
        <Form.Control
          placeholder="Search Machines"
          value={seachTerm ?? ''}
          onChange={(e) =>
            setSearchTeam(e.target.value === "" ? null : e.target.value)
          }
        />
      </InputGroup>
      <div className="d-flex pt-2 gap-5 h-screen justify-content-center align-items flex-wrap">
        {machines.filter((machine) => seachTerm === null ? true : machine.name.includes(seachTerm)).map((machine) => (
          <MyCard
            title={machine.name}
            area={machine.area}
            availability={100}
            performance={80}
            quality={80}
            oee={80}
          />
        ))}
      </div>
    </div>
  );
}


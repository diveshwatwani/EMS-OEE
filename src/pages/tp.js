// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Row from "react-bootstrap/Row";
// import * as formik from "formik";
// import * as yup from "yup";

// function ProductionForm() {
//   const { Formik } = formik;

//   const schema = yup.object().shape({
//     plant: yup.string().required(),
//     area: yup.string().required(),
//     // shift: yup.string().required(),
//     month: yup.string().required(),
//     plannedDownTime: yup.date().required(),
//     partsPerCycle: yup.number().required(),
//     totalParts: yup.number().required(),
//     // defects: yup.number().required(),
//   });

//   return (
//     <div className="d-flex flex-column  align-items-center">
//       <h3 className="text-center">Machine Details Form</h3>
//       <p style={{ fontSize: "14px", margin: "0px", textAlign: "center" }}>
//         Please fill this Machine Detail form with the requested information.
//       </p>
//       <div className="mx-5 my-4 p-3  shadow col-md-8 rounded-2 border">
//         <Formik
//           validationSchema={schema}
//           onSubmit={console.log}
//           initialValues={{}}
//         >
//           {({ handleSubmit, handleChange, values, touched, errors }) => (
//               <Form noValidate onSubmit={handleSubmit}>
//                 <Form.Group
//                   as={Col}
//                   className="mb-3"
//                   style={{ display: "flex", flexDirection: "row" }}
//                 >
//                   <Form.Label className="fw-semibold">
//                     Does your organisation supports Manual testing?
//                   </Form.Label>

//                   <div style={{ marginLeft: "10px" }}>
//                     <Form.Check
//                       type="radio"
//                       label="yes"
//                       name="formHorizontalRadios"
//                       id="formHorizontalRadios1"
//                     />
//                   </div>

//                   <div style={{ marginLeft: "50px" }}>
//                     <Form.Check
//                       type="radio"
//                       label="no"
//                       name="formHorizontalRadios"
//                       id="formHorizontalRadios2"
//                     />
//                   </div>
//                 </Form.Group>

//                 <Row className="mb-3">
//                   <Form.Group
//                     as={Col}
//                     md="6"
//                     controlId="validationFormikplant2"
//                   >
//                     <Form.Label className="fw-semibold">
//                       Choose Plant
//                     </Form.Label>
//                     <InputGroup hasValidation>
//                       <Form.Select
//                         name="plant"
//                         value={values.plant}
//                         onChange={handleChange}
//                         isValid={touched.plant && !errors.plant}
//                         aria-label="Default select example"
//                       >
//                         <option>Select Plant</option>
//                         <option value="1">MR One</option>
//                         <option value="2">MR Two</option>
//                         <option value="3">MR Three</option>
//                       </Form.Select>
//                       <Form.Control.Feedback type="invalid" tooltip>
//                         {errors.plant}
//                       </Form.Control.Feedback>
//                     </InputGroup>
//                   </Form.Group>
//                   <Form.Group
//                     as={Col}
//                     md="6"
//                     controlId="validationFormik103"
//                     className="position-relative"
//                   >
//                     <Form.Label className="fw-semibold">Choose Area</Form.Label>
//                     <Form.Select
//                       name="area"
//                       value={values.area}
//                       onChange={handleChange}
//                       isValid={touched.area && !errors.area}
//                       aria-label="Default select example"
//                     >
//                       <option>Select Area</option>
//                       <option value="1">MR One</option>
//                       <option value="2">MR Two</option>
//                       <option value="3">MR Three</option>
//                     </Form.Select>

//                     <Form.Control.Feedback type="invalid" tooltip>
//                       {errors.area}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Row>
//                 {/* <Row className="mb-3">
//                   <Form.Group
//                     as={Col}
//                     md="6"
//                     controlId="validationFormik104"
//                     className="position-relative"
//                   >
//                     <Form.Label className="fw-semibold">
//                       Choose Shift
//                     </Form.Label>
//                     <Form.Select
//                       name="shift"
//                       value={values.shift}
//                       onChange={handleChange}
//                       isValid={touched.shift && !errors.shift}
//                       aria-label="Default select example"
//                     >
//                       <option>Select Shift</option>
//                       <option value="1">MR One</option>
//                       <option value="2">MR Two</option>
//                       <option value="3">MR Three</option>
//                     </Form.Select>

//                     <Form.Control.Feedback type="invalid" tooltip>
//                       {errors.majorReason}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                   <Form.Group
//                     as={Col}
//                     md="6"
//                     controlId="validationFormik105"
//                     className="position-relative"
//                   >
//                     <Form.Label className="fw-semibold">
//                       Choose Machine
//                     </Form.Label>
//                     <Form.Select
//                       name="machine"
//                       value={values.machine}
//                       onChange={handleChange}
//                       isValid={touched.machine && !errors.machine}
//                       aria-label="Default select example"
//                     >
//                       <option>Select Machine</option>
//                       <option value="1">MR One</option>
//                       <option value="2">MR Two</option>
//                       <option value="3">MR Three</option>
//                     </Form.Select>

//                     <Form.Control.Feedback type="invalid" tooltip>
//                       {errors.minorReason}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Row> */}
//                 <Row>
//                   <Form.Group
//                     as={Col}
//                     md="6"
//                     controlId="validationFormik101"
//                     className="position-relative"
//                   >
//                     <Form.Label className="fw-semibold">
//                       Set Planned Downtime
//                     </Form.Label>
//                     <Form.Control
//                       type="time"
//                       name="plannedDownTime"
//                       value={values.plannedDownTime}
//                       onChange={handleChange}
//                       isValid={
//                         touched.plannedDownTime && !errors.plannedDownTime
//                       }
//                     />
//                     {/* <Form.Control.Feedback tooltip>
//                       Looks good!
//                     </Form.Control.Feedback> */}
//                   </Form.Group>
//                   <Form.Group
//                     as={Col}
//                     md="6"
//                     controlId="validationFormik105"
//                     className="position-relative"
//                   >
//                     <Form.Label className="fw-semibold">
//                       Select Month
//                     </Form.Label>
//                     <Form.Select
//                       name="month"
//                       value={values.month}
//                       onChange={handleChange}
//                       isValid={touched.month && !errors.month}
//                       aria-label="Default select example"
//                     >
//                       <option>Select Month</option>
//                       <option value="1">MR One</option>
//                       <option value="2">MR Two</option>
//                       <option value="3">MR Three</option>
//                     </Form.Select>

//                     <Form.Control.Feedback type="invalid" tooltip>
//                       {errors.minorReason}
//                     </Form.Control.Feedback>
//                   </Form.Group>
                  
//                 </Row>

//                 <Row className="mb-3">
//                   <Form.Group
//                     as={Col}
//                     md="6"
//                     className="position-relative mb-3"
//                   >
//                     <Form.Label className="fw-semibold">
//                       Enter Total Parts to be Produced
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       required
//                       name="totalParts"
//                       onChange={handleChange}
//                       isInvalid={!!errors.totalParts}
//                     />
//                     <Form.Control.Feedback type="invalid" tooltip>
//                       {errors.description}
//                     </Form.Control.Feedback>
//                   </Form.Group>
                 
//                   <Form.Group
//                     as={Col}
//                     md="6"
//                     className="position-relative mb-3"
//                   >
//                     <Form.Label className="fw-semibold">
//                       Enter Parts per Cycle
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       required
//                       name="partsPerCycle"
//                       onChange={handleChange}
//                       isInvalid={!!errors.partsPerCycle}
//                     />
//                     <Form.Control.Feedback type="invalid" tooltip>
//                       {errors.description}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                 </Row>

//                 <Form.Group className="position-relative mb-3 d-flex justify-content-center">
//                   <Form.Check
//                     required
//                     name="terms"
//                     label="Agree to terms and conditions"
//                   />
//                 </Form.Group>
//                 <div className="d-flex justify-content-center">
//                   <Button
//                     className="bg-ey-primary text-black fw-semibold" type="submit">Submit form</Button>
//                 </div>
//               </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default ProductionForm;


import MyCard from "../components/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

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
  {
    name: "Machine2",
    area: "Press Shop",
  },
  {
    name: "Machine 3",
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
        <InputGroup.Text id="basic-addon2">
          <CiSearch />
        </InputGroup.Text>
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


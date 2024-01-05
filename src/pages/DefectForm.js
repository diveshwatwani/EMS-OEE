import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from 'react-router-dom';
import * as formik from "formik";
import * as yup from "yup";


function DefectForm() {
  const navigate = useNavigate();
  const { Formik } = formik;

  const schema = yup.object().shape({
    plant: yup.string().required(),
    shop: yup.string().required(),
    shift: yup.string().required(),
    machine: yup.string().required(),
    plannedDownTime: yup.date().required(),
    partsPerCycle: yup.number().required(),
    totalParts: yup.number().required(),
    defects: yup.number().required(),
  });

  return (
    <div>
   
    <div className="d-flex flex-column  align-items-center mt-4">
      
      <h3 className="text-center">Defect Details Form</h3>
      <p style={{ fontSize: "14px", margin: "0px", textAlign: "center" }}>
        Please fill this Defect Details form with the requested information.
      </p>
      <div className="mx-5 my-4 p-3  shadow col-md-8 rounded-2 border">
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{}}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormikplant2"
                  >
                    <Form.Label className="fw-semibold">
                       Select Plant
                    </Form.Label>
                    <InputGroup hasValidation>
                      <Form.Select
                        name="plant"
                        value={values.plant}
                        onChange={handleChange}
                        isValid={touched.plant && !errors.plant}
                        aria-label="Default select example"
                      >
                        <option>Select Plant</option>
                        <option value="1">MR One</option>
                        <option value="2">MR Two</option>
                        <option value="3">MR Three</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.plant}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik103"
                    className="position-relative"
                  >
                    <Form.Label className="fw-semibold">Select Shop</Form.Label>
                    <Form.Select
                      name="shop"
                      value={values.shop}
                      onChange={handleChange}
                      isValid={touched.shop && !errors.shop}
                      aria-label="Default select example"
                    >
                      <option>Select Shop</option>
                      <option value="1">MR One</option>
                      <option value="2">MR Two</option>
                      <option value="3">MR Three</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.shop}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik104"
                    className="position-relative"
                  >
                    <Form.Label className="fw-semibold">
                    Select Shift
                    </Form.Label>
                    <Form.Select
                      name="shift"
                      value={values.shift}
                      onChange={handleChange}
                      isValid={touched.shift && !errors.shift}
                      aria-label="Default select example"
                    >
                      <option>Select Shift</option>
                      <option value="1">MR One</option>
                      <option value="2">MR Two</option>
                      <option value="3">MR Three</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.majorReason}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik105"
                    className="position-relative"
                  >
                    <Form.Label className="fw-semibold">
                    Select Machine
                    </Form.Label>
                    <Form.Select
                      name="machine"
                      value={values.machine}
                      onChange={handleChange}
                      isValid={touched.machine && !errors.machine}
                      aria-label="Default select example"
                    >
                      <option>Select Machine</option>
                      <option value="1">MR One</option>
                      <option value="2">MR Two</option>
                      <option value="3">MR Three</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.minorReason}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    className="position-relative mb-3"
                  >
                    <Form.Label className="fw-semibold">
                      Enter Total Defects
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      name="defects"
                      onChange={handleChange}
                      isInvalid={!!errors.defects}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.description}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                {/* <Form.Group className="position-relative mb-3 d-flex justify-content-center">
                  <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                  />
                </Form.Group> */}
                <div className="d-flex justify-content-center">
                  <Button
                    className="bg-ey-primary text-black fw-semibold" type="submit">Submit</Button>
                </div>
              </Form>
          )}
        </Formik>
      </div>
      
    </div>
    <div className="d-flex justify-content-end mr-3">
        {/* Add padding to the right of the "Next" button */}
        <div style={{ marginRight: '25px' }}>
          <Button className="bg-ey-primary text-black fw-semibold" onClick={() => navigate('/downtime')}>Next</Button>
        </div>
      </div>
    </div>
  );
}

export default DefectForm;

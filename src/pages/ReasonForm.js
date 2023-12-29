import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

function ReasonForm() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    
    eventType: yup.string().required(),
    opsId: yup.number().required(),
    majorReason: yup.string().required(),
    minorReason: yup.string().required(),
    subMinor: yup.string().required(),
    subsubMinor: yup.string().required(),
    description: yup.string().required(),
    // terms: yup.bool().required().oneOf([true], "terms must be accepted"),
  });

  return (
    <div className="d-flex flex-column  align-items-center ">
      <div className="mx-5 my-4  p-3  shadow col-md-12 rounded-2 border">
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
                  controlId="validationFormikequipmentIdentifer2"
                >
                  <Form.Label className="fw-semibold">Select Event Type</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Select
                      name="eventType"
                      value={values.eventType}
                      onChange={handleChange}
                      isValid={
                        touched.eventType && !errors.eventType
                      }
                      aria-label="Default select example"
                    >
                      <option>Select Event Type</option>
                      <option value="1">Planned</option>
                      <option value="2">Unplanned</option>
                      <option value="3">Other</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.equipmentIdentifer}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormik103"
                  className="position-relative"
                >
                  <Form.Label className="fw-semibold">Operator Id</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter operator Id"
                    name="opsId"
                    value={values.opsId}
                    onChange={handleChange}
                    isInvalid={!!errors.opsId}
                  />

                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.opsId}
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
                  <Form.Label className="fw-semibold">Select Major Reason</Form.Label>
                  <Form.Select
                    name="majorReason"
                    value={values.majorReason}
                    onChange={handleChange}
                    isValid={touched.majorReason && !errors.majorReason}
                    aria-label="Default select example"
                  >
                    <option>Select Major Reason</option>
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
                  <Form.Label className="fw-semibold">Select Minor Reason</Form.Label>
                  <Form.Select
                    name="minorReason"
                    value={values.minorReason}
                    onChange={handleChange}
                    isValid={touched.minorReason && !errors.minorReason}
                    aria-label="Default select example"
                  >
                    <option>Select Minor Reason</option>
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
                <Form.Group as={Col} md="6" className="position-relative">
                  <Form.Label className="fw-semibold">Select SubMinor Reason</Form.Label>
                  <Form.Select
                    name="subMinor"
                    value={values.subMinor}
                    onChange={handleChange}
                    isValid={touched.subMinor && !errors.subMinor}
                    aria-label="Default select example"
                  >
                    <option>Select Sub Minor Reason</option>
                    <option value="1">MR One</option>
                    <option value="2">MR Two</option>
                    <option value="3">MR Three</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.subMinor}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" className="position-relative">
                  <Form.Label className="fw-semibold">Select Sub Sub Minor Reason</Form.Label>
                  <Form.Select
                    name="subsubMinor"
                    value={values.subsubMinor}
                    onChange={handleChange}
                    isValid={touched.subsubMinor && !errors.subsubMinor}
                    aria-label="Default select example"
                  >
                    <option>Select Sub Sub Minor Reason</option>
                    <option value="1">MR One</option>
                    <option value="2">MR Two</option>
                    <option value="3">MR Three</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.subsubMinor}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="6" className="position-relative mb-3">
                  <Form.Label className="fw-semibold">Description</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Enter Description"
                    name="description"
                    onChange={handleChange}
                    isInvalid={!!errors.description}
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
                <Button className="bg-ey-primary text-black fw-semibold" type="submit">Submit</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ReasonForm;

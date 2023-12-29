import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import Header from "../components/Header1";

function ProductionForm() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    plant: yup.string().required(),
    shop: yup.string().required(),
    month: yup.string().required(),
    plannedDownTime: yup.date().required(),
    partsPerCycle: yup.number().required(),
    totalParts: yup.number().required(),
  });

  return (
    <div>
      <Header/>
    <div className="d-flex flex-column  align-items-center mt-4">
      <h3 className="text-center">Production Details Form</h3>
      <p style={{ fontSize: "14px", margin: "0px", textAlign: "center" }}>
        Please fill this Production Detail form with the requested information.
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
                <Form.Group as={Col} md="6" controlId="validationFormikplant2">
                  <Form.Label className="fw-semibold">Select Plant</Form.Label>
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
                    {errors.area}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormik101"
                  className="mb-3 position-relative"
                >
                  <Form.Label className="fw-semibold">
                    Set Planned Downtime
                  </Form.Label>
                  <Form.Control
                    type="time"
                    name="plannedDownTime"
                    value={values.plannedDownTime}
                    onChange={handleChange}
                    isValid={touched.plannedDownTime && !errors.plannedDownTime}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormik105"
                  className="mb-3 position-relative"
                >
                  <Form.Label className="fw-semibold">Select Month</Form.Label>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <DatePicker
                      name="month"
                      selected={values.month ? new Date(values.month) : null}
                      onChange={(date) => {
                        handleChange({
                          target: { name: "month", value: date },
                        });
                      }}
                      showMonthYearPicker
                      dateFormat="MMMM yyyy"
                      isInvalid={touched.month && !!errors.month}
                      className="form-control custom-date-picker"
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.month}
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="6" className="mb-3 position-relative ">
                  <Form.Label className="fw-semibold">
                    Enter Total Parts to be Produced
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="totalParts"
                    onChange={handleChange}
                    isInvalid={!!errors.totalParts}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.totalParts}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3 position-relative ">
                  <Form.Label className="fw-semibold">
                    Enter Parts per Cycle(Ideal Rate)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="partsPerCycle"
                    onChange={handleChange}
                    isInvalid={!!errors.partsPerCycle}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.partsPerCycle}
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
                  className="bg-ey-primary text-black fw-semibold"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </div>
  );
}

export default ProductionForm;

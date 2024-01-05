import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import imageurl from '../assets/machine.png';

function MyCard({
  title,
  area,
  availability,
  performance,
  quality,
  oee,
}) {
  return (
    <Card className="rounded-4 overflow-hidden mt-5 shadow-lg" style={{ width: "15rem"}}>
      <Card.Title className="bg-black py-2 text-center text-white ">
        {title}
      </Card.Title>
      <div className="d-flex justify-content-center ">
        <Card.Img
          height={70}
          style={{ width: "auto" }}
          className="mb-2 border rounded-1"
          // src="https://placehold.co/10"
          src={imageurl}
        />
      </div>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="bg-ey-primary-light">
          Area: {area}
        </ListGroup.Item>
        <ListGroup.Item>Availability: {availability}% </ListGroup.Item>
        <ListGroup.Item className="bg-ey-primary-light">
          Performance: {performance}%
        </ListGroup.Item>
        <ListGroup.Item>Quality: {quality}%</ListGroup.Item>
      </ListGroup>
      <Card.Body className="bg-black text-center fs-3 fw-bolder text-white">OEE : {oee}%</Card.Body>
    </Card>
  );
}

export default MyCard;

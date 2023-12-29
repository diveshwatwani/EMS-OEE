import Card from "react-bootstrap/Card";

// Updated MyCard component
function DowntimeCard({ title, imageSrc, onCardClick, selected, downtimes }) {
    const handleClick = () => {
      onCardClick(title, downtimes);
    };
  
    return (
      <Card
        className={`rounded-4 overflow-hidden mt-5 shadow-lg ${selected ? "selected" : ""}`}
        style={{ width: "15rem" }}
        onClick={handleClick}
      >
        <div className="d-flex justify-content-center ">
          <Card.Img
            height={100}
            style={{ width: "100%" }}
            className="mb-1 border rounded-1"
            src={imageSrc || "https://placehold.co/10"}
            alt={title}
          />
        </div>
        <Card.Title className="bg-black py-2 text-center text-white">
          {title}
        </Card.Title>
      </Card>
    );
  }
  
export default DowntimeCard;

import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export const CustomPagesCards = ({ imgUrl, name }) => {
  return (
    <Card style={{ width: "18rem" }} className="border-0">
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

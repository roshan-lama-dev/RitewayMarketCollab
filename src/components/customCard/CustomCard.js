import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export const CustomCard = ({ imgUrl, name, path }) => {
  const navigate = useNavigate();
  const handelOnClick = () => {
    navigate(path);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>

        <div className="btn-primary fw-bold h5 " onClick={handelOnClick}>
          shop
        </div>
      </Card.Body>
    </Card>
  );
};

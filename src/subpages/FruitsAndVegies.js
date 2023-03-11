import React from "react";
import { Container, Row } from "react-bootstrap";
import veg from "../assets/veg.png";
import fruits from "../assets/fruits.png";
import food from "../assets/food.png";
import { CustomPagesCards } from "../components/customCard/CustomPagesCards";

export const FruitsAndVegies = () => {
  const product = [
    {
      name: " Fruits and vegies",
      imgUrl: fruits,
      path: "/fruitsandvegies",
    },
    {
      name: " Meet and Seafood",
      imgUrl: food,
      path: "/meetandseafood",
    },
    {
      name: " Frozen",
      imgUrl: veg,
      path: "/frozen",
    },
    {
      name: "Snacks and Dry foods ",
      imgUrl: veg,
      path: "/snacksanddryfoods",
    },
    {
      name: "Dairy and Freeze",
      imgUrl: veg,
      path: "/dairyandfreeze",
    },
    {
      name: " Liquor and Drinks",
      imgUrl: veg,
      path: "/liquoranddrinks",
    },
  ];
  return (
    <Container>
      <Row className="mt-3 p-5 text-center ">
        <h2 className="fw-bold">Fruits and Vegies</h2>

        <h6 className="fw-bold p-4">
          We supply a comprehensive range of fresh fruits and vegetables
          products. We believe in supplying only the best and freshest fruits
          and vegetables at a competitive price to all our customers.
        </h6>
        <hr />
      </Row>

      <Row className="d-flex justify-content-center align-items-center gap-5">
        {product.map((item, i) => (
          <CustomPagesCards key={i} {...item} />
        ))}
      </Row>
    </Container>
  );
};

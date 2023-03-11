import React from "react";
import { Container, Row } from "react-bootstrap";
import veg from "../assets/veg.png";
import { CustomCard } from "../components/customCard/CustomCard";

const Products = () => {
  const product = [
    {
      name: " Fruits and vegies",
      imgUrl: veg,
      path: "/fruitsandvegies",
    },
    {
      name: " Meet and Seafood",
      imgUrl: veg,
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
        <h2 className="fw-bold">Our Products</h2>
        <hr />
      </Row>

      <Row className="d-flex justify-content-center align-items-center gap-5">
        {product.map((item, i) => (
          <CustomCard key={i} {...item} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;

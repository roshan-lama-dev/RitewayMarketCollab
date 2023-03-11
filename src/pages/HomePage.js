import React, { useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export const HomePage = () => {
  return (
    <MainLayout>
      <Carousel className="homecarousel">
        <Carousel.Item>
          <Row className="">
            <Col className="d-flex flex-column align-items-center justify-content-center introheader">
              <h3>Welcome to Riteway Food Service</h3>
              <p>Your one-stop-shop for all your catering needs</p>
              <div className="btn-secondary">Order Now</div>
            </Col>
            <Col className="bgFirstCarousel">jeiohjsif</Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="">
            <Col className="bgFirstCarousel">jeiohjsif</Col>
            <Col className="d-flex flex-column align-items-center justify-content-center introheader">
              <h3>Welcome to Riteway Food Service</h3>
              <p>Your one-stop-shop for all your catering needs</p>
              <div className="btn-secondary">Order Now</div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>

      <section class="section-1">
        <div class="section-1-content">
          <h2>About Us</h2>
          {/* <div
            class="underline align-center ml-auto mr-auto mt-2"
            height="0px"
            style="border: 5px solid rgba(240, 51, 51, 0.5); width: 50px;"
          ></div> */}
          <p>
            Riteway Food Service is a family-owned wholesale business that has
            been supplying a wide range of quality fresh foods and catering
            needs since 1985. We pride ourselves on providing exceptional
            service and delivering the freshest products to our customers.
          </p>
          <a href="#contact" class="btn-secondary">
            Contact Us
          </a>
        </div>
        <div class="section-1-image">
          <img
            src="https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="About Us image"
          />
        </div>
      </section>
      <section class="products" id="products">
        <h2 class="section-title">
          Our Products
          <div className="line"></div>
        </h2>

        <div class="product-list">
          <div class="product-item">
            <img
              src="https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29rZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product 1"
            />
            <h3>Product 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              est eu elit sagittis pellentesque quis vel massa.
            </p>
          </div>
          <div class="product-item">
            <img
              src="https://images.unsplash.com/photo-1592892111425-15e04305f961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29rZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product 2"
            />
            <h3>Product 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              est eu elit sagittis pellentesque quis vel massa.
            </p>
          </div>
          <div class="product-item">
            <img src="product-3.jpg" alt="Product 3" />
            <h3>Product 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              est eu elit sagittis pellentesque quis vel massa.
            </p>
          </div>
          <div class="product-item">
            <img src="product-4.jpg" alt="Product 4" />
            <h3>Product 4</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
              est eu elit sagittis pellentesque quis vel massa.
            </p>
          </div>
        </div>
      </section>

      {/* <footer>
        <div class="footer-content">
          <div class="logo">
            <img src="logo.png" alt="Riteway Food Service Logo" />
          </div>
          <div class="contact">
            <h3>Contact Us</h3>
            <p>123 Main Street</p>
            <p>Sydney, NSW 2000</p>
            <p>Phone: (02) 1234 5678</p>
            <p>Email: info@ritewayfoods.com.au</p>
          </div>
          <div class="social">
            <h3>Follow Us</h3>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer> */}
    </MainLayout>
  );
};

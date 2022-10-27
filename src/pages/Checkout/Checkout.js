import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {

  const checkoutDone = () => {
    alert('Your Checkout is Successful');
  }

  const categoryNews = useLoaderData();
  return (
    <div className="text-center">
      <Container>
        <h1 className="mb-3">Checkout</h1>
        <hr />
        <h3>
          This is the Checkout page of:{" "}
          <span style={{ color: "orange" }}>{categoryNews.name}</span>{" "}
        </h3>
        <p>Just click on the Checkout button</p>
        <button onClick={checkoutDone} className="btn btn-primary">Checkout</button>
      </Container>
    </div>
  );
};

export default Checkout;

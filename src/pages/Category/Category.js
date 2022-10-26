import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <Container>
        <h1 className="text-center">
          Welcome to{" "}
          <span style={{ color: "orange" }}>{categoryNews.name}</span>
        </h1>
        <Card>
          <Card.Img
            variant="top"
            src={categoryNews.img}
            style={{ height: "300px" }}
          />
          <Card.Body>
            <Card.Title>{categoryNews.name}</Card.Title>
            <Card.Text>{categoryNews.desc}</Card.Text>
            <Card.Text>
              <ul>
                <li>{categoryNews.details1}</li>
                <li>{categoryNews.details2}</li>
                <li>{categoryNews.details3}</li>
                <li>{categoryNews.details4}</li>
              </ul>
            </Card.Text>
            <Button variant="primary">Get Premium Access</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Category;

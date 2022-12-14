import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pdf from "react-to-pdf";

const ref = React.createRef();


const Category = () => {
  const categoryNews = useLoaderData();

 

  const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://expert-programmer-server.vercel.app/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])

  return (
    <div>
      <Container className="mb-4">
        <h1 className="text-center">
          Welcome to{" "}
          <span style={{ color: "orange" }}>{categoryNews.name}
          <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <Button onClick={toPdf} variant="primary" size="sm" className="ms-2">Download PDF</Button>}
      </Pdf>
          
          </span>
        </h1>
        <Card ref={ref}>
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
            <div className="text-center">
                
            <Button variant="info" className="text-white">
                <Link to={`/checkout/${categoryNews.id}`}>Get Premium Access
                </Link>
            </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Category;

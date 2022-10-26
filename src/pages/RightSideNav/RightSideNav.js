import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const RightSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://expert-programmer-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/category/${category.id}`}>
            <Row xs={1} md={2} className="g-4">
              <Col>
                <Card>
                  <Card.Img variant="top" src={category.img} />
                  <Card.Body>
                    <Card.Title>{category.name}</Card.Title>
                    <Card.Text>
                      {category.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default RightSideNav;

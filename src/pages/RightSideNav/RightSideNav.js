import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.jpeg';
import GITHUB from '../../assets/github.jpg';
import JS from '../../assets/js.jpg';
import REACT from '../../assets/react.jpg';
import NODE from '../../assets/node.png';

const RightSideNav = () => {
  return (
    <CardGroup>
        <Row  xs={1} md={2} className='g-4'>
        <Card>
        <Card.Img variant="top" src={HTML} style={{height: '138px'}} />
        <Card.Body>
          <Card.Title>HTML</Card.Title>
          <Card.Text>
            This is a basic part to start learning any programming language.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={CSS} style={{height: '138px'}}/>
        <Card.Body>
          <Card.Title>CSS</Card.Title>
          <Card.Text>
            After complete HTML you must learn to CSS for style.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={GITHUB} style={{height: '138px'}}/>
        <Card.Body>
          <Card.Title>GITHUB</Card.Title>
          <Card.Text>
            It is the best place for any developer to store your code here. Really it is fantastic.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={JS} style={{height: '138px'}}/>
        <Card.Body>
          <Card.Title>JavaScript</Card.Title>
          <Card.Text>
            This is one of the best programming language now a days. Javascript's deman is out of bound. You can use this except web, like any other cross platform.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={REACT} style={{height: '138px'}}/>
        <Card.Body>
          <Card.Title>REACT</Card.Title>
          <Card.Text>
            React is the most exiciting and famous JS library now a days. Your life will be more easier when you start using React. 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={NODE} style={{height: '138px'}}/>
        <Card.Body>
          <Card.Title>NODE</Card.Title>
          <Card.Text>
            Node JS is the very common backend programming language. Lot of developers use Node JS. Just explore this.
          </Card.Text>
        </Card.Body>
      </Card>
        </Row>
      
    </CardGroup>
  );
};

export default RightSideNav;

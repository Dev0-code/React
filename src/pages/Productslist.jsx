import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Productslist() {
  const [product, setProduct] = useState([]);
  // const fetchData = () => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((data) => data.json())
  //     .then((data) => setProduct(data));
  // }
  const fetchData = async () => {
    var data = await fetch("https://fakestoreapi.com/products")
      // data.json().then((data) => setProduct(data));
      data = await data.json();
      setProduct(data);
  }
  useEffect(
    () => {
      fetchData();
    },
    [] /* for to avoid repeating */
  )
  console.log(product);
  return (
    <div className="container p-0">
      <Container>
        <Row>
          <Col>
            <img
              src="https://gumlet-images.assettype.com/afaqs%2F2022-08%2F69acc390-3578-4527-8355-9f443f4749e3%2FEkar.jpg?rect=0%2C0%2C1600%2C900&format=webp&w=700&dpr=0.8"
              alt=""
              srcset=""
            />
          </Col>
          <Col class="text-center">
            <h1>Ekart</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
      </Container>
      {product.length>0?
      <div>
        <Row>
          {product.map((i) => (
            <Col lg={3} md={4} sm={6}>
              <Card className="text-center p-4 my-3 shadow" style={{ width: "310px", height: "750px" }}>
                <Card.Img src={i.image} height={"400px"} />
                <Card.Body>
                  <Card.Title>{i.title.length>30?i.title.slice(0,40)+".....":i.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>category: {i.category}</ListGroup.Item>
                  <ListGroup.Item>Price: ${i.price}</ListGroup.Item>
                  <ListGroup.Item>Rating: <span className={i.rating.rate > 4 ? 'text-success' : i.rating.rate > 3 ? 'text-warning' : i.rating.rate > 2 ? 'text-danger' : i.rating.rate > 4 ? 'text-success' : 'text-danger' }>{i.rating.rate}</span></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#" style={{ color: "black", textDecoration: "none" }}>Review : <i class="fa-solid fa-star" style={{ color: "yellow" }}></i><i class="fa-solid fa-star" style={{ color: "yellow" }}></i><i class="fa-solid fa-star" style={{ color: "yellow" }}></i><i class="fa-solid fa-star" style={{ color: "yellow" }}></i><i class="fa-solid fa-star-half" style={{ color: "yellow" }}></i></Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      :
      <div className="text-center m-4">
      <i class="fa-solid fa-spinner fa-spin fa-4x" style={{ color: "blue" }}></i>
      </div>
}
    </div>
  );
}

export default Productslist;

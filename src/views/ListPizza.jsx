import React from "react";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const ListPizza = () => {
  const { pizzas, addToCart } = useContext(PizzaContext);
  const navigate = useNavigate();

  return (
    <div className="cards">
      {pizzas.map((pizza, i) => (
        <Card key={i}>
          <Card.Img variant="top" src={pizza.img} className="card-img_list" /> {/* Aplica la clase CSS a la imagen */}
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <Card.Text> {pizza.ingredients.join(", ")}</Card.Text>
            <Card.Text>Precio:$ {pizza.price}</Card.Text>
            <Button className="boton" variant="danger" onClick={() => navigate(`/Pizza/${pizza.id}`)}>
              Ver Más Detalles
            </Button>
            <Button onClick={() => addToCart(pizza)}>
              Añadir a 🛒
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListPizza;


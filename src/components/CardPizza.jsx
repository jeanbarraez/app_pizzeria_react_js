/* import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const CardPizza = ({ pizzaDescription }) => {
  const { name, price, ingredients } = pizzaDescription;
  const navigate = useNavigate();

  const ClickPizzas = () => {
    navigate(`/Pizza`);
  };
  return (
    <>
      <section className="pokemonCard text-center my-3 d-flex justify-content-center ">
        <Card className="card">
          <article>
            <Card.Img className="CardImg" src={img} alt={name} />
          </article>
          <article className="cardDetails">
            <Card.Body>
              <Card.Title className="text-capitalize">
                <strong>{name}</strong>
              </Card.Title>
              <Card.Text>
                <h5>Descripcion</h5>
              </Card.Text>
              <Card.Text>
                {pizzaDescription?.map((pizza, i) => (
                  <li key={i}>
                    <strong className="text-capitalize">Ingredientes</strong>
                    <p>{pizza.ingredients.join(", ")}</p>
                  </li>
                ))}
              </Card.Text>
              <div>
                <Button>Precio:$ {pizza.price}</Button>
                <Button onClick={ClickPizzas}> Añadir🛒</Button>
              </div>
            </Card.Body>
          </article>
        </Card>
      </section>
    </>
  );
};

export default CardPizza; */


import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Pizza = () => {
  const { id } = useParams();
  const { pizzas, pizzaDescription, setPizzaDescription, addToCart } =
    useContext(PizzaContext);

  const navigate = useNavigate();

  const filter = () => {
    const pizzaFilter = pizzas.find((pizza) => pizza.id === id);
    setPizzaDescription(pizzaFilter);
  };
  useEffect(() => {
    filter();
  }, []);

  return (
    <main key={pizzaDescription.id}>
      <Card className="card-total">
        <Card.Img variant="top" src={pizzaDescription.img} className="card-img" />
        <article>
          <Card.Body>
            <h2>{pizzaDescription.name}</h2>
            <Card.Text>Descripcion</Card.Text>
            <p className="descripcion">{pizzaDescription.desc}</p>
          </Card.Body>
        </article>
        <section>
          <span><strong>Precio:${pizzaDescription.price}</strong></span>
          <Button  className = "botn-idpizza"onClick={() => addToCart(pizzaDescription)}>
            Añadir a 🛒
          </Button>
          {/*  <Button onClick={()=>navigate("/ pizza")}>Añadir🛒</Button>  */}
        </section>
      </Card>
    </main>
  );
};

export default Pizza;

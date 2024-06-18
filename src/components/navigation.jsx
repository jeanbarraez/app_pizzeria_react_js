import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

export default function Navigation() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  const { cart } = useContext(PizzaContext);
  const totalPrice = cart.reduce(
    (total, pizza) => total + pizza.quantity * pizza.price,
    0
  );

  return (
    <Navbar className="d-flex justify-content-between px-5 py-3 Navegacion" variant="light" style={{ background: "red" }}>
      <Container>
        <div className="d-flex justify-content-between w-100">
          <Navbar.Brand className="navegacion">
            <NavLink style={{ textDecoration: "none" }} to="/" className={setActiveClass}>
              🍕Pizzeria Mamma Mia
            </NavLink>
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            <NavLink style={{ textDecoration: "none" }} to="/cart" className={setActiveClass}>
              <FaCartPlus />
              <span id="total "  className="ml-2 mx-2">$:{totalPrice} </span>
            </NavLink>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}


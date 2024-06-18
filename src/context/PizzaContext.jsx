import { useState, useEffect, createContext } from "react";
import axios from "axios";

const UrlPizzas = "/pizzas.json";
export const PizzaContext = createContext();

const PizzaContextProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaDescription, setPizzaDescription] = useState({});
  const [cart, setCart] = useState([]);

  const FindPizza = async () => {
    try {
      const response = await axios.get(UrlPizzas);
      if (response.status !== 200) {
        throw new Error("Data not found");
      }
      setPizzas(response.data);
      console.log("la respuesta de la solicitud Urlpizzas", response.data);
    } catch (err) {
      console.error("Data not found", err);
    }
  };

  const addToCart = (foundItems) => {
    // La función addToCart recibe un objeto foundItems que representa el elemento encontrado a agregar al carrito.

    const updatedCart = cart.map((item) => {
      if (item.id === foundItems.id) {
        // Si el id del elemento actual coincide con el id del elemento encontrado (foundItems.id), se actualiza la cantidad.
        return { ...item, quantity: (item.quantity || 0) + 1 }; // Se incrementa la cantidad en 1.
      }
      return item; // Se devuelve el elemento sin cambios si no coincide con el encontrado.
    });

    if (!updatedCart.find((item) => item.id === foundItems.id)) {
      // Se verifica si el elemento encontrado no está presente en el carrito actualizado.
      updatedCart.push({ ...foundItems, quantity: 1 }); // Si no se encuentra, se agrega el elemento encontrado al carrito con una cantidad inicial de 1.
    }

    setCart(updatedCart); // Se actualiza el estado del carrito (setCart) con el nuevo array actualizado.
  };

  useEffect(() => {
    FindPizza();
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        setPizzas,
        addToCart,
        cart,
        setCart,
        pizzaDescription,
        setPizzaDescription,
      }}
    >
      {children}
    </PizzaContext.Provider>
  ); 
};

export default PizzaContextProvider;

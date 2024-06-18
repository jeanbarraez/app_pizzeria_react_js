import { useContext, useEffect } from "react";
import { PizzaContext } from "../context/PizzaContext";
import Button from "react-bootstrap/Button";
const PurchasesMade = () => {
  const { cart, setCart } = useContext(PizzaContext);

  const totalPrice = cart.reduce((acc, foundItems) => {
    return acc + foundItems.quantity * foundItems.price;//foundItems.quantity, Obtiene la cantidad del elemento actual del carrito
    //foundItems.price: Obtiene el precio del elemento actual del carrito
  }, 0);//0, inicializa el valor inicial del acumulador (acc) a 0.

  const decrement = (foundItems) => {//Parámetro foundItems: La función decrement recibe un parámetro llamado foundItems, que representa el ID del elemento del carrito que se desea decrementar.
    const updatedPurchase = cart.map((item) => {
      if (item.id === foundItems && item.quantity > 0) {// Compara el ID del elemento actual (item.id) con el ID recibido como parámetro (foundItems). Si son iguales, significa que se ha encontrado el elemento que se desea decrementar.
        //item.quantity > 0: Verifica si la cantidad del elemento actual es mayor a 0. Esto evita que la cantidad se vuelva negativa.
        return { ...item, quantity: item.quantity - 1 };//Si se cumplen ambas condiciones, se devuelve un nuevo objeto que representa el elemento actualizado. Se utiliza la sintaxis de propagación (...item) 
        //para copiar todas las propiedades del objeto item actual, y luego se actualiza la propiedad quantity restándole 1.
      }
      return item;//Si no se cumplen las condiciones, se devuelve el objeto item sin cambios.
    });
    const filter = updatedPurchase.filter(
      (foundItems) => foundItems.quantity > 0//filter() crea un nuevo array llamado filter que contiene solo los elementos cuya cantidad es mayor que 0.
    );
    setCart(filter);//para actualizar el estado del carrito con el nuevo array filter, que contiene solo los elementos con cantidades válidas.
  };

  const increment = (foundItems) => {//foundItems, que representa el ID del elemento del carrito que se desea incrementar.
    const updatedPurchase = cart.map((item) => {
      if (item.id === foundItems) {//Dentro de la función de map(), se verifica si el ID del elemento actual (item.id) es igual al ID recibido como parámetro (foundItems).
        return { ...item, quantity: (item.quantity || 1) + 1 };//Si se cumple la condición, se devuelve un nuevo objeto que representa el elemento actualizado. Se utiliza la sintaxis de propagación (...item) 
        //para copiar todas las propiedades del objeto item actual, y luego se actualiza la propiedad quantity incrementándola en 1.
      }
      return item;//Si el elemento no coincide con el ID recibido, se devuelve el elemento sin cambios.
    });

    setCart(updatedPurchase);//Una vez se ha actualizado el array updatedPurchase con la cantidad incrementada del elemento deseado, se utiliza setCart() 
    //para actualizar el estado del carrito con el nuevo array que contiene los elementos actualizados.
  };

  useEffect(() => {}, [cart]);

  return (
    <main className="daddy">
      <h4>Detalles del pedido:</h4>
      {cart.map((pizza, k) => (
        <article key={k}>
          <section className="image-name">
            <img src={pizza.img} alt={pizza.name} />
            <h4>{pizza.name}</h4>
          </section>
          <section className="price-increment-decrement">
            <h4>${pizza.price * (pizza.quantity || 1)}</h4> {/* pizza.quantity: Representa la cantidad de esa pizza que se ha seleccionado para comprar. Si no se ha seleccionado ninguna cantidad (o la cantidad es falsa), 
            se utiliza el valor predeterminado de 1 para asegurar que al menos haya una unidad de la pizza en el cálculo. */}          
            <Button variant="danger" onClick={() => decrement(pizza.id)}>
              Menos -
            </Button>
            <h4>{pizza.quantity || 1}</h4>
            <Button variant="success" onClick={() => increment(pizza.id)}>
              Mas +
            </Button>
          </section>
        </article>
      ))}
      <section>
      
        {/*  <h4 id="subtotal"> total: <h4>{totalPrice}</h4></h4> */} 
         <h4 id="subtotal"> Total:$ {totalPrice}</h4> 
      </section>
      <Button>Ir A Pagar</Button>
    </main>
  );
};

export default PurchasesMade;

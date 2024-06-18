

import ListPizza from "./ListPizza";

const Pizzeria_Mamma_Mia = () => {
  
  return (
    <>
      <header className="home">
        <h1>Pizzeria Mamma Mia!</h1>
        <p>Tenemos las mejores Pizzas que podrás encontrar!</p>
      </header>
      <section>
        <article>
          <ListPizza />
        </article>
      </section>
    </>
  );
};

export default Pizzeria_Mamma_Mia;


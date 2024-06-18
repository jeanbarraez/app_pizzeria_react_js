import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Pizzeria_Mamma_Mia from "./views/Pizzeria_Mamma_Mia";
import Pizza from "./views/Pizza";
import NotFound from "./views/NotFound";
import PurchasesMade from "./views/PurchasesMade";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Pizzeria_Mamma_Mia />} />
        <Route path="/Pizza/:id" element={<Pizza />} />
        <Route path="/cart" element={<PurchasesMade />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

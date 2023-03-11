import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { DeliveryPage } from "./pages/DeliveryPage";
import { ServicePage } from "./pages/ServicePage";
import { FruitsAndVegies } from "./subpages/FruitsAndVegies";
import { MeetAndSeafood } from "./subpages/MeetAndSeafood";
import { Frozen } from "./subpages/Frozen";
import { SnacksAndDryFoods } from "./subpages/SnacksAndDryFoods";
import { DairyAndFreeze } from "./subpages/DairyAndFreeze";
import { LiquorAndDrinks } from "./subpages/LiquorAndDrinks";
function App() {
  return (
  
      <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/service" element={<ServicePage />} />
        {/* subpages */}

        <Route path="/fruitsandvegies" element={<FruitsAndVegies />} />
        <Route path="/meetandseafood" element={<MeetAndSeafood />} />
        <Route path="/frozen" element={<Frozen />} />
        <Route path="/snacksanddryfoods" element={<SnacksAndDryFoods />} />
        <Route path="/dairyandfreeze" element={<DairyAndFreeze />} />
        <Route path="/liquoranddrinks" element={<LiquorAndDrinks />} />
      </Routes>
      </div>
  );
}

export default App;

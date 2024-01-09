import About from "./components/About";
import Hero from "./components/Hero";

import Services from "./components/Services";
import Tours from "./components/Tours";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./app.css";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Registration from "./components/Registration";
import Faq from "./components/FAQ/Faq";
import FaqHome from "./components/FAQ/FaqHome";
import Faq1 from "./components/FAQ/Faq1";
import Faq2 from "./components/FAQ/Faq2";
import Faq3 from "./components/FAQ/Faq3";
import Faq4 from "./components/FAQ/Faq4";
import ExploreTour from "./components/ExploreTour";
import AddTour from "./components/AddTour";


function App() {
  return (
    <BrowserRouter>
 
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Hero />} />
      <Route path="services" element={<Services />} />
      <Route path="tours" element={<Tours />} />
      <Route path="explore-tour/:id" element={<ExploreTour />} />
      <Route path="about" element={<About />} />
      <Route path="register" element={<Registration />} />
      <Route path="faq" element={<Faq />}>
        <Route index element={<FaqHome />} />
        <Route path="1" element={<Faq1 />} />
        <Route path="2" element={<Faq2 />} />
        <Route path="3" element={<Faq3 />} />
        <Route path="4" element={<Faq4 />} />
      </Route>
      <Route path="/add-tour" element={<AddTour />}/>
      <Route path="*" element={<NotFound />} /> 

    </Route>
   
  </Routes>
 
</BrowserRouter>

  );
}

export default App;

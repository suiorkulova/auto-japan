import "./App.css";
import Article from "./components/Article/Article";
import Order from "./components/Article/Order";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Auction from "./components/JapanCompany/Auction";
import CustomerCars from "./components/JapanCompany/CustomerCars";
import Car from "./components/Section/Car";
import Fit from "./components/Section/Fit";
import Japan from "./components/Section/Japan";
import Premio from "./components/Section/Premio";
import Region from "./components/Section/Region";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Car />
      <Japan />
      <Fit />
      <Region />
      <Premio />
      <Auction />
      <CustomerCars />
      <Aside />
      <Article />
      <Order />
      <Footer />
    </div>
  );
}

export default App;

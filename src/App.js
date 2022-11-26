import Featured from "./components/featured";
import Footer from "./components/header&footer/Footer";
import Header from "./components/header&footer/Header";
import Highlights from "./components/highlights";
import Location from "./components/location";
import Pricing from "./components/pricing";
import VenueNfo from "./components/venueNfo";
import "./resources/styles.css";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venuenfo">
        <VenueNfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;

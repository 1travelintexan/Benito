import { Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SmallNavbar from "./components/SmallNavbar";
import southBeach from "./images/southBeach.png";
import town from "./images/ericeira.png";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <div id="loader">
        <Loader color="green" size="xl" variant="bars" />
      </div>
    );
  }
  return (
    <div id="app">
      <Navbar />
      <SmallNavbar />
      <div id="first-image">
        <h3>
          <span className="sub-heading">Touch</span> the body
        </h3>
        <h3>
          <span className="sub-heading">Heal</span> the mind
        </h3>
        <h3>
          <span className="sub-heading">Calm</span> the spirit
        </h3>
      </div>
      {/* <img src={southBeach} alt="ericeira" className="image" /> */}
      <p className="paragragh">
        Located in beautiful Ericeira, Portgual. There is no better way to relax
        after a long day at the beach, or after an amazing surf session than
        with a relaxing massage by Benito. Trained and certified at one of the
        most renowned massage schools in Lisbon. Benito is quickly becoming
        recognised as Ericeira's premier massuese. He promises to devout his
        full attention to all of your body's needs.
      </p>
      <img src={town} alt="ericeira" className="image" />
    </div>
  );
}

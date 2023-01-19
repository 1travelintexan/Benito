import { Link } from "react-router-dom";

function SmallNavbar() {
  return (
    <nav id="small-navbar">
      <a href="#pricing" className="link">
        Pricing
      </a>
      <a href="#about" className="link">
        About
      </a>
      <a href="#contact" className="link">
        Contact
      </a>
      <a href="#location" className="link">
        Location
      </a>
      <a href="/reservation" className="link">
        Book
      </a>
    </nav>
  );
}

export default SmallNavbar;

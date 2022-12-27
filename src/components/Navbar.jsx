import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import logo from "../images/massage.png";
function Navbar() {
  return (
    <nav id="navbar">
      <Link to="/">
        <img src={logo} alt="logo" id="logo" />
      </Link>
      <Link to="/" id="heading">
        <h1>Massage by Benito</h1>
      </Link>
      <Link to="/reservation">
        <Button variant="outline" color="lime.9">
          Book Reservation
        </Button>
      </Link>
    </nav>
  );
}

export default Navbar;

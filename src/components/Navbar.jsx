import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import logo from "../images/massage.png";
function Navbar() {
  return (
    <nav id="navbar">
      <Link to="/">
        <img src={logo} alt="logo" id="logo" />
      </Link>
      <h1 id="heading">Massage by Benito</h1>
      <Link to="/reservation">
        <Button variant="outline" color="lime.9">
          Book Reservation
        </Button>
      </Link>
    </nav>
  );
}

export default Navbar;

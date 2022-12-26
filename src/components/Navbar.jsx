import { Button } from "@mantine/core";
import logo from "../images/logo.png";
function Navbar() {
  return (
    <nav id="navbar">
      <img src={logo} alt="logo" id="logo" />
      <h1>Massage by Benito</h1>
      <Button variant="outline" color="lime.9">
        Book Reservation
      </Button>
    </nav>
  );
}

export default Navbar;

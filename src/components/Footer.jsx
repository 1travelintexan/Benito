import logo from "../images/massage.png";

function Footer() {
  return (
    <div id="footer">
      <div className="footer-section">
        <h4>Massage Benedict</h4>
        <img src={logo} alt="footer logo" id="footer-logo" />
      </div>
      <div className="footer-section">
        <h4>Our Links</h4>
        <a href="#pricing">Pricing</a>
        <a href="#about">About Benito</a>
        <a href="#contact">Contact</a>
        <a href="#location">Location</a>
        <a href="/reservation">Reservation</a>
      </div>
    </div>
  );
}

export default Footer;

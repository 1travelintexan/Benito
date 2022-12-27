import logo from "../images/massage.png";
import olive3Logo from "../images/olive3-logo.png";
function Footer() {
  return (
    <div id="footer">
      <img src={logo} alt="footer logo" id="footer-logo" />
      <div className="footer-section">
        <h4>Our Links:</h4>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
        <a href="#about">About Benito</a>
        <a href="/reservation">Make a reservation</a>
      </div>
      <div className="footer-section">
        <h4>Special Thanks:</h4>
        <div className="footer-section-div">
          <img src={olive3Logo} alt="olive3 logo" />
          <p>Olive3 Hostel</p>
        </div>
        <p>Solange the Massuese</p>
        <p>Piri Piri Food Services</p>
      </div>
    </div>
  );
}

export default Footer;

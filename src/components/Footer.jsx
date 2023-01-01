import logo from "../images/massage.png";
import olive3Logo from "../images/olive3-logo.png";
import piriPiriLogo from "../images/piriPiri.png";
import solangeLogo from "../images/solangeLogo.png";

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
      <div className="footer-section-thanks">
        <h4>Special Thanks</h4>
        <a href="https://www.instagram.com/olive3hostel/" target="blank">
          <div className="footer-section-div">
            <img src={olive3Logo} alt="olive3 logo" />
            <p>Olive3 Hostel</p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/solange_m_massage_therapist/"
          target="blank"
        >
          <div className="footer-section-div">
            <img src={solangeLogo} alt="solange logo" />
            <p>Massage by Solange</p>
          </div>
        </a>
        <a href="https://www.instagram.com/piri_piri_food/" target="blank">
          <div className="footer-section-div">
            <img src={piriPiriLogo} alt="Piri Piri logo" />
            <p>Piri Piri Food</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;

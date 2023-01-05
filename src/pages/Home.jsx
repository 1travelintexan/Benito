import town from "../images/ericeira.png";
import town2 from "../images/crossroad.jpg";
import olive3 from "../images/olive3.png";
import ericeira from "../images/ericeiraRoad.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SmallNavbar from "../components/SmallNavbar";

function Home() {
  return (
    <>
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
      <div className="section" id="pricing">
        <img src={town2} alt="ericeira" className="image" />
        <div className="section-heading">
          <h2>Pricing</h2>
          <p>Relaxing Massage: 45€</p>
          <p>Sport Massage: 45€</p>
          <p>Foot Reflexology Massage: 35€</p>
          <p>Therapeutic Massage: 45€</p>
          <p>Anti Cellulite Massage: 45€</p>
          <p>Lymphatic Drainage Massage: 45€</p>
        </div>
      </div>
      <div className="section" id="about">
        <img src={ericeira} alt="ericeira" className="image" />
        <div className="section-heading">
          <h2>About Myself:</h2>
          <p>
            I am a certified massage therapist, who has a lot of passion and
            joy. It makes me so happy and grateful to see that my patients are
            just relaxed and feel more comfortable in thier bodies.
          </p>
        </div>
      </div>

      <div className="section" id="contact">
        <div className="section-heading">
          <h2>Contact</h2>
          <div id="whatsapp-div">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="fa-2x"
              id="whatsapp-icon"
            />
            <h5> +49 163 237 0368</h5>
          </div>
          <div id="whatsapp-div">
            <FontAwesomeIcon
              icon={faFacebook}
              className="fa-2x"
              id="facebook-icon"
            />
            <h5>Benedict Correns</h5>
          </div>
          <a href={`mailto:b.correns@gmail.com?subject='Massage Reservation'`}>
            <div id="whatsapp-div">
              <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
              <h5>b.correns@gmail.com</h5>
            </div>
          </a>
        </div>
        <img src={olive3} alt="ericeira" className="image" />
      </div>
    </>
  );
}

export default Home;

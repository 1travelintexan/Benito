import town from "../images/ericeira.png";
import town2 from "../images/crossroad.jpg";
import olive3 from "../images/olive3.png";

function Home() {
  return (
    <>
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
      <div className="section">
        <div className="section-heading">
          <h2>Ericeira</h2>
          <p className="paragragh" id="about">
            Located in beautiful Ericeira, Portgual. There is no better way to
            relax after a long day at the beach, or after an amazing surf
            session than with an amazing massage by Benito. Trained and
            certified at one of the most renowned massage schools in Lisbon,
            Benito is quickly becoming recognised as Ericeira's premier
            massuese. He promises to devout his full attention to all of your
            body's needs.
          </p>
        </div>
        <img src={town} alt="ericeira" className="image" />
      </div>
      <div className="section" id="pricing">
        <img src={town2} alt="ericeira" className="image" />
        <div className="section-heading">
          <h2>Pricing</h2>
          <p>Relaxing Massage: 45€</p>
          <p>Sport Massage: 45€</p>
          <p>Foot Reflexology Massage: 35€</p>
          <p>Theropeutic Massage: 45€</p>
          <p>Anti Cellulite Massage: 45€</p>
          <p>Lymphatic Drainage Massage: 45€</p>
        </div>
      </div>
      <div className="section" id="contact">
        <div className="section-heading">
          <h2>Contact</h2>
          <p>Whatsapp: +49 163 237 0368</p>
          <p>Instagram: </p>
          <p>Email:</p>
        </div>
        <img src={olive3} alt="ericeira" className="image" />
      </div>
    </>
  );
}

export default Home;

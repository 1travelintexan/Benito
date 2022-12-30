import town from "../images/ericeira.png";
import town2 from "../images/crossroad.jpg";
import olive3 from "../images/olive3.png";
import ericeira from "../images/ericeiraRoad.png";

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
      <div className="section" id="about">
        <img src={ericeira} alt="ericeira" className="image" />
        <div className="section-heading">
          <h2>About Benito</h2>
          <p>
            Originally from a small town in Germany, Benito found his place the
            second that he arrived in Ericeira. Great food, peaceful energy and
            amazing people from all over the world. He knew this would become
            his home, and the friends he has made here will be his family. After
            returning several times, he finally made the permanet move to
            Ericeira and soon he found his calling of helping people through
            massage. He heals their body with his hands and with his words and
            energy... he heals their soul. Other than massage, Benito loves to
            cook for his friends and family and he loves fitness and health.
            Basically anyting that promotes healthy, happy people... he is a
            strong supporter.
          </p>
        </div>
      </div>
      <div className="section">
        <img src={town} alt="ericeira" className="image" />
        <div className="section-heading">
          <h2>Location:</h2>
          <p className="paragragh" id="location">
            Located in beautiful Ericeira, Portgual. There is no better way to
            relax after a long day at the beach, or after a grueling surf
            session than with an amazing massage by Benito. Trained and
            certified at one of the most renowned massage schools in Lisbon,
            Benito is quickly becoming recognised as Ericeira's premier
            massuese. He will devout his full attention to all of your body's
            needs during your massage.
          </p>
        </div>
      </div>
      <div className="section" id="contact">
        <div className="section-heading">
          <h2>Contact</h2>
          <p>Whatsapp: +49 163 237 0368</p>
          <p>Facebook: Benedict Correns </p>
          <p>Email: b.correns@gmail.com</p>
        </div>
        <img src={olive3} alt="ericeira" className="image" />
      </div>
    </>
  );
}

export default Home;

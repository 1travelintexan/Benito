import { useState } from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";

function Reservation() {
  const [email, setEmail] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    comment: "",
  });

  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setEmail({ ...email, [key]: value });
    console.log(email);
  };

  return (
    <div id="reservation-page">
      <Link to="/">
        <div id="back-div">
          <FontAwesomeIcon
            icon={faSquareCaretLeft}
            className="fa-4x"
            id="back-icon"
          />
          <h4>Back</h4>
        </div>
      </Link>
      <form id="form">
        <div id="form-side"></div>
        <div id="form-info">
          <h3>Send us an email</h3>
          <p>
            We will respond with your reservation reserved as soon as possible.
          </p>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} />
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} />
          <label>Phone:</label>
          <input type="tel" name="phone" onChange={handleChange} />
          <label>Date You Requesting:</label>
          <input type="date" name="date" onChange={handleChange} />
          <label>Best Time for you:</label>
          <input type="time" name="time" onChange={handleChange} />
          <label>Special Comments:</label>
          <textarea
            name="comment"
            rows="5"
            cols="20"
            onChange={handleChange}
            style={{ marginBottom: "15px" }}
          />
          <Button variant="outline" color="lime.9">
            <a
              href={`mailto:b.correns@gmail.com?subject='Massage Reservation'&body=${email.name} would like to request a massage on the date of ${email.date} at ${email.time}. Please respond if this date and time are suitable with either email or phone: ${email.phone} Special Comment: ${email.comment}`}
            >
              Send
            </a>
          </Button>
        </div>
      </form>
      <h4 id="reserve-whatsapp">
        If you would like to reserve a massage directly, feel free to send a
        message to Benedict.
      </h4>
      <div id="whatsapp-div">
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="fa-4x"
          id="whatsapp-icon"
        />
        <h4> +49 163 237 0368</h4>
      </div>
    </div>
  );
}

export default Reservation;

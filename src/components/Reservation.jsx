import { useState } from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

function Reservation() {
  const [email, setEmail] = useState({
    name: "",
    email: "",
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

  // const handleSend = (e) => {
  //   window.location.href = `horheyinc8@gmail.com?subject="reservation"&body='hello'`;
  //   e.preventDefault();
  // };
  return (
    <div id="reservation-page">
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
          <label>Date You Requesting:</label>
          <input type="date" name="date" onChange={handleChange} />
          <label>Best Time for you:</label>
          <input type="time" name="time" onChange={handleChange} />
          <label>Special Comments:</label>
          <textarea
            name="comment"
            rows="5"
            cols="30"
            onChange={handleChange}
            style={{ marginBottom: "15px" }}
          />
          <a
            href={`mailto:horheyinc8@gmail.com?subject='Massage Reservation'&body=${email.name} would like to request a massage on the date of ${email.date} at ${email.time}. Please respond if this date and time are suitable. Special Comment: ${email.comment}`}
          >
            Send
          </a>
        </div>
      </form>
      <h4>
        If you would like to reserve a massage directly, feel free to send a
        message to Benedict.
      </h4>
      <h4> Whatsapp: +49 163 237 0368</h4>
    </div>
  );
}

export default Reservation;

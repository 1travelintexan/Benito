function Reservation() {
  return (
    <div id="reservation-page">
      <h1>Reservation Page</h1>
      <h4>
        If you would like to reach out via messaging, feel free to send a
        message directly to Benito.
      </h4>
      <h4> Whatsapp: +49 163 237 0368</h4>
      <form id="form">
        <h3>Send us an email</h3>
        <p>
          We will respond with your reservation reserved as soon as possible.
        </p>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Date You Requesting:</label>
        <input type="date" />
        <label>Best Time for you:</label>
        <input type="time" />
      </form>
    </div>
  );
}

export default Reservation;

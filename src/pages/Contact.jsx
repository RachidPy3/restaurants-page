import React from "react";

const Contact = () => {
  return (
    <main>
      <h1>Contact us</h1>
      <form>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="xyz@mail.com"
          />
        </div>

        <div>
          <label htmlFor="message">Message: </label>
          <br />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <button>Send</button>
      </form>
    </main>
  );
};

export default Contact;

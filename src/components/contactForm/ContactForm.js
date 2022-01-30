import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <input
        placeholder="Phone"
        type="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      ></input>
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      ></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

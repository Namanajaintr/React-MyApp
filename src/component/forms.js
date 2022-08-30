import React, { useState } from "react";

function Forms() {
  const [user, setUser] = useState({ Username: "", Pwd: "" });

  const updateUsername = (event) => {
    console.log(event);
    console.log(event.target.value); //stores the value given in the input field
    setUser({ ...user, Username: event.target.value });
  };

  const updatePwd = (event) => {
    console.log(event);
    console.log(event.target.value); //stores the value given in the input field
    setUser({ ...user, Pwd: event.target.value });
  };

  const updateLogin = (event) => {
    event.PreventDefault(); //prevents default refershing of the webpage
  };
  return (
    <form>
      <label onChange={updateUsername}>
        Enter your name:
        <input type="text" />
      </label>
      <label onChange={updatePwd}>
        pwd:
        <input type="text" />
      </label>
      <label onClick={updateLogin}>
        submit login:
        <input type="submit" />
      </label>
      <p>{user.Username}</p>
      <p>{user.Pwd}</p>
    </form>
  );
}

export default Forms;

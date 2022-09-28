import React, { Component, useState, useEffect } from "react";

import styled from "styled-components";
import "./login.css";
import UseEffectTutorial from "./useEffect";

const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr 1f 1fr 3fr;
  grid-template-columns: 250px 250px;
`;

const Button = styled.button`
  width: 80px;
  margin: 10px;
  grid-column-start: 1;
  grid-column-end: 1;
`;
const Label = styled.label`
  width: 150px;
`;

const Login = () => {
  const [count, setCount] = useState(0);

  const [message, setMessage] = useState({
    name: "",
    lastname: "",
    address: "",
    text: "",
  });

  console.log(message);

  return (
    <>
      <Form>
        <input
          type="text"
          onChange={(e) => setMessage({ ...message, name: e.target.value })}
          placeholder="first name"
          required
        ></input>

        <input
          type="text"
          onChange={(e) => setMessage({ ...message, lastname: e.target.value })}
          placeholder="last name"
          required
        ></input>

        <input
          type="text"
          onChange={(e) => setMessage({ ...message, address: e.target.value })}
          className="address"
          placeholder="address"
        ></input>

        <input
          type="text"
          onChange={(e) => setMessage({ ...message, body: e.target.value })}
          className="body"
          placeholder="body"
        ></input>
        <Button type="submit" value="submit">
          submit
        </Button>
        <Button type="reset" value="reset">
          reset
        </Button>
      </Form>
      {count}
      <div>
        dinamic state
        <div>
          <p>
            {message.name} : {message.lastname}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

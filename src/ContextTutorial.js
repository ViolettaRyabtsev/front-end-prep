import { useState } from "react";
import Login from "./Login";
import User from "./User";
import { createContext, useContext } from "react";
import CountContext from "./App";
import { UserContext } from "./context";

const ContextTutorial = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <div>
        <button onClick={increment}>add</button>
      </div>
      <button onClick={decrement}>remove</button>
      <div>{counter}</div>
      <UserContext.Consumer>{(value) => <h2>{value}</h2>}</UserContext.Consumer>
    </div>
  );
};

export default ContextTutorial;

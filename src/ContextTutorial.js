import { useState } from "react";
import Login from "./Login";
import User from "./User";
import { createContext, useContext } from "react";

export const UserContext = createContext();

const ContextTutorial = () => {
  const [username, setUserName] = useState("");

  const { value, setValue } = UserContext(UserContext);

  return (
    <div>
      <Login />
      <User />
    </div>
  );
};

export default ContextTutorial;

import "./App.css";
import NavBar from "./NavBar";
import InputSection from "./inputSection";
import RefTuturial from "./useRef";
import UseEffectTutorial from "./useEffect";
import ImparativeHandle from "./ImparativeHandle";
import ContextTutorial from "./ContextTutorial";
import { UserContext } from "./context";
import { useContext, useState } from "react";
import Login from "./Login.js";
import ToDo from "./todo";
import SearchBar from "./SearchBar";
import LiftUpstate from "./todo-list/liftUpstate";
import Switch from "./SWITCH/Switch";
import Table from "./table/Table";
import { useRef, useEffect } from "react";

function App() {
  const [value, setValue] = useState(false);
  console.log(value);
  const myRef = useRef(null);

  const scrollToButton = (ref) => {
    ref.current.scrollIntiView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <>
      <div className="App">
        <h2 onClick={() => scrollToButton(myRef.current)}>scroll to button </h2>
        <Login />
        <SearchBar />
        <h3>to do list </h3>
        <LiftUpstate />
        <Switch
          onColor="#EF476F"
          isOn={value}
          handleToggle={() => setValue(!value)}
        />
        <Table TableRef={myRef} />
      </div>
    </>
  );
}

export default App;

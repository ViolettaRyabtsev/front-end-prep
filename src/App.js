import "./App.css";
import NavBar from "./NavBar";
import InputSection from "./inputSection";
import RefTuturial from "./useRef";
import UseEffectTutorial from "./useEffect";
import ImparativeHandle from "./ImparativeHandle";
import ContextTutorial from "./ContextTutorial";
import UserContext from "./ContextTutorial";
import { useState } from "react";
function App() {
  const [] = useState("");
  return (
    <div className="App">
      <UserContext.Provider value="hello" />
      <NavBar />
      <InputSection />
      <RefTuturial />
      <UseEffectTutorial />
      <ContextTutorial />
      <UserContext.Provider />
    </div>
  );
}

export default App;

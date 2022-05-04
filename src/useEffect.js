import { useLayoutEffect, useEffect, useRef } from "react";

const UseEffectTutorial = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    console.log("useEffect");

    inputRef.current.value = "love";
  }, []);

  return (
    <div>
      {" "}
      <h2> mname </h2>
      <input
        type="text"
        placeholder="text"
        value="pedro"
        ref={inputRef}
      ></input>
      <button>love change</button>
    </div>
  );
};

export default UseEffectTutorial;

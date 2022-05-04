import { useRef } from "react";
// to acsses dom elements and manipulate
//individual elements

function RefTuturial() {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
  };
  return (
    <div>
      <h2>hello </h2>
      <input type="text" placeholder="text" ref={inputRef}></input>
      <button onClick={onClick}>change name</button>
    </div>
  );
}

export default RefTuturial;

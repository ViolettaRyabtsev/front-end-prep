import { useState, useRef, forwardRef, useImperativeHandle } from "react";
// to acsses dom elements and manipulate
//individual elements

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button>Button from child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

function ImparativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <h2>hello </h2>
      <button onClick={buttonRef.current.alterToggle}>
        button from parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImparativeHandle;

import "./App.css";

const MenuDropdown = (props) => {
  return (
    <div className="submenu">
      {props.sub ? (
        <ul>
          {props.sub.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default MenuDropdown;

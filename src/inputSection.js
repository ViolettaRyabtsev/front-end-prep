import { useEffect, useReducer, useState } from "react";
import axios from "axios";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, text: action.payload, show: state.show };
    case "POST":
      return { ...state, text: state.text, show: !state.show };
    default:
      return state;
  }
};

const InputSection = () => {
  const [state, dispatch] = useReducer(reducer, { text: "", show: true });
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("hello world");
    async function getApi() {
      axios
        .get("https://jsonplaceholder.typicode.com/comments", {
          params: {
            _limit: 10,
          },
        })
        .then((response) => {
          console.log(response.data, "response");
          setData([...data, ...response.data]);
        });
    }
    getApi();
    console.log(data, "data");
  }, []);

  console.log(state, "use reducer state");
  return (
    <div>
      <form>
        <label>find your friend</label>
        <input
          onChange={(e) => {
            dispatch({ type: "INCREMENT", payload: e.target.value });
            dispatch({ type: "POST", payload: false });
          }}
        ></input>
        <button data-testid="data-from-api" onClick={alert("clicked")}>
          submit
        </button>
      </form>
      <div>
        {data.map((item) => {
          return (
            <ul>
              <li>{item.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default InputSection;

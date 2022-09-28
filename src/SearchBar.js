import axios from "axios";
import { useEffect, useState } from "react";
import "./searchbar.css";

const url = "https://jsonplaceholder.typicode.com/posts";

const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    try {
      const getPosts = async () => {
        const data = await fetch(url);
        const resp = await data.json();
        console.log(resp);
        setPosts(resp);
        if (resp) {
          setLoading(true);
        }
      };
      getPosts();
    } catch (err) {
      console.log(err);
    }
  }, [loading]);

  return (
    <div>
      <label>find </label>
      <input
        placeholder="enter search"
        value={searchText}
        type="text"
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <input type="range"></input>

      <div className="dropdown-menu-container">
        {dropdown ? (
          <ul
            className={
              dropdown
                ? "list-item-container-show"
                : "list-item-container-not-show"
            }
          >
            {posts
              .filter((word) => {
                return word.title
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase());
              })
              .map((item, index) => (
                <li
                  key={item.index}
                  className="list-item"
                  style={{ "list-style-type": "none" }}
                >
                  {item.title}
                </li>
              ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;

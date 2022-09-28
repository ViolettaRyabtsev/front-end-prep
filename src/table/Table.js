import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/albums";

function Table({ TableRef }) {
  const [posts, setPosts] = useState([]);
  const [addTitle, setTitle] = useState({
    userId: 2,
    title: "hello",
  });

  useEffect(() => {
    apiRequest();
  }, []);

  const apiRequest = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => setPosts(result))
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post: addTitle,
      })
        .then((res) => res.json())
        .then((result) => setPosts(result.rows))
        .catch((err) => console.log(err)),
    });
  };

  return (
    <>
      <table ref={TableRef}>
        <tr>
          <th>User Id</th>
          <th>Title </th>
        </tr>
        {posts.map((object) => (
          <tr>
            <td>{object.userId}</td>
            <td>{object.title}</td>
          </tr>
        ))}
      </table>
      <button onClick={handleClick}>add</button>
    </>
  );
}

export default Table;

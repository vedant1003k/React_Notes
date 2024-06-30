import React, { useEffect, useState } from "react";
import axios from "axios";
const HOOKFetch = () => {
  const [posts, setPosts] = useState([]);

  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={id}
        onChange={(e) => setId(e.traget.value)}
      />

      <ul>
        {posts.map((post, key) => {
          return <li key={key}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default HOOKFetch;

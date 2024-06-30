import React, { useEffect, useState } from "react";
import axios from "axios";
const HOOKFetch = () => {
  const [post, setPost] = useState({});
  const [idFromButton, setIdFromButton] = useState(1);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButton]);

  const handleClick = () => {
    setIdFromButton(id);
  };

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post, key) => {
          return <li key={key}>{post.title}</li>;
        })}
      </ul> */}
    </div>
  );
};

export default HOOKFetch;

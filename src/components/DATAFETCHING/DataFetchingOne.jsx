import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPosts] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        console.log(response);
        setPosts(response.data);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError("Somthing wnet wrong");
        setPosts({});
      });
  }, []);

  return (
    <div>
      {loading ? "Loading" : post.title}
      {error ? "Error" : null}
    </div>
  );
};

export default DataFetchingOne;

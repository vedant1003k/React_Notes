import React from "react";
import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Somthing went wrong",
      };
    default:
      return state;
  }
};

const DatafetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        // setLoading(false);
        // console.log(response);
        // setPosts(response.data);
        // setError("");

        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        // console.log(error);
        // setLoading(false);
        // setError("Somthing wnet wrong");
        // setPosts({});
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? "Error" : null}
    </div>
  );
};

export default DatafetchingTwo;

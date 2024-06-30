import { useEffect } from "react";

const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `count - ${count}`;
  }, [count]);

  return <div></div>;
};

export default useDocumentTitle;

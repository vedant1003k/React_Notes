import { useState } from "react";
import useDocumentTitle from "../../HOOKs/useDocumentTitle";

const DocTitle = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     document.title = `count - ${count}`;
  //   }, [count]);

  useDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count-{count}</button>
    </div>
  );
};

export default DocTitle;

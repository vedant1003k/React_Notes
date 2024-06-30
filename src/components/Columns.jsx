import React from "react";

const Columns = () => {
  const items = [
    {
        id:1,
        title:'Won'
    }
  ];

  return (
    <React.Fragment>

      {/* {items.map((item, key) => (
        <React.Fragment key={key}>
            <h1>Title</h1>
            <p>{item.title}</p>
        </React.Fragment>
      ))} */}
      
      <td>Name</td>
      <td>Vedant</td>
    </React.Fragment>
  );
};

export default Columns;

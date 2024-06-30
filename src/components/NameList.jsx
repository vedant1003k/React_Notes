import React from "react";
// import Person from "./Person.jsx";

function NameList() {
    const names = ["vedant", "Shreya","vedant"];
//   const persons = [
//     {
//       id: 1,
//       name: "aborted",
//       age: 20,
//       skils: "react",
//     },
//     {
//       id: 2,
//       name: "clark",
//       age: 30,
//       skils: "AngularJS",
//     },
//   ];

    const nameList = names.map((name, key) => <h2 key={key}>{key} {name}</h2>);
    
//   const PresonList = persons.map((person) => (
//     <Person person={person} key={person.id} />
//   ));

  return (
    <div>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2> */}

      {/* {names.map((name, key) => (
        <h2 key={key}>{name}</h2>
      ))} */}

      {nameList}

      {/* {PresonList} */}
    </div>
  );
}

export default NameList;

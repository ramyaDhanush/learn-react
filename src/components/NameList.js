import React from "react";
import Person from "./Person";

export default function NameList() {
  const names = ["Ramya", "Priya th", "Priya th", "Rya"];
  const persons = [
    {
      name: "Ramya",
      id: 1,
      age: 19,
      skill: "React",
    },
    {
      name: "Priya",
      id: 2,
      age: 29,
      skill: "Vue",
    },
    {
      name: "Rya",
      id: 3,
      age: 59,
      skill: "Angular",
    },
  ];
  const nameList = names.map((name, index) => <h2 key={index}>{name} {index}</h2>);
  return <div>`{nameList} </div>;
}

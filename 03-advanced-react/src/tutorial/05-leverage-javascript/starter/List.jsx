import { Person } from './Person';
import { people } from "../../../data";

import React from "react";

const List = () => {
  return (
    <div>
      {people.map((person) => (
        <Person key={person.name} {...person} />
      ))}
    </div>
  );
};

export default List;

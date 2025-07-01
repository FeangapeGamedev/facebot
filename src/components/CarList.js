import React from "react";
import Card from "./Card";

// Cardlist component receives robots array and renders a Card for each robot
const Cardlist = ({ robots }) => (
  <div>
    {robots.map((user) => (
      // Each Card is given a unique key (user.id)
      <Card
        key={user.id}
        id={user.id}
        name={user.name}
        email={user.email}
      />
    ))}
  </div>
);

export default Cardlist;


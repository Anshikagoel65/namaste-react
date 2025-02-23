import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Count1 : {count1}</h2>
      <h3>Name: {name}</h3>
      <h4>Location: Noida</h4>
      <h4>Contact: @anshikagoel65</h4>
    </div>
  );
};

export default User;

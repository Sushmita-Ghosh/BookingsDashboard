import React, { useState } from "react";

import "./input.styles.css";

const Input = ({ id, placeholder, handleNamesChanges, index }) => {
  // const [value, setValue] = useState("");
  //console.log(id);

  const namesChangesHandler = (e) => {
    // setValue(e.target.value); // set the value
    handleNamesChanges(index, e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="input"
        placeholder={placeholder}
        onChange={namesChangesHandler}
      />
    </div>
  );
};

export default Input;

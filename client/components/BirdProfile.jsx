// Import Dependencies
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

// Create Functional Component
const BirdProfile = ({bird}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input type="checkbox" />
      <div>{bird.name}</div>
      <div>{bird.thumbnail}</div>
      {/* <div>{bird.sound}</div> */}
    </div>
  );
};

export default BirdProfile;
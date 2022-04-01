// Import Dependencies
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

// Import Components and Dummy Data
import BirdProfile from "./BirdProfile.jsx";
import { dummyBirdData } from "../../copyAPIparkData/dummyBirdData.js";
// import filteredLABirdsArray from "../../copyAPIparkData/eBirdData.js";

// Create Functional Component
const BirdingCheckList = () => {
  // console.log('Dummy Data:', filteredLABirdsArray);
  const [birdSearch, setBirdSearch] = useState("");
  const [birdList, setBirdList] = useState(dummyBirdData);

  const handelBirdSearchInput = (event) => {
    const { value } = event.target;
    setBirdSearch((birdSearch) => value);
  };

  const handelBirdSearchSubmit = (event) => {
    event.preventDefault();
    axios.get("/api/birdList", {
      params: { name: birdSearch }
    })
      .then((response) => {
        setBirdList(() => {
          return [...response.data.data]
        });
      })
      .catch((err) => {
        console.error("ERROR:", err);
      })
  }

  return (
    <div className="birding-checklist">
      <h1 className="Header" alignment="center">
        Birding Checklist
      </h1>
      <form>
        <label>
          <input
            type="text"
            placeholder="Enter Bird Name Here"
            value={birdSearch}
            onChange={handelBirdSearchInput}
          />
        </label>
        <input
          type="submit"
          value="Send Bird"
          onClick={handelBirdSearchSubmit}
        />
      </form>
      <div className="birds">
        <div className="bird-profile">
          {birdList.map((bird) => {
            return <BirdProfile bird={bird} key={bird.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BirdingCheckList;
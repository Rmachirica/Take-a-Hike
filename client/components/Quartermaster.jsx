//import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PackingList from "./PackingList.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Quartermaster = () => {
  // assign the state variable to an object with listName and items, and array
  const [packingList, setPackingList] = useState({
    listName: "",
    listItem: "",
    packingListNames: [],
    packingListDescription: "",
  });

  //captures input list name from the user
  const handleChange = (e) => {
    //set name in state
    setPackingList((state) => {
      //destructure the property name, value,
      //from event.target obj
      const { name, value } = e.target;
      //reset the state obj
      return {
        ...state,
        [name]: value, //the name property set in the jsx
      };
    });
    console.log(packingList);
  };

  const handleSubmit = (event) => {
    //allow react to control the state variables changed on change
    event.preventDefault();
    alert("Packing list saved successfully!");
    setPackingList((state) => ({
      ...state,
      packingListNames: state.packingListNames.push(state.listName),
      // listName: (state.listItem = ""),
      // listItem: (state.listName = ""),
    }));
    console.log("plus the packingList itself", packingList);
  };

  //maps and dysplays the packing list
  console.log(packingList.packingListNames, "Running or what?");
  // const list = () => {
  //   console.log(packingList.packingListNames, "Running or");
  const listNames = packingList.packingListNames.map((item, i) => {
    return <li>{item}</li>;
  });

  return (
    <>
      <h3 className="header">Quartermaster</h3>
      <div className="quart-description">
        <p>Make and save the lists you'll need for your hiking adventures</p>
      </div>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="text"
          placeholder="Packing list name"
          onChange={handleChange}
          name="listName"
          value={packingList.listName}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="What's this list for?"
          onChange={handleChange}
          name="packingListDescription"
          value={packingList.packingListDescription}
        />
        <br></br>
        <br></br>
        <button type="submit">Create and save</button>
      </form>
      <br></br>
      <br></br>
      <div>
        <h4>My packing lists</h4>
        {packingList.packingListNames === undefined ? null : listNames}
      </div>
      <PackingList />
    </>
  );
};

export default Quartermaster;

//list items
{
  /* <br></br>
      <br></br>
      <div>My packing lists:</div>
      <select
        id="isListName"
        value={packingList.listName}
        onChange={handlePopulateDropDown}
        name="isListName"
      >
        {packingList.listName.split(" ").map((listName) => {
          return <option value="listName">{listName}</option>;
        })}
      </select> */
}

// };

// const handlePopulateDropDown = () => {
//   axios
//     .post("api/user/:id", {
//       listName: packingList.listName,
//       listItem: packingList.listItem,
//     })
//     .then(() => {})
//     .catch(() => {});
// };

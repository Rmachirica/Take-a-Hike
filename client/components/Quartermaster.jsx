//import React from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Quartermaster = () => {
  // assign the state variable to an object with listName and items, and array
  const [packingList, setPackingList] = useState({
    listName: "",
    listItem: "",
    packingListNames: [],
    isSubmit: false,
    islistName: true,
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
    alert("packing list saved successfully!");
    setPackingList((state) => ({
      ...state,
      packingListNames: [...state.listName],
      listName: (state.listItem = ""),
      listItem: (state.listName = ""),
      isSubmit: !state.isSubmit,
    }));
    console.log("plus the packingList itself", packingList);
  };

  //maps and dysplays the packing list
  const list = packingList.listItem.split(",").map((item, i) => {
    return <li>{item}</li>;
  });

  //maps over the listNames array and displays it on a dropdown
  // const listNames = packingList.packingListNames.map((listName) => {
  //   return <option value="listName">{listName}</option>;
  // });

  const handlePopulateDropDown = () => {
    axios
      .post("api/user/:id", {
        listName: packingList.listName,
        listItem: packingList.listItem,
      })
      .then(() => {})
      .catch(() => {});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        Packing list name:
        <br />
        <br />
        <input
          type="text"
          placeholder="List Name"
          onChange={handleChange}
          name="listName"
          value={packingList.listName}
        />
        <br></br>
        <br></br>
        Items for my list:
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="list Item"
          onChange={handleChange}
          name="listItem"
          value={packingList.listItem}
        />
        <br></br>
        <br></br>
        <button type="submit">Save packing list</button>
        {/* <div>
          <h4>{packingList.listName}</h4>
          <br></br>
          {list}
        </div> */}
      </form>
      <br></br>
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
      </select>
    </>
  );
};

export default Quartermaster;

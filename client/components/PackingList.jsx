import React, { useEffect, useState } from "react";

const PackingList = (props) => {
  //a listnames coming from quartermaster
  //allow users to populate list with items
  return (
    <div>
      {props.packingListNames.map((listName) => {
        return (
          <>
            <li>{listName}</li>
          </>
        );
      })}
    </div>
  );
};

export default PackingList;

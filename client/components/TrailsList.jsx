import React, { useEffect, useState } from "react";
import TrailsListEntry from "./TrailsListEntry.jsx";
import axios from "axios";
// import TrailCard from './TrailCard.jsx';

const TrailsList = () => {
  const [location, setLocation] = useState({ lat: "", lon: "" });
  const [trailList, setTrailList] = useState([]);

  const handleLocationInput = (e) => {
    const { name, value } = e.target;
    setLocation((location) => {
      return { ...location, [name]: value, [name]: value };
    });
  };

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    axios
      .get("/api/trailslist", {
        params: { lat: location.lat, lon: location.lon },
      })
      .then((response) => {
        // console.log("Line 24 = ", response.data.data); - returns array of objects of trail data
        setTrailList(() => {
          return [...response.data.data]
        });
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
    };

    return (
      <div className="trails-list">
        <h1 className="Header" alignment="center">
          Trails List
        </h1>
        <form className="card">
          <label>
            <input
              type="text"
              placeholder="latitude"
              className="card"
              value={location.lat}
              onChange={handleLocationInput}
              name="lat"
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="longitude"
              className="card"
              value={location.lon}
              onChange={handleLocationInput}
              name="lon"
            />
          </label>
          <input
            type="submit"
            value="Send Location"
            onClick={handleSubmitLocation}
          />
        </form>
        <div className="trails">
          <div className="trail-table">
            {trailList.map((trail) => {
              return <TrailsListEntry trail={trail} key={trail.id} />;
            })}
          </div>
        </div>
      </div>
    );
  };


export default TrailsList;

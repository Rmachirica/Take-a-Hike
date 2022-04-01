import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TrailsListEntry = ({ trail }) => {
  return (
    <Link to={`/trailprofile/${trail.id}`}>
      <div className="trail-row">
        <div className="trail-data">{trail.name}</div>
        <div className="trail-data">{trail.city}</div>
        <div className="trail-data">{trail.region}</div>
        <div className="trail-data">{trail.rating}</div>
      </div>
    </Link>
  );
};

export default TrailsListEntry;

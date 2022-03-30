import React from 'react';
import { useEffect, useState } from 'react';

const TrailCard = ({ trail }) => {
  const abbrDesc =
    trail.description.length > 100
      ? trail.description.substring(0, 100) + '... continue'
      : trail.description;

  return (
    <div>
      <h1 className="Header" alignment="center">
        {trail.name}
      </h1>
      {trail.description.length > 100 ? (
        <h2>
          {trail.description.substring(0, 100)}
          <span> ... continue</span>
        </h2>
      ) : (
        <h2>{trail.description}</h2>
      )}
    </div>
  );
};

export default TrailCard;

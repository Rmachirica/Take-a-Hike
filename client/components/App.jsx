// Import Dependencies
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import { useEffect, useState } from 'react';
// import Login from './Login.jsx';
import TrailProfile from './TrailProfile.jsx';
// Import Components
// import Login from "./Login.jsx"
// import BirdingCheckList from './BirdingCheckList.jsx';
// import Quartermaster from './Quartermaster.jsx';
// import TrailFeathers from './TrailFeathers.jsx';
// import TrailCard from './TrailCard.jsx'; // COMMENTED OUT BY RENE
// import TrailsList from './TrailsList.jsx';
// import UserProfile from './UserProfile.jsx';

const App = () => {
  return (
    <div>
      <h1 className="Header" alignment="center">
        Take a Hike in Louisiana
      </h1>
      <h2>All parks within 500 miles radius</h2>
      {/* <Login/> */}
      {/* <UserProfile /> */}
      {/* <Quartermaster /> */}
      {/* <Trails />
      <TrailFeathers /> */}
      {/* <Link to="/login">Login</Link> */}
      {/* <Routes>
        <Route path="/" element={<TrailsList />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="trail/:id" element={<TrailProfile />} />
      </Routes> */}

      {/* <Login /> */}
      {/* <UserProfile /> */}
      <TrailProfile />
      {/* <TrailsList /> */}
      {/* <TrailCard /> COMMENTED OUT BY RENE */}
      {/* <Quartermaster /> */}
      {/* <TrailFeathers /> */}
    </div>
  );
};

export default App;

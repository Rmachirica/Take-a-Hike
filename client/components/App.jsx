// Import Dependencies
import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {

  return (
    <div>
      <h1 className="Header" alignment="center">
        Trail Feathers
      </h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        {/* <Link to="/login">Login</Link> |{' '} */}
        <Link to="/trailslist">Trails List</Link> |{' '}
        <Link to="/trailprofile">Trail Profile</Link> |{' '}
        <Link to="/quartermaster">Quartermaster</Link> |{' '}
        <Link to="/packinglist">Packing List</Link> |{' '}
        <Link to="/birdingchecklist">Birding Checklist</Link> |{' '}
        <Link to="/userprofile">User Profile</Link> |{' '}
      </nav>
      <Outlet />
    </div>
  );
};


// Export Component
export default App;
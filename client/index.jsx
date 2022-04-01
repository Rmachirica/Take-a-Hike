'use strict'; // Why is this up here?

// Import Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components and Styles
import App from './components/App.jsx';
import './styles/main.css';
import TrailsList from '../client/components/TrailsList.jsx';
import Quartermaster from '../client/components/Quartermaster.jsx';
import TrailProfile from '../client/components/TrailProfile.jsx';
import UserProfile from '../client/components/UserProfile.jsx';
import BirdingCheckList from '../client/components/BirdingCheckList.jsx';
import PackingList from '../client/components/PackingList.jsx';
import Login from '../client/components/Login.jsx';

// Render Components to DOM 'app' element
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />}>
        {/* <Route path="login" element={<Login />} />
        <Route path="trailslist" element={<TrailsList />} />
        <Route path="trailprofile/:id" element={<TrailProfile />} />
        <Route path="quartermaster" element={<Quartermaster />} />
        <Route path="packlinglist" element={<PackingList />} />
        <Route path="birdingchecklist" element={<BirdingCheckList />} />
        <Route path="userprofile" element={<UserProfile />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('app')
);

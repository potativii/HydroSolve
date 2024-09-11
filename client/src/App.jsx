import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Onboarding from './components/Onboarding';
import Auth from './components/Auth';
import UserHome from './components/Userhome';
import AdminHome from './components/Adminhome';
import ReportIssueForm from './components/ReportIssueForm';
import GoogleMap from './components/GoogleMap';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/user/signup" element={<Auth />} />
        <Route path="/admin/signup" element={<Auth />} />
        <Route path="/user/login" element={<Auth />} />
        <Route path="/admin/login" element={<Auth />} />
        <Route path="/user/home" element={<UserHome/>} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/user/report" element={<ReportIssueForm />} />
        <Route path="/map" element={<GoogleMap />} />
      </Routes>
    </Router>
     
  );
}

export default App;

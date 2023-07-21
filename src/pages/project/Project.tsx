import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectNavigation from '../../components/ProjectNavigation';
import Home from './Home';
import Code from './Code';
import Features from './Features';
import WorkItems from './WorkItems';
import PullRequests from './PullRequests';
import Discussions from './Discussions';
import Relays from './Relays';
import TestCases from './TestCases';
import Contributers from './Contributers';

// import other sub-page components here

const Project = () => {
  return (
    <div>
      <ProjectNavigation />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="code" element={<Code />} />
        <Route path="features" element={<Features />} />
        <Route path="workitems" element={<WorkItems />} />
        <Route path="pullrequests" element={<PullRequests />} />
        <Route path="discussions" element={<Discussions />} />
        <Route path="Relays" element={<Relays />} />
        <Route path="TestCases" element={<TestCases />} />
        <Route path="Contributers" element={<Contributers />} />
      </Routes>
    </div>
  );
};

export default Project;

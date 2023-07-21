import React, { useState } from 'react';
import { TabList, Tab } from '@fluentui/react-components';
import { Link } from 'react-router-dom';
import GlobalSearch from './GlobalSearch';
import './GlobalNavigation.css';

const GlobalNavigation = () => {

  return (
    <div className="global-navigation">
      <GlobalSearch/>
      <TabList>
        <Tab value="home">
          <Link to="/home" className="nav-link">Home</Link>
        </Tab>
        <Tab value="community">
          <Link to="/community"className="nav-link">Community</Link>
        </Tab>
        <Tab value="universe">
          <Link to="/universe"className="nav-link">Universe</Link>
        </Tab>
        <Tab value="project">
          <Link to="/project"className="nav-link">Project</Link>
        </Tab>
      </TabList>
    </div>
  );
};

export default GlobalNavigation;
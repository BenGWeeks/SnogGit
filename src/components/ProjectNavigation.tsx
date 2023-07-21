import React from 'react';
import { TabList, Tab } from '@fluentui/react-components';
import { Link } from 'react-router-dom';

const ProjectNavigation = () => {
  return (
    <TabList>
      <Tab value="home">
        <Link to="home" className="nav-link">Home</Link>
      </Tab>
      <Tab value="code">
        <Link to="code" className="nav-link">Code</Link>
      </Tab>
      <Tab value="features">
        <Link to="features" className="nav-link">Features</Link>
      </Tab>
      <Tab value="workitems">
        <Link to="workitems" className="nav-link">Workitems</Link>
      </Tab>
      <Tab value="pullrequests">
        <Link to="pullrequests" className="nav-link">Pull requests</Link>
      </Tab>
      <Tab value="discussions">
        <Link to="discussions" className="nav-link">Discussions</Link>
      </Tab>
      <Tab value="relays">
        <Link to="relays" className="nav-link">Relays</Link>
      </Tab>
      <Tab value="testcases">
        <Link to="testcases" className="nav-link">Test cases</Link>
      </Tab>
      <Tab value="contributers">
        <Link to="contributers" className="nav-link">Contributers</Link>
      </Tab>
    </TabList>
  );
};

export default ProjectNavigation;
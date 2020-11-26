import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'FabNetworks',
    href: 'https://fabnetworks.org',
  },
  {
    title: 'IBM Blockchain',
    href: 'http://www.ibm.com/blockchain',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;

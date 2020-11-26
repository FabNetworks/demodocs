import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/cloud-data.jpg';

const FirstLeftText = () => <p>What is this site?</p>;

const FirstRightText = () => (
  <p>
    Here you will find a collection of resources to help you get started with the networks hosted on the FabNetworks registry.
    <a
      className={calloutLink}
      href="https://fabnetworks.org/"
    >
      Check out fabnetworks.org here →
    </a>
  </p>
);

const SecondLeftText = () => <p>Who is responsible for this site?</p>;

const SecondRightText = () => (
  <p>
    We're IBM technical specialists working on blockchain. Please get in touch with us if you have any problems with the assets on this site.
    <a
      className={calloutLink}
      href="mailto:blockchain@uk.ibm.com"
    >
      blockchain@uk.ibm.com →
    </a>
  </p>
);

const BannerText = () => <h1>Welcome to the FabNetworks Demo Documentation!</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;

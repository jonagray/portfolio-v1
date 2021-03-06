import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Icon, InlineIcon } from '@iconify/react';

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import nextDotJs from '@iconify-icons/simple-icons/next-dot-js';
import mongodbIcon from '@iconify-icons/simple-icons/mongodb';
import expressIcon from '@iconify-icons/simple-icons/express';
import { faNode } from "@fortawesome/free-brands-svg-icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import IconRedux from 'components/CustomIcons/ReduxIcon.js';
import IconExpress from "components/CustomIcons/ExpressIcon.js";
import IconReact from "components/CustomIcons/ReactIcon.js";
import IconNode from "components/CustomIcons/NodeIcon";
import IconMongodb from "components/CustomIcons/MongodbIcon";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Project Technologies</h2>
          <h5 className={classes.description}>
            This project was completed using the MERN stack, employing NextJS. Initially built for learning, this app quickly morphed and became a rewarding project that I will upkeep and modify.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="MongoDB"
              description="MongoDB was utilized as the database, allowing for greater flexibility of potential future additions to the blog's functionality."
              icon={IconMongodb}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="ExpressJS"
              description="Express allowed for simplicity of back-end development for this project, being widely used and created in NodeJS itself."
              icon={IconExpress}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="React"
              description="Using React's NextJS framework allowed for quick setup and all the nexessary basic features for quick production."
              icon={IconReact}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="NodeJS"
              description="Being an efficient environment for devs, Node is widely used and works well within the JavaScript ecosystem."
              icon={IconNode}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

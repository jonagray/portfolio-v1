import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import IconReact from "components/CustomIcons/ReactIcon.js";
import IconFirebase from "components/CustomIcons/FirebaseIcon.js";
import IconXcode from "components/CustomIcons/XcodeIcon.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import IconRedux from "components/CustomIcons/ReduxIcon";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Project Technologies</h2>
          <h5 className={classes.description}>
            Built with React Native and Firebase, this application lets a manager schedule employees for upcoming shifts, and then message them with these details. Functionality also allows for individual employees to be modified with standard CRUD operations.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="React Native"
              description="The base application was built with the create-react-native-app tool. This allowed for greater flexibility with selecting the backend technology to use."
              icon={IconReact}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Firebase"
              description="One of the most popular back-ends as-a-service to use with mobile applications. Firebase made connecting functions to a database simple and effective."
              icon={IconFirebase}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Redux"
              description="Redux was used for this app to ensure organization and scalability, in addition to helping discover best practices for the library's use cases within mobile apps."
              icon={IconRedux}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Xcode"
              description="Specifically for use with compiling this application into iOS format - Xcode supplies limitless functionality for application customizations."
              icon={IconXcode}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

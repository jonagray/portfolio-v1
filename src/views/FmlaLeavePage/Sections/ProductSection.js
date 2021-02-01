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


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import IconSql from "components/CustomIcons/SqlIcon";
import IconSheets from "components/CustomIcons/SheetsIcon";
import IconJquery from "components/CustomIcons/JqueryIcon.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Project Technologies</h2>
          <h5 className={classes.description}>
            Although dated now, the FMLA Leave Assistant was one of the very first projects I completed while learning how to program, and I am still quite proud of how it turned out. This web application served as proof-of-concept for a real-world project I developed to boost efficiency and data-accuracy. It routinely reduced my team and I's pay-adjustment workload by roughly 20%.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="PostgreSQL"
              description="Project utilized a PostgreSQL database on the back-end. This was due to strict requirements for formatted data input, in addition to being a learning opportunity."
              icon={IconSql}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="jQuery"
              description="Front-end framework jQuery allowed for simple construction of pre-determined wireframes. It also served as an introduction to JavaScript libraries."
              icon={IconJquery}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Google Sheets API"
              description="Unique project requirements defined a need for use of data manipulation from an Excel-style sheet workbook. Google's Sheets API fulfilled this need perfectly."
              icon={IconSheets}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

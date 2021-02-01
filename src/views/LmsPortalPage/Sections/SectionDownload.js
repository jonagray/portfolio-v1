/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components

import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
import "assets/css/custom-headers.css";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className="section-download-header">Links</h2>
          </GridItem>
        </GridContainer>

        {/* <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-download-section"
              target="_blank"
            >
              Free React Download
            </Button>
            <Button
              color="primary"
              size="lg"
              href="https://www.creative-tim.com/product/material-kit?ref=mkr-download-section"
              target="_blank"
            >
              Free HTML Downoad
            </Button>
          </GridItem>
        <br />
        <br />
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Want more?</h2>
            <h4>
              We{"'"}ve launched{" "}
              <a
                href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section"
                target="_blank"
              >
                Material Kit PRO React{" "}
              </a>
              .It has a huge number of components, sections and example pages.
              Start Your Development With A Badass Material-UI nspired by
              Material Design.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="rose"
              size="lg"
              href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section"
              target="_blank"
            >
              Material Kit PRO
            </Button>
            <Button
              color="rose"
              size="lg"
              href="https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mkr-download-section"
              target="_blank"
            >
              Material Dashboard PRO
            </Button>
          </GridItem>
        </GridContainer> */}
        <div className={classes.textCenter + " " + classes.sharingArea}>
          {/* <GridContainer justify="center">
            <h3>Thank you for supporting us!</h3>
          </GridContainer> */}
          <Button color="primary" href="/">
            <i className={classes.socials + " fas fa-home"} /> Home
          </Button>
          <Button color="github" target="_blank" href="https://github.com/jonagray/LMS_System-Demo">
            <i className={classes.socials + " fab fa-github"} /> Github
          </Button>
          {/* <Button color="info" target="_blank" href="https://codeparallaxis.com">
            <i className={classes.socials + " fas fa-external-link-alt"} /> Demo
          </Button> */}
          {/* <Button color="facebook">
            <i className={classes.socials + " fab fa-facebook-square"} /> Email
          </Button> */}
        </div>
      </div>
    </div>
  );
}

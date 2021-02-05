import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import profile from "assets/img/profile.jpg";
import fmla from "assets/img/fmla-leave.png";
import codeparallaxis from "assets/img/codeparallaxis.png";
import lmsportal from "assets/img/lms-portal.png";
import employeemanager from "assets/img/employee-manager.png";

// styles
import "assets/css/grid-images.css";
import "../../../assets/css/custom-headers.css";
import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.section}>
        <div className={classes.container}>
      <div className={classes.title}>
        <h2>Featured Projects</h2>
      </div>
          <div id="nav-tabs">
            <GridContainer justify="space-between" direction="row" alignContent="center" alignItems="stetch" className="grid-images-container">

              <GridItem xs={12} sm={6} md={6} lg={5} className="grid-images">
                <Link to="code-parallaxis-page" className={classes.link}>
                  <img
                    src={codeparallaxis}
                    alt="..."
                    className={
                      classes.imgRaised +
                      " " +
                      classes.imgRounded +
                      " " +
                      classes.imgFluid
                    }
                  />
                  <Button color="github" size="lg" default className="grid-buttons">
                    Code Parallaxis
              </Button>
                </Link>
              </GridItem>

              <GridItem xs={12} sm={6} md={6} lg={5} className="grid-images">
                <Link to="employee-manager-page" className={classes.link}>
                  <img
                    src={employeemanager}
                    alt="..."
                    className={
                      classes.imgRaised +
                      " " +
                      classes.imgRounded +
                      " " +
                      classes.imgFluid
                    }
                  />
                  <Button color="github" size="lg" default className="grid-buttons">
                    Employee Manager
              </Button>
                </Link>
              </GridItem>

              <GridItem xs={12} sm={6} md={6} lg={5} className="grid-images">
                <Link to="lms-portal-page" className={classes.link}>
                  <img
                    src={lmsportal}
                    alt="..."
                    className={
                      classes.imgRaised +
                      " " +
                      classes.imgRounded +
                      " " +
                      classes.imgFluid
                    }
                  />
                  <Button color="github" size="lg" default className="grid-buttons">
                    Learning Management
              </Button>
                </Link>
              </GridItem>

              <GridItem xs={12} sm={6} md={6} lg={5} className="grid-images">
                <Link to="fmla-leave-page" className={classes.link}>
                  <img
                    src={fmla}
                    alt="..."
                    className={
                      classes.imgRaised +
                      " " +
                      classes.imgRounded +
                      " " +
                      classes.imgFluid
                    }
                  />
                  <Button color="github" size="lg" default className="grid-buttons">
                    Metro Leave Assistant
              </Button>
                </Link>
              </GridItem>

            </GridContainer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

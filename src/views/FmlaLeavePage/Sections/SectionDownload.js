import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

//styles
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
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <Button color="primary" href="/">
            <i className={classes.socials + " fas fa-home"} /> Home
          </Button>
          <Button color="github" target="_blank" href="https://github.com/fmla-leave-assistant/fmla-leave-assistant">
            <i className={classes.socials + " fab fa-github"} /> Github
          </Button>
          <Button color="info" target="_blank" href="http://jala-leave.xyz">
            <i className={classes.socials + " fas fa-external-link-alt"} /> Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

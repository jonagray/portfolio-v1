import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

// styles
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
            <h2>Feel free to reach out</h2>
            <h4 className="download-end">
              Other projects can be found on my Github.
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <Button color="primary" href="/profile-page">
            <i className={classes.socials + " far fa-user"} /> About
          </Button>
          <Button color="github" target="_blank" href="https://github.com/jonagray">
            <i className={classes.socials + " fab fa-github"} /> Github
          </Button>
          <Button color="info" href="mailto:jon.a.graybill@gmail.com?subject=Mail from Portfolio Site">
            <i className={classes.socials + " far fa-envelope"} /> Email
          </Button>
        </div>
      </div>
    </div>
  );
}

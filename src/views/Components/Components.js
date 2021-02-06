import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

// styles
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        brand="JG"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/space-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Jonny Graybill</h1>
                <h2 className={classes.subtitle}>
                  Software Engineer
                </h2>
                <h6>“Sometimes it’s not about who has more talent, it’s about who’s hungrier.” - Anonymous</h6>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionTabs />
        <SectionExamples />
        <SectionDownload />
      </div>
      <Footer />
    </div>
  );
}

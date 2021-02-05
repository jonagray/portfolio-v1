import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Icon, InlineIcon } from '@iconify/react';


// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import CustomTabs from "components/CustomTabs/CustomTabs.js";
import LanguageIcon from '@material-ui/icons/Language';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import StorageIcon from '@material-ui/icons/Storage';
import DnsIcon from '@material-ui/icons/Dns';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

// simpleicons
import reduxIcon from '@iconify-icons/simple-icons/redux';
import nextDotJs from '@iconify-icons/simple-icons/next-dot-js';
import jqueryIcon from '@iconify-icons/simple-icons/jquery';
import mysqlIcon from '@iconify-icons/simple-icons/mysql';
import jsonIcon from '@iconify-icons/simple-icons/json';
import mongodbIcon from '@iconify-icons/simple-icons/mongodb';
import postgresqlIcon from '@iconify-icons/simple-icons/postgresql';
import firebaseIcon from '@iconify-icons/simple-icons/firebase';
import expressIcon from '@iconify-icons/simple-icons/express';
import socketDotIo from '@iconify-icons/simple-icons/socket-dot-io';
import microsoftazureIcon from '@iconify-icons/simple-icons/microsoftazure';
import netlifyIcon from '@iconify-icons/simple-icons/netlify';
import herokuIcon from '@iconify-icons/simple-icons/heroku';
import bootstrapIcon from '@iconify-icons/simple-icons/bootstrap';
import digitaloceanIcon from '@iconify-icons/simple-icons/digitalocean';
import nodeDotJs from '@iconify-icons/simple-icons/node-dot-js';
import javascriptIcon from '@iconify-icons/simple-icons/javascript';
import swiftIcon from '@iconify-icons/simple-icons/swift';
import html5Icon from '@iconify-icons/simple-icons/html5';
import css3Icon from '@iconify-icons/simple-icons/css3';
import reactIcon from '@iconify-icons/simple-icons/react';
import sassIcon from '@iconify-icons/simple-icons/sass';
import amazonawsIcon from '@iconify-icons/simple-icons/amazonaws';
import githubIcon from '@iconify-icons/simple-icons/github';
import npmIcon from '@iconify-icons/simple-icons/npm';

// styles
// import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import "../../../assets/css/custom-headers.css";
import '../../../assets/css/icons.css';

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Specialties</h3>
          </div>
          {/* <div className={classes.title}>
            <h3>
              <small>With Icons</small>
            </h3>
          </div> */}
          <div className="specialties-outer-container">
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="warning"
                  horizontal={{
                    tabsGrid: { xs: 4, sm: 4, md: 2, lg: 2 },
                    contentGrid: { xs: 8, sm: 8, md: 12, lg: 12 }
                  }}
                  tabs={[
                    {
                      tabButton: "Languages",
                      tabIcon: LanguageIcon,
                      tabContent: (
                          <span className="specialty-grid-item">
                            <GridItem xs={8} sm={12} md={12} lg={12}>
                                <Icon icon={javascriptIcon} className="specialty-items-1" />
                                <p className="specialty-text">JavaScript</p>
                                <Icon icon={swiftIcon} className="specialty-items-1" />
                                <p className="specialty-text">Swift</p>
                                <Icon icon={html5Icon} className="specialty-items-1" />
                                <p className="specialty-text">HTML</p>
                                <Icon icon={css3Icon} className="specialty-items-1" />
                                <p className="specialty-text">CSS</p>
                            </GridItem>

                            <GridItem xs={8} sm={12} md={12} lg={12} className="specialty-grid-item2">
                              <GridItem>
                              </GridItem>
                            </GridItem>

                            <br /><br />
                            <p>fuck this shit fuck this shit fuck this shit fuck this shit fuck this shit fuck this shit
                          </p>
                          </span>
                      )
                    },
                    {
                      tabButton: "Front-Ends",
                      tabIcon: KeyboardIcon,
                      tabContent: (
                        <div className="">
                          <div className="specialty-items-1">
                            <Icon icon={reactIcon} className="specialty-items-1" />
                            <p className="specialty-text">React</p>
                          </div>
                          <div className="specialty-items-1">
                            <Icon icon={reduxIcon} className="specialty-items-1" />
                            <p className="specialty-text">Redux</p>
                          </div>
                          <div className="specialty-items-1">
                            <Icon icon={nextDotJs} className="specialty-items-1" />
                            <p className="specialty-text">Next</p>
                          </div>
                          <div className="specialty-items-1">
                            <Icon icon={jqueryIcon} className="specialty-items-1" />
                            <p className="specialty-text">jQuery</p>
                          </div>
                          <div className="specialty-items-1">
                            <Icon icon={bootstrapIcon} className="specialty-items-1" />
                            <p className="specialty-text">Bootstrap</p>
                          </div>
                          <div className="specialty-items-1">
                            <Icon icon={sassIcon} className="specialty-items-1" />
                            <p className="specialty-text">Sass</p>
                          </div>
                        </div>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";


// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import LanguageIcon from '@material-ui/icons/Language';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import StorageIcon from '@material-ui/icons/Storage';
import DnsIcon from '@material-ui/icons/Dns';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faSwift } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faNpm } from "@fortawesome/free-brands-svg-icons";
import { faTable } from "@fortawesome/free-brands-svg-icons";

import { Icon, InlineIcon } from '@iconify/react';
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



import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import "../../../assets/css/custom-headers.css";
import '../../../assets/css/icons.css';

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <div className={classes.title}>
        </div>
          <h2 className="custom-headers">Specialties</h2>
        <div id="nav-tabs">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} className="main-icons">
              <div className="main-icons2">
              <CustomTabs
                headerColor="warning"
                tabs={[
                  {
                    tabName: "Languages",
                    tabIcon: LanguageIcon,
                    tabContent: (
                      <div className="specialty-container">
                        <div className="specialty-items-1">
                          <FontAwesomeIcon icon={faJsSquare} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">JavaScript</p>
                        </div>
                        <div className="specialty-items-1">
                          <FontAwesomeIcon icon={faSwift} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">Swift</p>
                        </div>
                        <div className="specialty-items-1">
                          <FontAwesomeIcon icon={faHtml5} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">HTML</p>
                        </div>
                        <div className="specialty-items-1">
                          <FontAwesomeIcon icon={faCss3} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">CSS</p>
                        </div>
                      </div>
                      // <GridContainer display="flex" flex-direction="row" justify="center">
                      //   <GridItem xs={6} sm={6} md={6}>
                      //   <FontAwesomeIcon icon={faJsSquare} className="specialty-icons" />
                      //   <h2>JavaScript</h2>
                      //   <Button color="github" simple>
                      //       Swift
                      //   </Button>
                      //   </GridItem>
                      // </GridContainer>

                      // <p className={classes.textCenter}>
                      //   I think that’s a responsibility that I have, to push
                      //   possibilities, to show people, this is the level that
                      //   things could be at. So when you get something that has
                      //   the name Kanye West on it, it’s supposed to be pushing
                      //   the furthest possibilities. I will be the leader of a
                      //   company that ends up being worth billions of dollars,
                      //   because I got the answers. I understand culture. I am
                      //   the nucleus.
                      // </p>
                    )
                  },
                  {
                    tabName: "Front-ends",
                    tabIcon: KeyboardIcon,
                    tabContent: (
                      <div className="specialty-container">
                        <div className="specialty-items-1">
                          <FontAwesomeIcon icon={faReact} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">React</p>
                        </div>
                        <div className="specialty-items-1">
                          <Icon icon={reduxIcon} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">Redux</p>
                        </div>
                        <div className="specialty-items-1">
                          <Icon icon={nextDotJs} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">Next</p>
                        </div>
                        <div className="specialty-items-1">
                          <Icon icon={jqueryIcon} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">jQuery</p>
                        </div>
                        <div className="specialty-items-1">
                          <Icon icon={bootstrapIcon} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">Bootstrap</p>
                        </div>
                        <div className="specialty-items-1">
                          <FontAwesomeIcon icon={faSass} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">Sass</p>
                        </div>
                      </div>
                    )
                  },
                  {
                    tabName: "Back-ends",
                    tabIcon: DnsIcon,
                    tabContent: (
                      <div className="specialty-container">
                        <div className="specialty-items-1">
                        <Icon icon={nodeDotJs} className="specialty-items-1 specialty-icons2" />
                          <p className="specialty-text">Node</p>
                        </div>
                        <div className="specialty-items-1">
                        <Icon icon={expressIcon} className="specialty-items-1 specialty-icons2" />
                          <p className="specialty-text">Express</p>
                        </div>
                        <div className="specialty-items-1">
                          <Icon icon={socketDotIo} className="specialty-items-1 specialty-icons2" />
                          <p className="specialty-text">Socket.io</p>
                        </div>
                      </div>
                    )
                  },
                  {
                    tabName: "Databases",
                    tabIcon: StorageIcon,
                    tabContent: (
                      <div className="specialty-container">
                        <div className="specialty-items-1">
                        <Icon icon={mongodbIcon} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">Mongo DB</p>
                        </div>
                        <div className="specialty-items-1">
                          <Icon icon={firebaseIcon} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">Firebase</p>
                        </div>
                        <div className="specialty-items-1">
                        <Icon icon={postgresqlIcon} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">PostgreSQL</p>
                        </div>
                        <div className="specialty-items-1">
                          <Icon icon={mysqlIcon} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">MySQL</p>
                        </div>
                        <div className="specialty-items-1">
                        <Icon icon={jsonIcon} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">JSON</p>
                        </div>
                      </div>
                    )
                  },
                  {
                    tabName: "Storage/Deployment",
                    tabIcon: CloudUploadIcon,
                    tabContent: (
                      <div className="specialty-container">
                        <div className="specialty-items-1">
                          <FontAwesomeIcon icon={faGithub} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">Github</p>
                        </div>
                        <div className="specialty-items-1">
                          <Icon icon={netlifyIcon} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">Netlify</p>
                        </div>
                        <div className="specialty-items-1">
                          <FontAwesomeIcon icon={faAws} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">AWS</p>
                        </div>
                        <div className="specialty-items-1">
                        <Icon icon={microsoftazureIcon} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">Azure</p>
                        </div>
                        <div className="specialty-items-1">
                          <FontAwesomeIcon icon={faNpm} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">NPM</p>
                        </div>
                        <div className="specialty-items-1">
                          <Icon icon={herokuIcon} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">Heroku</p>
                        </div>
                        <div className="specialty-items-1">
                        <Icon icon={digitaloceanIcon} className="specialty-items-1 specialty-icons" />
                          <p className="specialty-text">Digital Ocean</p>
                        </div>
                      </div>
                    )
                  }
                ]}
              />
              </div>
            </GridItem>
            {/* <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Tabs on Plain Card</small>
              </h3>
              <CustomTabs
                plainTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: "Home",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  },
                  {
                    tabName: "Updates",
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. I will be the leader of a company
                        that ends up being worth billions of dollars, because I
                        got the answers. I understand culture. I am the nucleus.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    )
                  },
                  {
                    tabName: "History",
                    tabContent: (
                      <p className={classes.textCenter}>
                        think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  }
                ]}
              />
            </GridItem> */}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

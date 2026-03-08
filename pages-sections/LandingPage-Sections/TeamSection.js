import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>About the Director</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src="/img/imgDirector.png"
                  alt="Shankar Institute of Technology"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Arvind Kumar Tripathi
                <br />
                <small className={classes.smallTitle}>
                  Director, Shankar Institute of Technology
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Mr. Arvind Kumar Tripathi has over 20 years of experience in
                  teaching and the computer field. He has trained hundreds of
                  students from Kushinagar and nearby areas, helping them learn
                  computer skills for office jobs, shops and small businesses.
                  His teaching style is simple, friendly and focused on building
                  confidence in students who are completely new to technology.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button color="primary" href="tel:9838580130">
                  Talk to the Director
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

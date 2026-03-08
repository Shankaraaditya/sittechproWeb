import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div id="about" className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Practical, Job-Oriented Computer Training</h2>
          <h5 className={classes.description}>
            Shankar Institute of Technology offers a 6-month Diploma in Computer
            Applications (DCA) designed especially for beginners and students from
            small towns and villages. Our focus is on simple language, patient
            teaching and maximum hands-on practice so that even students with no
            prior computer knowledge can become confident using a PC for office and
            professional work.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Beginner-Friendly DCA Course"
              description="Step-by-step training from basic computer fundamentals and Windows to MS Office, Tally, Photoshop and internet usage – perfect for students after 10th, 12th or college."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Practical Lab Focus"
              description="More time on the computer, less theory. Every topic is taught with real-life examples like office work, forms, reports, bills and simple designs."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Affordable for Every Family"
              description="Reasonable fees, flexible timing and guidance for job interviews so that students from economically weaker backgrounds can still build a strong digital foundation."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

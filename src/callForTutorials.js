import React from "react";

import "./callForTutorials.css";
import { Col, Row } from "react-bootstrap";

const CallForTutorials = () => {
  return (
    <div className="p-200 cft">
      <h3 className="cft-heading">Call for Tutorials</h3>
      <Row>
        <Col className="white-container">
          The 29th IEEE International Symposium on Intelligent Vehicles, IV 2023
          will be held in Anchorage, Alaska, USA during the period June 4-7,
          2023. The IEEE IV 2023 is the world’s largest and most comprehensive
          technical conference focused on intelligent vehicles. The IEEE IV 2023
          Tutorial Chairs are seeking tutorial proposals in all aspects of the
          IV themes. Tutorials at IEEE IV 2023 will be ½ day (i.e., 3 hours) or
          a full day (i.e., 6 hours) each in both morning and afternoon
          sessions.
        </Col>
      </Row>
      <h4>Required Proposal Information</h4>
      <Row>
        <Col className="white-container">
          <h5>Each proposal must include the following information:</h5>
          <ul>
            <li>
              <b>Title:</b>&nbsp;
            </li>
            <li>
              <b>Duration:</b>&nbsp; half day (3 hours) or full day (6 hours)
            </li>
            <li>
              <b>Presenters:</b>&nbsp; Names, affiliation, contact information
              (email and mailing address), and short bio for each presenter.
            </li>
            <li>
              <b>Description:</b>&nbsp;A description of the tutorial topic,
              providing a sense of both the scope and depth of the tutorial,
              along with a tutorial outline.
            </li>
            <li>
              <b>Expected audience:</b>&nbsp; Include the background of audience
              and expected number of attendees.
            </li>
            &nbsp;
            <li>
              <b>Recent publications:</b>&nbsp; List recent publications related
              to the tutorial topic from the speakers in the past 3 years.
            </li>
            <li>
              <b>Relevance:</b>&nbsp; Address the importance and timeliness of
              the proposal, and its relevance to researchers and engineers.
            </li>
            <li>
              <b>Previous editions:</b>&nbsp; If the tutorial was given before,
              describe when and where it was given, and if and how it will be
              modified for IEEE IV 2020 - IEEE IV 2022. If possible, provide a
              link to slides of the previous tutorial presentation.
            </li>
            <li>
              <b>Presentation material:</b>&nbsp; If a draft of the tutorial
              material (to be distributed to tutorial participants) is available
              that can aid in assessing the proposal and enable the committee to
              provide more constructive suggestions for the content.
            </li>
          </ul>
          <h5>
            Proposals will be reviewed by the Tutorial Committee using the
            following criteria:
          </h5>
          <ul>
            <li>
              Timeliness of the proposal: Importance of the topic in 2023 and
              relevance to IEEE IV
            </li>
            <li>
              Quality of the proposal: State-of-the art coverage of the topic,
              coherence, and experience of the speakers
            </li>
            <li>
              Spectrum of the proposal: Topic is of broad interest to academia
              and/or industry, researchers and/or practicing engineers.
            </li>
            <li>
              Accessibility of presentation material: Presentation can be
              understood by the broad IEEE IV audience including graduate
              students, practicing engineers, researchers and professors
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="white-container">
          <h5>Important Dates</h5>
          <ul>
            <li>
              <b>Tutorial Proposal Deadline:</b>&nbsp; February 1, 2023
            </li>
            <li>
              <b>Tutorial Proposal Acceptance Notification: </b>&nbsp; March 1,
              2023
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default CallForTutorials;

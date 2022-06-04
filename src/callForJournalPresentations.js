import React from "react";
import { Row, Col } from "react-bootstrap";

import "./callForJournalPresentations.css";

const CallForJournalPresentations = () => {
  return (
    <div className="p-200 cfjp">
      <h3 className="cfjp-heading">Call for Journal Presentations</h3>
      <Row>
        <Col className="white-container">
          <p>
            The IEEE IV 2023, Anchorage, Alaska is pleased to announce journal
            papers presentation opportunities for recent and in-press IEEE
            journal papers within the ITS and IV scope. Journals being
            considered include IEEE Transactions on Intelligent Transportation
            Systems (T-ITS), IEEE Transactions on Intelligent Vehicles (T-IV),
            IEEE Transactions on Vehicular Technology, IEEE Transactions on
            Information Forensics and Security, IEEE Transactions on Signal
            Processing, IEEE Journal on Selected Topics in Signal Processing,
            and IEEE Signal Processing Magazine.
          </p>
          <p>
            Eligible journal papers must be published in 2020, 2021 and 2022 or
            have been formally accepted by April 30, 2023, and pending
            publication. Please note that{" "}
            <span style={{ color: "#123693" }}>
              <b>
                we would like to reserve the right to grant or decline any
                requests at our sole discretion.
              </b>
            </span>{" "}
            Priorities may be given to recent journal papers that add value to
            the IEEE IV technical program and yet have not been presented at
            IEEE ITSS conferences or broadly known to the IEEE IV attendees.
          </p>
          <p>
            Approved requests for presentation must have one author/presenter
            register for the conference according to the IEEE IV 2023
            registration instructions. Each journal paper presentation is
            counted as one paper/presentation in the author’s non-student
            registration.
          </p>
          <p>
            <b>
              To submit a presentation request, you must provide the following
              information about the paper(s):
            </b>
          </p>
          <ol>
            <li>Title</li>
            <li>Abstract</li>
            <li>Complete Author List</li>
            <li>Journal Volume, Issue and Page Numbers (if available)</li>
            <li>DOI Number or URL to IEEE Xplore page (if available)</li>
          </ol>
        </Col>
      </Row>
      <Row>
        <Col className="white-container">
          <h5>Important Dates</h5>
          <ul>
            <li>
              <b>Journal Presentation Request Deadline:</b>&nbsp; February 1,
              2023
            </li>
            <li>
              <b>Journal Presentation Request Notification: </b>&nbsp; March 1,
              2023
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default CallForJournalPresentations;

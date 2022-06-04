import React from "react";
import { Col, Row } from "react-bootstrap";

const ConductAndSafety = () => {
  return (
    <div className="p-200 gen-margin">
      <h3 className="gen-heading-1">IEEE Event Conduct and Safety</h3>
      <Row>
        <Col className="white-container">
          <p>
            <b>IEEE Event Conduct and Safety Statement:</b> IEEE believes that
            science, technology, and engineering are fundamental human
            activities, for which openness, international collaboration, and the
            free flow of talent and ideas are essential. Its meetings,
            conferences, and other events seek to enable engaging, thought
            provoking conversations that support IEEE’s core mission of
            advancing technology for humanity.
          </p>{" "}
          <p>
            Accordingly, IEEE is committed to providing a safe, productive, and
            welcoming environment to all participants, including staff and
            vendors, at IEEE-related events. IEEE has no tolerance for
            discrimination, harassment, or bullying in any form at IEEE-related
            events. All participants have the right to pursue shared interests
            without harassment or discrimination in an environment that supports
            diversity and inclusion.
          </p>{" "}
          <p>
            Participants are expected to adhere to these principles and respect
            the rights of others. IEEE seeks to provide a secure environment at
            its events. Participants should report any behavior inconsistent
            with the principles outlined here, to on site staff, security or
            venue personnel, or to &nbsp;
            <a href="mailto:eventconduct@ieee.org">eventconduct@ieee.org</a>.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ConductAndSafety;

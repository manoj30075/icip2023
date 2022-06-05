import React from "react";

import "./callForPapers.css";
import { Row, Col } from "react-bootstrap";

const topicsOfInterestMap = {
  first_half: [
    "Advanced Driver Assistance Systems",
    "Policies and Regulations for IV",
    "Automated Vehicles",
    "Autonomous / Intelligent Robotic Vehicles",
    "Connected & Cooperative Vehicles",
    "Image, Radar, Lidar Signal Processing",
    "Vehicular Safety, Active and Passive",
    "Information Fusion",
    "Vehicle Environment Perception",
    "Vehicle Control",
  ],
  second_half: [
    "Driver State and Intent Recognition",
    "Human Factors",
    "Smart Infrastructure",
    "Intelligent Vehicle Software Infrastructure",
    "Artificial Intelligence",
    "Teleoperation of IV",
    "Collision Avoidance",
    "Ethics and IV",
    "Pedestrian Protection",
    "Advanced sensing and recognition",
  ],
};

const CallForPapers = () => {
  const renderTopicsOfInterest = () => {
    return (
      <Row>
        <h4>Topics of interest</h4>
        <div className="white-container">
          <Row>
            <Col md={6} xs={12}>
              <ul style={{ fontSize: 16, color: "#123693" }}>
                {topicsOfInterestMap.first_half.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </Col>
            <Col md={6} xs={12}>
              <ul style={{ fontSize: 16, color: "#123693" }}>
                {topicsOfInterestMap.second_half.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      </Row>
    );
  };

  const renderAuthorsNotes = () => (
    <Row>
      <Col md={12} className="white-container hover-col">
        <p>
          <span style={{ color: "#0053d6" }}>
            THE IEEE INTELLIGENT VEHICLES SYMPOSIUM (IV 2023)
          </span>{" "}
          <span style={{ color: "#123693" }}>
            is the premier annual forum organized by the IEEE Intelligent
            Transportation Systems Society (ITSS). Researchers, academicians,
            and practitioners from universities, industry, and government
            agencies are invited to submit their latest research papers,
            simulation challenges, and applications on Intelligent Vehicles and
            Intelligent Vehicle Infrastructures. The conference will feature
            Plenary Talks, Technical Sessions, Poster Sessions, Tutorials,
            Workshops, Exhibition and Industrial Demo Challenges. The technical
            presentations are characterized by a single session format so that
            all attendees remain in a single room for multilateral
            communications in an informal atmosphere. Workshops will be offered
            on the first day followed by three days of presentations and a
            vehicle demonstration day. An exhibition area will be available for
            the presentation of products and projects. The IEEE IV 2023 will
            take place in Anchorage Alaska, USA and will offer a competitive
            Technical Program and a Memorable Social Program.
          </span>
        </p>
        <p style={{ color: "#123693" }}>
          Authors are invited to submit full-length papers up to 6 pages for
          technical content including figures and references. To maximize
          visibility and impact, all accepted papers will be published in IEEE
          Xplore digital library through Open Preview and will be freely
          accessible and downloadable by all, in final format, beginning one
          month prior to the conference and through the conference end date.
        </p>
      </Col>
    </Row>
  );
  return (
    <div className="cfp p-200">
      <h3 className="cfp-heading-1">Call for Papers</h3>
      {renderAuthorsNotes()}
      {renderTopicsOfInterest()}
      <Row>
        <Col className="white-container">
          <h5>Important Dates</h5>
          <ul>
            <li>
              <b>Paper Submission Deadline:</b>&nbsp; January 15, 2023
            </li>
            <li>
              <b>Notification of Acceptance: </b>&nbsp; March 15, 2023
            </li>
            <li>
              <b>Final Paper Submission: </b>&nbsp; March 30, 2023
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default CallForPapers;

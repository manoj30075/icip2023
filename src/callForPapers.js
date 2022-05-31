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
      <Col md={12} className="white-container">
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
      <h3 className="cfp-heading-1">Call for papers</h3>
      {renderAuthorsNotes()}
      {renderTopicsOfInterest()}
    </div>
  );
};

export default CallForPapers;

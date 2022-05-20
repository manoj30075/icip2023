import React from "react";
import { Row, Col } from "react-bootstrap";
import "./landingPage.css";

const topicsOfInterest = [
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
];

const importantDateNames = {
  paper_submission_deadline: "Paper Submission Deadline",
  special_session_proposal: "Special Session Proposal",
  workshop_proposal_deadline: "Workshop Proposal Deadline",
  tutorial_proposal_deadline: "Tutorial Proposal Deadline",
  notification_of_acceptance: "Notification of Acceptance",
  final_paper_submission: "Final Paper Submission",
};

const importantDateTimes = {
  paper_submission_deadline: "January 15, 2023",
  special_session_proposal: "January 15, 2023",
  workshop_proposal_deadline: "February 1, 2023",
  tutorial_proposal_deadline: "February 1, 2023",
  notification_of_acceptance: "March 15, 2023",
  final_paper_submission: "March 30, 2023",
};

const organizingCommittee = [
  {
    name: "Saif alZahir",
    position: "General Chair",
    email: "",
  },
  {
    name: "Kenrick Mock",
    position: "Co-General Chair",
    email: "",
  },
  {
    name: "Frederic Dufaux",
    position: "Technical Program Co-Chair",
    email: "",
  },
  {
    name: "Meng Lu",
    position: "Technical Program Co-Chair",
    email: "",
  },
  {
    name: "Sohail Dianat",
    position: "Finance Chair",
    email: "",
  },
];

const contactCommitee = [
  {
    name: "Brendan Morris ",
    position: "Industry Chair",
    email: "",
  },
  {
    name: "Johannes Betz",
    position: "Tutorial Co-Chair",
    email: "",
  },
];

const LandingPage = () => {
  const renderTopicsOfInterest = () => {
    return (
      <div
        className="landing-page-important-dates"
        style={{ padding: 20, marginBottom: 10 }}
      >
        <p style={{ color: "#0053d6", fontSize: 28, textAlign: "left" }}>
          Topics of Interest
        </p>
        <ul style={{ fontSize: 16, color: "#123693" }}>
          {topicsOfInterest.map((topic) => {
            return <li style={{ textAlign: "left" }}>{topic}</li>;
          })}
        </ul>
      </div>
    );
  };

  const renderImportantDates = () => {
    return (
      <div
        className="landing-page-important-dates"
        style={{ padding: 20, marginBottom: 10 }}
      >
        <p style={{ color: "#0053d6", fontSize: 28, textAlign: "left" }}>
          Important Dates
        </p>
        <table style={{ width: "100%", color: "#828892" }}>
          <tbody>
            {Object.keys(importantDateNames).map((date) => {
              return (
                <tr>
                  <td style={{ textAlign: "left", color: "#123693" }}>
                    {importantDateNames[date]}
                  </td>
                  <td style={{ textAlign: "left" }}>
                    {importantDateTimes[date]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const renderOrganizingCommittee = () => {
    return (
      <div
        className="landing-page-important-dates"
        style={{ padding: 20, marginBottom: 10 }}
      >
        <p style={{ color: "#0053d6", fontSize: 28, textAlign: "left" }}>
          Organizing Committee
        </p>
        <table style={{ width: "100%", color: "#828892" }}>
          <tbody>
            {organizingCommittee.map((member) => {
              return (
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      color: "#123693",
                    }}
                  >
                    {member.name}
                  </td>
                  <td
                    style={{
                      textAlign: "left",
                    }}
                  >
                    {member.position}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const renderContactCommittee = () => {
    return (
      <div className="landing-page-important-dates" style={{ padding: 20 }}>
        <p style={{ color: "#0053d6", fontSize: 28, textAlign: "left" }}>
          Contact
        </p>
        <table style={{ width: "100%", color: "#828892" }}>
          <tbody>
            {contactCommitee.map((member) => {
              return (
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      color: "#123693",
                    }}
                  >
                    {member.name}
                  </td>
                  <td
                    style={{
                      textAlign: "left",
                    }}
                  >
                    {member.position}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      <Row>
        <Col className="landing-page">
          <Col md={{ offset: 6 }} className="landing-page-content">
            <div className="landing-page-content-text">
              <h1>IEEE IV 2023</h1>
              <h2>Anchorage, Alaska, USA June 4 – 7, 2023</h2>
            </div>
          </Col>
        </Col>
      </Row>
      <div style={{ padding: "0 30px" }}>
        <Row style={{ backgroundColor: "white", margin: "40px 0px" }}>
          <Col className="landing-page-welcome">
            <h3>Welcome to ICIP 2023</h3>
            <p>
              <span style={{ color: "#0053d6" }}>
                THE IEEE INTELLIGENT VEHICLES SYMPOSIUM (IV 2023)
              </span>{" "}
              <span style={{ color: "#123693" }}>
                is the premier annual forum organized by the IEEE Intelligent
                Transportation Systems Society (ITSS). Researchers,
                academicians, and practitioners from universities, industry, and
                government agencies are invited to submit their latest research
                papers, simulation challenges, and applications on Intelligent
                Vehicles and Intelligent Vehicle Infrastructures. The conference
                will feature Plenary Talks, Technical Sessions, Poster Sessions,
                Tutorials, Workshops, Exhibition and Industrial Demo Challenges.
                The technical presentations are characterized by a single
                session format so that all attendees remain in a single room for
                multilateral communications in an informal atmosphere. Workshops
                will be offered on the first day followed by three days of
                presentations and a vehicle demonstration day. An exhibition
                area will be available for the presentation of products and
                projects. The IEEE IV 2023 will take place in Anchorage Alaska,
                USA and will offer a competitive Technical Program and a
                Memorable Social Program.
              </span>
            </p>
            &nbsp;
            <p style={{ color: "#123693" }}>
              Authors are invited to submit full-length papers up to 6 pages for
              technical content including figures and references. To maximize
              visibility and impact, all accepted papers will be published in
              IEEE Xplore digital library through Open Preview and will be
              freely accessible and downloadable by all, in final format,
              beginning one month prior to the conference and through the
              conference end date.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>{renderTopicsOfInterest()}</Col>
          <Col md={6}>
            <Col>{renderImportantDates()}</Col>
            <Col>{renderOrganizingCommittee()}</Col>
            <Col>{renderContactCommittee()}</Col>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LandingPage;

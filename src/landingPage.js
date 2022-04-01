import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <>
      <Row>
        <Col className="landing-page">
          <Col md={{ offset: 6 }} className="landing-page-content">
            <div className="landing-page-content-text">
              <h1>IEEE International Conference in Image Processing</h1>
              <h2>ICIP 2023 16-19 October 2023 Anchorage-Alaska</h2>
            </div>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="landing-page-welcome">
          <h3>Welcome to ICIP 2023</h3>
          <p>
            The 28th IEEE International Conference on Image Processing (IEEE -
            ICIP) will be held in Anchorage-Alaska, Denaʼina Civic and
            Convention Center in the period September 19-22, 2021.
          </p>
          &nbsp;
          <p>
            The IEEE ICIP is the world’s largest and most comprehensive
            technical conference focused on image and video processing and
            computer vision. This conference will showcase world-class plenary
            speakers, tutorials, exhibits, special sessions, industry sessions,
            and women in engineering that creates an excellent forum to foster
            innovation and entrepreneurship. There will be opportunities to
            network with the brightest minds in academia and industry from this
            field. In addition, several events targeting students and
            professionals will also be featured at IEEE ICIP 2021.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="footer">
          © Copyright 2022 IEEE – All rights reserved. Use of this website
          signifies your agreement to the IEEE Terms and Conditions. A
          not-for-profit organization, IEEE is the world’s largest technical
          professional organization dedicated to advancing technology for the
          benefit of humanity.
        </Col>
      </Row>
    </>
  );
};

export default LandingPage;

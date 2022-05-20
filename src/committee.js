import React from "react";
import { Row, Col } from "react-bootstrap";
import "./committee.css";

const committee = [
  {
    name: "Saif alZahir",
    university: "Concordia University",
    title: "General Chair",
    image: "./images/image2.png",
  },
  {
    name: "Kenrick Mock",
    university: "University of Alaska Anchorage",
    title: "Co-General Chair",
    image: "./images/image7.jpg",
  },
  {
    name: "Frederic Dufaux",
    university: "CNRS",
    title: "Technical Program Co-Chair",
    image: "./images/image6.jpg",
  },
  {
    name: "Meng Lu",
    university: "",
    title: "Technical Program Co-Chair",
    image: "./images/dummy.jpeg",
  },
  {
    name: "Sohail Dianat",
    university: "Rochester Institute of Technology",
    title: "Finance Chair",
    image: "./images/image9.jpg",
  },
  {
    name: "Brendan Morris",
    university: "",
    title: "Industry Chair ",
    image: "./images/dummy.jpeg",
  },
  {
    name: "Rony Ferzli",
    university: "Intel Corporation",
    title: "Challenge Co-Chair",
    image: "./images/image8.png",
  },
  {
    name: "Ignacio Alvarez",
    university: "Intel Corporation",
    title: "Challenge Co-Chair",
    image: "./images/dummy.jpeg",
  },
  {
    name: "Johannes Betz",
    university: "",
    title: "Tutorial Co-Chair",
    image: "./images/image3.jpg",
  },
  {
    name: "Arash Mohammadi",
    university: "Concordia University",
    title: "SS Chair",
    image: "./images/image1.jpg",
  },
  {
    name: "Osama Abaza",
    university: "University of Alaska Anchorage",
    title: "Local Arrangements Co-Chair",
    image: "./images/image5.png",
  },
  {
    name: "Hala Abudalfa",
    university: "McGill University",
    title: "Students Activities Co-Chair",
    image: "./images/image4.png",
  },
];

const Committee = () => {
  return (
    <div className="committee">
      <h3 className="committee-heading">Organizing committee</h3>
      <Row>
        {committee.map((member, index) => (
          <Col
            className="committee-member"
            key={index}
            xs={12}
            sm={5}
            md={5}
            lg={5}
          >
            <Row>
              <Col md={4}>
                <img
                  className="committee-member-image"
                  src={require(`${member.image}`)}
                  alt={member.name}
                />
              </Col>
              <Col md={8}>
                <div className="committee-member-name">{member.name}</div>
                <div className="committee-member-title">
                  {member.university}
                </div>
                <div className="committee-member-title">{member.title}</div>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Committee;

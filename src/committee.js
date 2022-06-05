import React from "react";
import { Row, Col } from "react-bootstrap";
import "./committee.css";

const committee = [
  {
    title: "General Chairs",
    people: [
      {
        name: "Saif alZahir",
        university: "Concordia University, Montreal, Canada",
        title: "General Chair",
        image: "./images/image2.png",
      },
      {
        name: "Kenrick Mock",
        university: "University of Alaska Anchorage",
        title: "Co-General Chair",
        image: "./images/image7.jpg",
      },
    ],
  },
  {
    title: "Technical Program Chairs",
    people: [
      {
        name: "Frederic Dufaux",
        university: "CNRS, France",
        title: "Technical Program Co-Chair",
        image: "./images/image6.jpg",
      },
      {
        name: "Meng Lu",
        university: "Peek Traffic B.V., Netherlands",
        title: "Technical Program Co-Chair",
        image: "./images/image10.jpg",
      },
    ],
  },
  {
    title: "Finance Chair",
    people: [
      {
        name: "Sohail Dianat",
        university: "Rochester Institute of Technology",
        title: "Finance Chair",
        image: "./images/image9.jpg",
      },
    ],
  },
  {
    title: "Industry Chair",
    people: [
      {
        name: "Brendan Morris",
        university: "University of Nevada, Las Vegas, United States",
        title: "Industry Chair ",
        image: "./images/image11.jpg",
      },
    ],
  },
  {
    title: "Competition Challenge Co-Chairs",
    people: [
      {
        name: "Rony Ferzli",
        university: "Intel Corporation",
        title: "Competition Challenge Co-Chair",
        image: "./images/image8.png",
      },
      {
        name: "Ignacio Alvarez",
        university: "Intel, USA",
        title: "Competition Challenge Co-Chair",
        image: "./images/image12.jpg",
      },
    ],
  },
  {
    title: "Tutorial Co-Chair",
    people: [
      {
        name: "Johannes Betz, M.A.",
        university: "University of Pennsylvania, USA",
        title: "Tutorial Co-Chair",
        image: "./images/image3.jpg",
      },
    ],
  },
  {
    title: "Special Sessions Co-Chair",
    people: [
      {
        name: "Arash Mohammadi",
        university: "Concordia University",
        title: "Special Sessions Co-Chair",
        image: "./images/image1.jpg",
      },
    ],
  },
  {
    title: "Local Arrangements Co-Chair",
    people: [
      {
        name: "Osama Abaza",
        university: "University of Alaska Anchorage",
        title: "Local Arrangements Co-Chair",
        image: "./images/image5.png",
      },
    ],
  },
  {
    title: "Students Activities Co-Chair",
    people: [
      {
        name: "Hala Abudalfa",
        university: "McGill University",
        title: "Students Activities Co-Chair",
        image: "./images/image4.png",
      },
    ],
  },
];

const Committee = () => {
  return (
    <Row className="committee container p-200">
      <h3 className="committee-heading">Organizing Committee</h3>
      <div>
        {committee.map((member) => (
          <div>
            <h4 style={{ margin: "20px" }}>
              <b>{member.title}</b>
            </h4>
            {member.people.map((person) => (
              <div>
                <Col className="committee-member" md={12}>
                  <Row>
                    <Col md={4}>
                      <img
                        className="committee-member-image"
                        src={require(`${person.image}`)}
                        alt={person.name}
                      />
                    </Col>
                    <Col md={8}>
                      <div className="committee-member-name">{person.name}</div>
                      <div className="committee-member-title">
                        {person.university}
                      </div>
                      <div className="committee-member-title">
                        <b>{person.title}</b>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Row>
  );
};

export default Committee;

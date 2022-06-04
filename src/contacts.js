import React from "react";
import { Row, Col, Table } from "react-bootstrap";

const contacts = [
  {
    id: 0,
    name: "General Chair",
    email: "sadeee@rit.edu",
  },
  {
    id: 1,
    name: "Paper Submission",
    email: "",
  },
  {
    id: 2,
    name: "Paper Reviewing",
    email: "",
  },
  {
    id: 3,
    name: "Awards",
    email: "",
  },
  {
    id: 4,
    name: "Special Sessions",
    email: "",
  },
  {
    id: 5,
    name: "Tutorials",
    email: "",
  },
  {
    id: 6,
    name: "Challenge Sessions",
    email: "",
  },
  {
    id: 7,
    name: "Registration",
    email: "",
  },
  {
    id: 8,
    name: "General Information",
    email: "",
  },
  {
    id: 9,
    name: "Student Activities",
    email: "",
  },
  {
    id: 10,
    name: "Patrons",
    email: "",
  },
  {
    id: 11,
    name: "Exhibitors",
    email: "",
  },
];

const Contacts = () => {
  return (
    <div className="p-200 gen-margin">
      <h3 className="gen-heading-1">Contacts</h3>
      {/*render in table*/}
      <Row>
        <Col md={12} className="white-container">
          <Table responsive>
            <thead>
              <tr style={{ color: "#123693" }}>
                <th>Task</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>
                    <a href={`mailto:${contact.email}`} target="_blank">
                      {contact.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Contacts;

import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import ICIPNavbar from "./navbar";
import LandingPage from "./landingPage";
import Committee from "./committee";
import Reviewers from "./reviewers";
import CallForPapers from "./callForPapers";
import Tba from "./tba";
import CallForTutorials from "./callForTutorials";
import CallForJournalPresentations from "./callForJournalPresentations";
import { Col, Row } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ICIPNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/reviewers" element={<Reviewers />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/tba" element={<Tba />} />
          <Route path="/call-for-tutorials" element={<CallForTutorials />} />
          <Route
            path="/call-for-journal-presentations"
            element={<CallForJournalPresentations />}
          />
        </Routes>
        <Row>
          <Col className="footer">
            © Copyright 2022 IEEE – All rights reserved. Use of this website
            signifies your agreement to the IEEE Terms and Conditions. A
            not-for-profit organization, IEEE is the world’s largest technical
            professional organization dedicated to advancing technology for the
            benefit of humanity.
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

import React from "react";
import { Col, Row } from "react-bootstrap";

const CallForChallengeSessions = () => {
  return (
    <div className="p-200 gen-margin">
      <h3 className="gen-heading-1">Call for Competition Challenge</h3>
      <Row>
        <Col className="white-container" md={12}>
          The 2023 IEEE Intelligent Vehicle Symposium organizing committee is
          planning an Autonomous Vehicle competition challenge and looking for
          volunteers to be part of the organizing team. Researchers and
          practitioners are welcomed. Below are examples of potential tracks and
          typical help needed
        </Col>
        <Col className="white-container" md={12}>
          <h4>Track 1: AV Race</h4>
          <ul>
            <li>
              Write the Spec to build the actual track (size, material, layout
              …). As an example, F1Tenth uses tubes to set tracks, can adopt the
              same approach or a different one
              <ul>
                <li>
                  Layout example:{" "}
                  <a href="https://en.wikipedia.org/wiki/List_of_Formula_One_circuits">
                    https://en.wikipedia.org/wiki/List_of_Formula_One_circuits
                  </a>
                </li>
                <li>
                  F1Tenth Material used Example:{" "}
                  <a href="https://f1tenth.org/learn.html">
                    https://f1tenth.org/learn.html
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Select the simulator to be used by competing teams in preparation
              for the race (Potential Options Carla Simulator{" "}
              <a href="https://carla.org/">https://carla.org/</a> ROS RVIZ…)
            </li>
            <li>
              Selection of the Robot System: While F1tenth provide a robot
              system ready to use, for the computer module it is providing
              Jetson Nvidia only. It is desirable to provide the option for
              teams to choose between multiple vendors (Nvidia, Qualcomm and
              Intel boards …), this is challenging to have system with similar
              mechanical spec (weight, steering power, speed...)
              <ul>
                <li>
                  Nvidia board example: Jetson used in{" "}
                  <a href="https://f1tenth.org/build.html">
                    https://f1tenth.org/build.html
                  </a>
                </li>
                <li>
                  Intel board example:{" "}
                  <a href="https://up-board.org/">https://up-board.org/</a>
                </li>
                <li>
                  Qualcomm board example:{" "}
                  <a href="https://developer.qualcomm.com/qualcomm-robotics-rb5-kit">
                    https://developer.qualcomm.com/qualcomm-robotics-rb5-kit
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <h4>Track 2: AV Fleet Management</h4>
          <p>
            This is a new idea which is not tackled in previous conferences or
            venues, as such it needs a lot of preparation, the track idea is
            focusing more on the backend cloud services interacting with a fleet
            within a specific geographical location. The winner needs to
            demonstrate the best fleet management algorithm. Choose the right
            optimization metric (time: number of requests with a time span,
            power:
          </p>
          <ul>
            <li>
              Choose the right optimization metric (time: number of requests
              with a time span, power: remaining energy in fleet batteries after
              N number of requests), identify the components to build the
              backend to submit requests by users, define a common service API
              for fleet management (implementation specific for each team)
            </li>
            <li>
              Investigate whether it is possible to implement the idea in a
              physical track with 3-4 robots in a fleet or simulation only
            </li>
            <li>
              Investigate how to engage audience: For example, for fleet
              management, an idea could be the conference participants will send
              uber like requests on cloud platform to go from point A to B in a
              predefined map
            </li>
          </ul>
        </Col>
        <Col className="white-container" md={12}>
          <p>
            <b>
              If interested to help in organizing the challenge, please reach
            </b>
          </p>
          <ul>
            <li>
              Rony Ferzli: &nbsp;
              <a href="mailto:rony.ferzli@intel.com">rony.ferzli@intel.com</a>
            </li>
            <li>
              Ignacio Alvarez: &nbsp;
              <a href="mailto:ignacio.j.alvarez@intel.com">
                ignacio.j.alvarez@intel.com
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default CallForChallengeSessions;

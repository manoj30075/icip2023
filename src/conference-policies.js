import React from "react";
import { Col, Row } from "react-bootstrap";

const ConferencePolicies = () => {
  return (
    <div className="p-200 gen-margin">
      <h3 className="gen-heading-1">Conference / Registration Policies</h3>
      <Row>
        <h4>Author Registration</h4>
        <Col className="white-container">
          <p>
            Each accepted paper must be covered by at least full
            member/non-member registration by 22 July 2021, and one registration
            can cover up to four papers.
          </p>
        </Col>
        <h4>Non-Presented Paper (No-Show) Policy</h4>
        <Col className="white-container">
          <p>
            <b>Non-Presented Paper (No-Show) Policy:</b> The IEEE IV 2023
            enforces a "no show" policy. Any accepted paper included in the
            final program is expected to have at least one author or qualified
            proxy attend and present the paper at the conference. Authors of the
            accepted papers included in the final program who do not attend and
            present at the conference will be added to a "No Show List",
            compiled by the Society. The "no show" papers will not be published
            by IEEE on IEEE Xplore® or other public access forums, but these
            papers will be distributed as part of the on-site electronic
            proceedings and the copyright of these papers will belong to the
            IEEE.
          </p>
          <p>
            Note: For poster sessions, if the speaker is not present in front of
            the poster for most of the time during the poster session, this
            implies "no show".
          </p>
          <p>
            Exceptions to this policy will be made by the Technical Program
            Chair of the conference only if there is evidence that the no show
            occurred because of unanticipated events beyond the control of the
            authors, and every option available to the authors to present the
            paper was exhausted. The no show authors may appeal the decision of
            the Technical Program Chair to the Vice President Conferences.
          </p>{" "}
          <p>
            The IEEE IV 2023 values diversity. Authors who anticipate inability
            to travel to a conference because of a government-imposed travel
            restriction are still encouraged to submit papers. Such papers will
            be reviewed and accepted on their own merit for publication in
            Conference Proceedings, without any knowledge of the author’s travel
            restriction. Within one week of paper acceptance notification,
            travel-restricted authors must notify the Technical Program Chair of
            the conference with proof of their restriction. Substitute
            presenters may be possible or, depending on conference resources,
            other accommodations may be available, such as a remote presentation
            or pre-recorded video.
          </p>
        </Col>
        <h4>Refund Policy</h4>
        <Col className="white-container">
          <p>All registration fees covering a paper are non-refundable.</p>{" "}
          <p>
            For registration fees not covering a paper: A full refund, after a
            US$50 (equivalent) processing fee, will be given, provided the
            request is applied for prior to the last day of the Advance
            Registration deadline.
          </p>
          <p>
            Refunds will not be issued after the Advance Registration deadline,
            unless in extreme cases (i.e. medical or family emergencies, visa
            issues based on solid evidence). In such cases, the organizers must
            be alerted prior to the conference start date. To obtain a refund,
            an email must be submitted containing proof of the extenuating
            circumstance, up to one week after the conference end date. Any visa
            related issues must provide proof that the application was submitted
            early enough according to the typical times to obtain a visa for the
            country and person in question.
          </p>{" "}
          <p>
            The final decision on refund will be at the discretion of the
            conference organizers.
          </p>
        </Col>
        <h4>Currency & Payment</h4>
        <Col className="white-container">
          <p>All conference transactions shall be in US Dollars.</p>

          <p>
            The conference accepts payment by credit cards, check and bank
            transfer. Attendees not using credit cards must forward a check or
            money order payable to IEEE IV 2023 and drawn on a US bank or a US
            branch of an International bank for the total registration amount in
            US Dollars. There will be a USD $50 fee assessed for returned checks
            or for chargebacks issued on valid credit card charges. Registration
            payments must be received by the registration deadline for the rate
            at which you registered; if payment is not received by the deadline,
            your linked paper(s) will be removed from the technical program and
            proceedings.
          </p>
        </Col>
        <h4>IEEE Event Conduct and Safety Statement</h4>
        <Col className="white-container">
          <p>
            IEEE believes that science, technology, and engineering are
            fundamental human activities, for which openness, international
            collaboration, and the free flow of talent and ideas are essential.
            Its meetings, conferences, and other events seek to enable engaging,
            thought provoking conversations that support IEEE’s core mission of
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
            venue personnel, or to{" "}
            <a href="mailto:eventconduct@ieee.org">eventconduct@ieee.org</a>.
          </p>
        </Col>
        <a href="https://www.ieee.org/conferences/event-terms-and-conditions.html">
          IEEE Event Terms and Conditions
        </a>
        <a href="https://www.ieee.org/security-privacy.html">
          IEEE Privacy Policy
        </a>
      </Row>
    </div>
  );
};

export default ConferencePolicies;

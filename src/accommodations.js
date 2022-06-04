import React from "react";
import { Row, Col } from "react-bootstrap";

const accommodations = [
  {
    name: "Hilton Anchorage Hotel",
    img: "https://static.wixstatic.com/media/8dcd4f_40b3b7600a704c399a41f8b75e1855ac~mv2.jpg/v1/fill/w_767,h_512,al_c,lg_1,q_85,enc_auto/The_Hilton_Anchorage__Anchorage%2C_Alaska_.jpg",
    description: (
      <div>
        <p>
          <b>Hilton Anchorage Hotel</b>, located in the heart of downtown,
          within three blocks of the Egan and Dena'ina convention centers, 5th
          Avenue Mall, and the Alaska Center for the Performing Arts.
        </p>
        <p>
          Use booking code “IEEE22” and guests can book with this code by
          calling 1-800-HILTONS or by going to our website &nbsp;
          <a href="www.hiltonanchorage.com" target="_blank">
            www.hiltonanchorage.com
          </a>
          . If anyone would like to book outside of the conference dates of
          5/31/2022-6/5/2022, please have them email me directly (
          <a href="mailto:linnea.wood@hilton.com" target="_blank">
            linnea.wood@hilton.com
          </a>
          ), or they can contact our Group Housing Coordinator Michael Solomona
          (
          <a href="mailto:Michael.solomona@hilton.com" target="_blank">
            Michael.solomona@hilton.com
          </a>
          ).
        </p>
      </div>
    ),
  },
  {
    name: "Sheraton Anchorage Hotel & Spa",
    img: "https://static.wixstatic.com/media/8dcd4f_6efdb9df682e4048978516b71925b0c8~mv2.jpg/v1/fill/w_868,h_580,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sheraton.jpg",
    description: (
      <div>
        <p>
          <b>
            <a
              href="https://www.marriott.com/hotels/travel/ancsi-sheraton-anchorage-hotel-and-spa/"
              target="_blank"
            >
              The Sheraton Anchorage Hotel & Spa
            </a>
          </b>
          , located at{" "}
          <a href="https://g.page/SheratonAnchorage?share" target="_blank">
            401 East 6th Avenue
          </a>
          , is just a 3 minute drive or 15 minute walk from the convention
          center areas.
        </p>
      </div>
    ),
  },
  {
    name: "Hotel Captain Cook",
    img: "https://static.wixstatic.com/media/8dcd4f_bc439d736b854eda9077514270c7d846~mv2.jpg/v1/fill/w_868,h_580,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Captain_Cook.jpg",
    description: (
      <div>
        <p>
          <b>
            <a href="https://captaincook.com/" target="_blank">
              Hotel Captain Cook
            </a>
          </b>{" "}
          is an historic hotel from which you can experience stunning views of
          Cook Inlet, the Chugach Mountains, Anchorage cityscape or the Alaskan
          Range. Alaska's only Preferred Hotel is{" "}
          <a href="https://goo.gl/maps/jdDT29bHxxrmSpzH8" target="_blank">
            located just a 4 minute walk
          </a>
          from the shoreline.
        </p>
      </div>
    ),
  },
  {
    name: "Marriott Anchorage Downtown Hotel",
    img: "https://static.wixstatic.com/media/8dcd4f_90bf9023547f4758b6f140d6bdc31c84~mv2.jpg/v1/fill/w_868,h_652,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/marriott_anchorage_downtown_edited.jpg",
    description: (
      <div>
        <p>
          <b>Marriott Anchorage Downtown</b> boasts an enviable location in
          downtown Anchorage and{" "}
          <a href="https://goo.gl/maps/GQpcMWYPaLg5GrVf6" target="_blank">
            just 5 miles
          </a>{" "}
          from Ted Stevens Anchorage International Airport.
        </p>
      </div>
    ),
  },
];

const Accommodations = () => {
  return (
    <div className="p-200 gen-margin">
      <h3 className="gen-heading-1">Accommodations</h3>
      <Row>
        {accommodations.map((accommodation, index) => (
          <Col key={index} md={12} className="white-container hover-col">
            <div className="accommodation-card">
              <Row>
                <Col md={4}>
                  <img
                    src={accommodation.img}
                    alt={accommodation.name}
                    style={{ height: 200 }}
                  />
                </Col>
                <Col md={8}>
                  <h4>{accommodation.name}</h4>
                  <p>{accommodation.description}</p>
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Accommodations;

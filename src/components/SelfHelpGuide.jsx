
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const guides = [
  { icon: "fa-solid fa-fingerprint", title: "Folio Creation (KYC Compliant)", desc: "An easy guide on how to onboard new customers." },
  { icon: "fa-solid fa-receipt", title: "Purchase Transaction", desc: "How to initiate non-purchase transactions for your customers." },
  { icon: "fa-solid fa-piggy-bank", title: "SIP", desc: "How to initiate Systematic Investment Plan for your customers." },
  { icon: "fa-solid fa-file-invoice", title: "STP", desc: "An easy guide on how to on-board new customers." },
  { icon: "fa-solid fa-arrows-rotate", title: "Switch", desc: "" },
  { icon: "fa-solid fa-globe", title: "Abslmfpartner.com", desc: "" },
  { icon: "fa-solid fa-video", title: "Video KYC Link", desc: "" },
  { icon: "fa-solid fa-circle-play", title: "Active App Video", desc: "" },
  { icon: "fa-solid fa-link", title: "Partner Easy Link", desc: "" },
  { icon: "fa-solid fa-hand-pointer", title: "Biller registration steps", desc: "" },
];

const SelfHelpGuide = () => {
  return (
    <section className="shg-section mt-4" data-testid="self-help-guide">
      <h3 className="section-heading">SELF HELP GUIDE</h3>
      <Container className="shg-grid">
        <Row>
          {guides.map((g, i) => (
            <Col md={6} lg={3} key={i}>
              <div className="shg-item" data-testid={`shg-item-${i}`}>
                <div className="shg-icon-box">
                  <i className={g.icon}></i>
                </div>
                <div>
                  <h6>{g.title}</h6>
                  {g.desc && <p>{g.desc}</p>}
                  <button className="btn-watch">WATCH HERE</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SelfHelpGuide;
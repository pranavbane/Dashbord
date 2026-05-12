
import React from "react";
import { Container } from "react-bootstrap";

const tools = [
  { icon: "fa-solid fa-magnifying-glass-dollar", label: "Digital Factsheet" },
  { icon: "fa-solid fa-graduation-cap", label: "Child Education Cost Calculator" },
  { icon: "fa-solid fa-piggy-bank", label: "SIP Calculator" },
  { icon: "fa-solid fa-couch", label: "Retirement Calculator" },
  { icon: "fa-solid fa-bullseye", label: "Goal Planning Calculator" },
  { icon: "fa-solid fa-paper-plane", label: "Express SOA" },
];

const SalesTool = () => {
  return (
    <section className="sales-section" data-testid="sales-tool">
      <div className="sales-banner">
        <Container>
          <h3>SALES TOOL</h3>
        </Container>
      </div>
      <Container className="mt-3">
        <div className="sales-tools-grid">
          {tools.map((t, i) => (
            <div className="sales-tool-card" key={i} data-testid={`sales-tool-${i}`}>
              <i className={t.icon}></i>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SalesTool;
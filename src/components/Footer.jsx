
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => (
  <footer className="abc-footer" data-testid="site-footer">
    <Container>
      <p className="mb-1">
        © {new Date().getFullYear()} Aditya Birla Sun Life AMC Limited. All rights reserved.
      </p>
      <p className="mb-0">
        Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
      </p>
    </Container>
  </footer>
);

export default Footer;
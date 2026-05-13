
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const services = [
    { icon: "fa-solid fa-chart-line", label: "ABSLMF Partner.com", actions: ["KNOW MORE", "LOGIN"] },
    { icon: "fa-solid fa-link", label: "Partner Easy Link", actions: ["GENERATE YOUR CUSTOMIZED LINK"] },
    { icon: "fa-solid fa-mobile-screen", label: "ABSLMF Partner App", actions: ["KNOW MORE"] },
    { icon: "fa-brands fa-whatsapp", label: "Whatsapp ReachIt – Empower whatsapp pdf attached", actions: ["KNOW MORE"] },
];

const PartnerServices = () => {
    return (
        <section className="partner-section" data-testid="partner-services">
            <h3 className="section-heading mt-0">PARTNER DIGITAL SERVICES</h3>
            <Container>
                <Row className="g-4 align-items-center">
                    <Col md={4}>
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                            <rect width="500" height="500" fill="#ebebeb" />

                            <g transform="translate(175, 330)">
                                <rect x="10" y="0" width="130" height="90" rx="5" fill="#fcfcfc" stroke="#5d6d7e" strokeWidth="4" />
                                <path d="M0 95 L150 95 L165 115 L-15 115 Z" fill="#5d6d7e" />
                                <rect x="10" y="115" width="130" height="8" rx="2" fill="#34495e" />
                            </g>

                            <g fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">

                                <path d="M250 330 V 280 Q 250 250 280 250 H 350 Q 380 250 380 200 V 100" stroke="#f39c12" />

                                <path d="M230 330 V 220 Q 230 180 180 180 H 100 Q 60 180 60 120" stroke="#829b7a" />
                                <path d="M220 330 V 260 Q 220 230 150 230 Q 110 230 110 300" stroke="#aab7b8" />

                                <path d="M240 330 V 150 Q 240 80 320 80 H 400" stroke="#95a5a6" />

                                <path d="M260 330 V 200 Q 260 160 310 160 H 340 V 50" stroke="#c3cfb6" />
                            </g>

                            <g>
                                <g transform="translate(215, 150)">
                                    <path d="M10 25 Q10 10 25 10 Q30 0 45 0 Q60 0 65 10 Q80 10 80 25 Q80 40 65 40 H 25 Q10 40 10 25" fill="#f39c12" />
                                    <path d="M40 15 V 30 M35 25 L40 30 L45 25" stroke="white" strokeWidth="2" fill="none" />
                                </g>

                                <circle cx="60" cy="110" r="10" fill="#829b7a" /> <circle cx="400" cy="80" r="12" fill="#95a5a6" /> <circle cx="340" cy="40" r="10" fill="#c3cfb6" /> <rect x="370" y="170" width="20" height="14" rx="2" fill="#aab7b8" />

                                <ellipse cx="120" cy="80" rx="15" ry="12" fill="#829b7a" opacity="0.6" />
                                <ellipse cx="140" cy="70" rx="12" ry="10" fill="#829b7a" />
                            </g>

                            <g fill="none" strokeWidth="3">
                                <path d="M50 115 L60 105 L70 115" stroke="#829b7a" />
                                <path d="M370 90 L380 80 L390 90" stroke="#f39c12" />
                            </g>
                        </svg>

                    </Col>
                    <Col md={8}>
                        {services.map((s, i) => (
                            <div className="partner-row" key={i} data-testid={`partner-row-${i}`}>
                                <i className={s.icon}></i>
                                <span className="label text-color">{s.label}</span>
                                {s.actions.map((a, j) => (
                                    <button
                                        key={j}
                                        className="btn-watch ]"
                                    >
                                        {a}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PartnerServices;
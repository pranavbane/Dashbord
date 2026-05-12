import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import img1 from '../assets/MonthlyBulletin_Img1.avif';
import img2 from '../assets/MonthlyBulletin_Img2.avif';
import img3 from '../assets/MonthlyBulletin_Img3.avif';
const promoSlides = [
  {
    img: img1,
    alt: "Multi Asset Allocation - kids cheering",
    headline: "INVEST IN ONE.",
    subHeadline: "GET THE BENEFITS OF THREE.",
    fund: "MULTI ASSET ALLOCATION FUND",
    tagline: "EQUITY | DEBT | GOLD",
    hashtag: "#3in1TotalInvestmentGain",
  },
  {
    img: img2,
    alt: "Grow your wealth steadily",
    headline: "GROW STEADILY.",
    subHeadline: "BUILD WEALTH FOR THE LONG TERM.",
    fund: "EQUITY ADVANTAGE FUND",
    tagline: "DIVERSIFIED | EQUITY | GROWTH",
    hashtag: "#LongTermGrowth",
  },
  {
    img: img3,
    alt: "Smart SIP investing",
    headline: "START SMALL.",
    subHeadline: "DREAM BIG WITH SIP.",
    fund: "SYSTEMATIC INVESTMENT PLAN",
    tagline: "DISCIPLINE | GROWTH | FREEDOM",
    hashtag: "#SIPSeKaramaal",
  },
];

const MonthlyBulletin = () => {
  return (
    <section
      className="bulletin-section"
      data-testid="monthly-bulletin"
    >
      <Container className="bulletin-content">
        <Row className="g-4 align-items-stretch">

          <Col lg={6}>
            {/* <div className="bulletin-title-row">
              
              <div className="bulletin-icon">
                <i className="fa-solid fa-newspaper fa-2x"></i>
              </div>

              <div>
                <div className="bulletin-title">
                  MONTHLY
                  <br />
                  BULLETIN
                </div>

                <div className="bulletin-date mt-2">
                  July, 2023
                </div>
              </div>
            </div> */}
            <div className="bulletin-logo-row" data-testid="bulletin-logo">
              <svg
                className="bulletin-envelope"
                viewBox="0 0 120 110"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >

                {/* Envelope back */}
                <path d="M10 35 L60 5 L110 35 L110 105 L10 105 Z" fill="#a3a86b" />
                {/* Inner card */}
                <path d="M22 32 L60 12 L98 32 L98 80 L22 80 Z" fill="#f4f4ee" />
                {/* Chart line */}
                <polyline
                  points="32,68 46,52 58,60 72,38 90,46"
                  fill="none"
                  stroke="#e98a2b"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Chart dots */}
                <circle cx="32" cy="68" r="3" fill="#e98a2b" />
                <circle cx="46" cy="52" r="3" fill="#e98a2b" />
                <circle cx="58" cy="60" r="3" fill="#e98a2b" />
                <circle cx="72" cy="38" r="3" fill="#e98a2b" />
                <circle cx="90" cy="46" r="3" fill="#e98a2b" />
                {/* Envelope flap (front triangle) */}
                <path
                  d="M10 35 L60 70 L110 35 L110 105 L10 105 Z"
                  fill="#a3a86b"
                  opacity="0.95"
                />
                <path d="M10 35 L60 70 L110 35" fill="none" stroke="#8a8f55" strokeWidth="1.5" />
              </svg>
              <div className="bulletin-logo-text">
                <h2 className="bulletin-monthly">
                  MONTHLY
                  <br />
                  BULLETIN
                </h2>
              </div>
            </div>
            <div>
              <p className="bulletin-date">July, 2023</p>
            </div>
            <h6 className="bulletin-update-label">
              UPDATE OF THE WEEK
            </h6>

            <h3 className="bulletin-fund-title">
              Aditya Birla Sun Life Multi Asset Allocation Fund
            </h3>

            <p className="bulletin-desc">
              Indulge in the perfect blend of Equity, Debt,
              and Gold for a diversified investment portfolio.
              Invest in One and get the benefits of 3.
              Invest in Aditya Birla Sun Life Multi Asset
              Allocation Fund, an open-ended scheme investing
              in Equity, Debt, and Commodities. Asset Allocation
              helps balance risk versus reward by assigning
              optimum weights to the assets.
            </p>

            <Button
              className="btn-abc"
              data-testid="bulletin-know-more"
            >
              KNOW MORE
            </Button>
          </Col>

          <Col lg={6}>
            <Carousel
              fade
              interval={4500}
              pause="hover"
              data-testid="promo-carousel"
              className="promo-carousel"
            >
              {promoSlides.map((slide, idx) => (
                <Carousel.Item key={idx}>
                  <div className="promo-card" data-testid={`promo-slide-${idx}`}>
                    <img src={slide.img} alt={slide.alt} />
                    <div className="promo-card-overlay">
                      <div className="promo-card-text">
                        <h6>{slide.headline}</h6>
                        <h3>{slide.subHeadline}</h3>
                        <h6 className=" p-1 bg-white text-danger">{slide.fund}</h6>
                        <p>{slide.tagline}</p>
                      </div>
                    </div>

                    <div className="promo-tag">{slide.hashtag}</div>

                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default MonthlyBulletin;

import { Container, Row, Col, Carousel } from "react-bootstrap";
import img1 from '../assets/media1.avif';
import img2 from '../assets/media2.avif';
import img3 from '../assets/media3.avif';

const mediaSlides = [
  {
    img: img1,
    alt: "Mahesh Patil - CIO",
    tag: "INTERVIEW | MAHESH PATIL",
    title: "Aditya Birla MF CIO expects modest equity returns FY24",
    location: "Mumbai, Wednesday, July 5, 2023",
    bullets: [
      "- Aditya Birla MF CIO: Expect modest equity returns from here FY24",
      "- Aditya Birla MF CIO: Stock valuations not cheap, may grind higher",
    ],
  },
  {
    img: img2,
    alt: "A. Balasubramanian - MD & CEO",
    tag: "INTERVIEW | A. BALASUBRAMANIAN",
    title: "Domestic flows continue to support Indian markets meaningfully",
    location: "Mumbai, Tuesday, June 20, 2023",
    bullets: [
      "- ABSL MF CEO: SIP book remains resilient through volatility",
      "- ABSL MF CEO: Bullish on banking, capex and consumption themes",
    ],
  },
  {
    img: img3,
    alt: "Kaustubh Gupta - Co-Head Fixed Income",
    tag: "INTERVIEW | KAUSTUBH GUPTA",
    title: "Rates likely to stay in extended pause; duration looks attractive",
    location: "Mumbai, Monday, June 12, 2023",
    bullets: [
      "- ABSL MF: Inflation trajectory comforting, room for fixed income",
      "- ABSL MF: Prefer high-quality corporate bonds at the current curve",
    ],
  },
];

const MediaPresence = () => {
  return (
    <section className="media-section p-0" data-testid="media-section">
      <div className="row">
      {/* <Container className="position-relative" style={{ zIndex: 1 }}> */}
       <Col lg={6} className="bg-success-subtle py-4 px-8">
            <Carousel
              fade
              interval={5000}
              pause="hover"
              indicators={true}
              data-testid="media-carousel"
              className="media-carousel"
            >
              {mediaSlides.map((s, i) => (
                <Carousel.Item key={i}>
                  <div className="media-card mx-3" data-testid={`media-slide-${i}`}>
                    <Row>
                      <Col xs={12} md={2} className="pt-5">
                        <img src={s.img} alt={s.alt} className="img-fluid" />
                      </Col>
                      <Col xs={12} md={10}>
                        <h3 className="informative_text">INFORMIST</h3>
                        <small className="text-dark fw-bold">{s.tag}</small>
                        <h5 className="mt-2">{s.title}</h5>
                        <p className="text-muted">{s.location}</p>
                        {s.bullets.map((b, j) => (
                          <p key={j}>{b}</p>
                        ))}
                      </Col>
                    </Row>
                    {/* <img src={s.img} alt={s.alt} /> */}
                    {/* <small>{s.tag}</small>
                    <h5>{s.title}</h5>
                    <p>{s.location}</p>
                    {s.bullets.map((b, j) => (
                      <p key={j}>{b}</p>
                    ))} */}

                  </div>
                </Carousel.Item>
              ))}
            </Carousel>

          </Col>

          <Col lg={6} className="py-5 px-5"  style={{ backgroundColor: "#b5e550" }}>
            <h3>OUR PRESENCE IN MEDIA</h3>
            <h5 className="mt-4">An authored article in Informist Media</h5>
            <p className="date">June 7, 2023</p>
            <p className="author mb-1">Mahesh Patil</p>
            <p className="date mb-1">CIO of</p>
            <p className="date">Aditya Birla Sun Life AMC Ltd.</p>
          </Col>
          </div>
        {/* <Row className="g-4 align-items-center">
        
        </Row> */}
      {/* </Container> */}
    </section >
  );
};

export default MediaPresence;
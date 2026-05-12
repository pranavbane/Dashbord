import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const libCards = [
  {
    color: "card-orange",
    title: "Fixed Income Product Presentation\n(Key products)",
    icon: "fa-gear",
  },
  {
    color: "card-red",
    title: "Equity Product Presentation\n(Monthly product presentation)",
    icon: "fa-scale-balanced",
  },
  {
    color: "card-olive",
    title: "Treasury Connect\n(BSL Treasury connect)",
    icon: "fa-chart-column",
  },
  {
    color: "card-grey",
    title: "Product Update (product dashboard) - Equity",
    icon: "fa-desktop",
  },
  {
    color: "card-darkgrey",
    title: "Product Update (product dashboard) - Equity (Thematic and sectoral)",
    icon: "fa-chart-line",
  },
  {
    color: "card-maroon",
    title: "Product Update (product dashboard) - Fixed Income",
    icon: "fa-hourglass-half",
  },
  {
    color: "card-olive2",
    title: "Product Quants (MOD, YTM, AV Maturity)",
    icon: "fa-floppy-disk",
  },
];

const bookColors = [
  "#d62d2d",
  "#f2b233",
  "#9fb06d",
  "#666666",
  "#e08a9e",
  "#ea8c1f",
  "#bdbdbd",
  "#9fb06d",
  "#c8102e",
];

const CloudLibrary = () => {
  const topShelf = [
    { color: '#e74c3c', h: 60 }, { color: '#2ecc71', h: 40 }, { color: '#f39c12', h: 80 },
    { color: '#fff', h: 70, detail: true }, { color: '#c0392b', h: 90 }, { color: '#f1c40f', h: 50 },
    { color: '#7f8c8d', h: 65 }, { color: '#1abc9c', h: 55 }
  ];

  const bottomShelf = [
    { color: '#e67e22', h: 70 }, { color: '#34495e', h: 80 }, { color: '#ecf0f1', h: 60, detail: true },
    { color: '#16a085', h: 75 }, { color: '#bdc3c7', h: 65 }, { color: '#e74c3c', h: 85 }
  ];
}

const KnowledgeLibrary = () => {
  return (
    <section className="library-section" data-testid="knowledge-library">
      <Container fluid className="library-shell">
        <h3 className="section-heading">KNOWLEDGE LIBRARY</h3>

        <Row className="align-items-center g-4">
          <Col lg={7}>
            <div className="cards-grid">
              {libCards.map((c, i) => (
                <div
                  key={i}
                  className={`lib-card ${c.color}`}
                  data-testid={`lib-card-${i}`}
                >
                  <div className="card-text">
                    {c.title.split("\n").map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                  <i className={`lib-icon fa-solid ${c.icon}`}></i>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={5}>
            {/* <div className="library-illustration">
              <div className="cloud cloud-top">
                <div className="shelf shelf-top">
                  {bookColors.slice(0, 5).map((c, i) => (
                    <span
                      key={i}
                      className="book"
                      style={{
                        background: c,
                        height: `${40 + (i % 3) * 12}px`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="cloud cloud-bottom">
                <div className="shelf shelf-bottom">
                  {bookColors.slice(4).map((c, i) => (
                    <span
                      key={i}
                      className="book"
                      style={{
                        background: c,
                        height: `${46 + (i % 4) * 10}px`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="desk-line"></div>
              <div className="keyboard"></div>
              <div className="mouse"></div>
            </div> */}
            <svg width="600" height="500" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="500" fill="#bcbcbc" />

  <path d="M100 200 Q100 150 150 150 Q160 100 220 100 Q280 100 300 150 Q350 150 350 200 Q350 250 300 260 L150 260 Q100 250 100 200" 
        fill="none" stroke="#a0a0a0" strokeWidth="12" strokeLinejoin="round" opacity="0.5"/>
  
  <path d="M100 200 Q100 150 150 150 Q160 100 220 100 Q280 100 300 150 Q350 150 350 200 Q350 250 300 260 L150 260 Q100 250 100 200" 
        fill="#ffffff" stroke="#e0e0e0" strokeWidth="2"/>

  <rect x="115" y="175" width="220" height="4" fill="#5d4037" />
  
  <g id="books-top">
    <rect x="120" y="155" width="30" height="4" fill="#4db6ac" rx="1"/>
    <rect x="118" y="159" width="34" height="4" fill="#fff" rx="1"/>
    <rect x="120" y="163" width="30" height="6" fill="#e57373" rx="1"/>
    <rect x="122" y="169" width="26" height="6" fill="#81c784" rx="1"/>
    
    <rect x="165" y="130" width="12" height="45" fill="#ffb74d" rx="1"/>
    <rect x="178" y="125" width="10" height="50" fill="#fff" rx="1"/>
    <rect x="189" y="115" width="14" height="60" fill="#c62828" rx="1"/>
    <rect x="205" y="135" width="12" height="40" fill="#ffb74d" rx="1"/>
    
    <rect x="240" y="140" width="10" height="35" fill="#90a4ae" rx="1"/>
    <rect x="260" y="145" width="35" height="4" fill="#4db6ac" rx="1"/>
    <rect x="258" y="149" width="39" height="5" fill="#e57373" rx="1"/>
    <rect x="260" y="154" width="35" height="4" fill="#fff" rx="1"/>
  </g>

  <rect x="115" y="245" width="220" height="4" fill="#5d4037" />
  
  <g id="books-bottom">
    <rect x="120" y="210" width="12" height="35" fill="#e57373" rx="1"/>
    <rect x="135" y="205" width="10" height="40" fill="#81c784" rx="1"/>
    <rect x="148" y="200" width="15" height="45" fill="#ffb74d" rx="1"/>
    <rect x="165" y="205" width="12" height="40" fill="#fff" rx="1"/>
    <rect x="180" y="210" width="10" height="35" fill="#90a4ae" rx="1"/>
    
    <rect x="205" y="208" width="12" height="40" fill="#fff" stroke="#555" strokeWidth="1" transform="rotate(15 210 245)"/>
    
    <rect x="235" y="205" width="12" height="40" fill="#ffb74d" rx="1"/>
    <rect x="250" y="200" width="15" height="45" fill="#009688" rx="1"/>
  </g>

  <path d="M240 260 V 290 Q 240 300 230 300 H 130 Q 120 300 120 310 Q 120 320 130 320 H 330 Q 340 320 340 330 Q 340 340 330 340 H 130 Q 120 340 120 350 Q 120 360 130 360 H 260 V 370" 
        fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>

  <rect x="115" y="375" width="180" height="80" rx="4" fill="#e0e0e0" stroke="#90a4ae" strokeWidth="2"/>
  <g fill="none" stroke="#90a4ae" strokeWidth="1" opacity="0.5">
    <path d="M125 390 H 285 M125 405 H 285 M125 420 H 285 M125 435 H 285"/>
    <path d="M140 375 V 455 M165 375 V 455 M190 375 V 455 M215 375 V 455 M240 375 V 455 M265 375 V 455"/>
  </g>

  <g transform="translate(320, 350)">
    <path d="M-60 20 H -20 Q 10 20 10 0" fill="none" stroke="white" strokeWidth="3"/>
    <rect x="0" y="0" width="40" height="60" rx="15" fill="#e0e0e0" stroke="#90a4ae" strokeWidth="2"/>
    <line x1="20" y1="0" x2="20" y2="25" stroke="#90a4ae" strokeWidth="2"/>
  </g>
</svg>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default KnowledgeLibrary;
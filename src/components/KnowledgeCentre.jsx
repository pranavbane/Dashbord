
// import React from "react"
// import icon from "../assets/aditya_Birla_Group_Logo.png";
// import { Container } from "react-bootstrap";

// const KnowledgeCentre = () => {
//   return (
//     <section className="knowledge-banner" data-testid="knowledge-centre">
//       <Container>
//         <div className="kc-inner">
//           <div className="kc-logo-box bg-danger">
//             <div className="mark bg-danger">
//               <span style={{ color: "#c8102e" }} className="h1-logo mx-auto">
//                 {/* <span className="h1-logo mx-auto"> */}
//                   <img
//                     src={icon}
//                     alt="Aditya Birla Capital Logo"
//                   />
//                 {/* </span> */}
//               </span>
//             </div>
//             <div style={{ fontWeight: 800, color: "#ffffff", fontSize: 11, letterSpacing: 1 }}>
//               ADITYA BIRLA
//               <br />
//               CAPITAL
//             </div>
//             <hr/>
//             <small style={{ color: "#ffffff"}}>Aditya Birla Sun Life AMC Ltd.</small>
//           </div>
//           <div className="text-center text-md-start">
//             <h1 className="kc-title">
//               KNOWL<span style={{ color: "#fff" }}>EDGE</span>
//               <span className="arrow">↗</span>
//               <br />
//               CENTRE
//             </h1>
//           </div>
//           <div className="kc-sub">
//             INSIGHTS.
//             <br />
//             ANALYSIS.
//             <br />
//             EXPERT VIEWS.
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default KnowledgeCentre;

import React, { useEffect, useRef } from "react";
import icon from "../assets/aditya_Birla_Group_Logo.png";
import { Container } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const KnowledgeCentre = () => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // LEFT BOX → Left to Right
      gsap.from(logoRef.current, {
        x: -150,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      // TITLE → Right to Left
      gsap.from(titleRef.current, {
        x: 150,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="knowledge-banner"
      data-testid="knowledge-centre"
    >
      <Container fluid className="p-0">
        <div className="kc-inner">

          {/* LEFT LOGO BOX */}
          <div ref={logoRef} className="kc-logo-box bg-danger">
            <img
              src={icon}
              alt="Aditya Birla Capital Logo"
              className="kc-logo"
            />

            <div className="kc-logo-text text-white">
              ADITYA BIRLA
              <br />
              CAPITAL
            </div>

            <div className="kc-divider" />

            <small className="kc-subtext text-white">
              Aditya Birla Sun Life AMC Ltd.
            </small>
          </div>

          {/* RIGHT TITLE */}
          <div ref={titleRef} className="kc-title-wrap">
            <h1 className="kc-title">
              KNOWLEDGE
              <br />
              CENTRE
              <span className="kc-tagline">
                <div>INSIGHTS.</div>
                <div>ANALYSIS.</div>
                <div>EXPERT VIEWS.</div>
              </span>
            </h1>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default KnowledgeCentre;

import React from "react";

const MarketingBlog = () => {
    return (
        <section className="marketing-section" data-testid="marketing-blog">
            <div className="marketing-col">
                <h3>
                    MARKETING
                    <br />
                    COLLATERAL
                </h3>
                <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-left">
                    <rect width="200" height="200" fill="#606c55" />

                    <path d="M40 60 V 130 Q 40 145 55 145 H 100 V 155 H 80 V 165 H 140 V 155 H 120 V 145 H 165 Q 180 145 180 130 V 60"
                        fill="none" stroke="#f39c12" strokeWidth="4" strokeLinecap="round" />

                    <rect x="65" y="45" width="12" height="12" fill="#f39c12" />
                    <rect x="80" y="35" width="6" height="6" fill="#f39c12" opacity="0.8" />
                    <rect x="85" y="48" width="8" height="8" fill="#c3cfb6" />
                    <rect x="75" y="55" width="5" height="5" fill="#f39c12" />

                    <g transform="translate(65, 75)">
                        <path d="M0 5 Q 0 0 5 0 H 45 V 60 H 5 Q 0 60 0 55 Z" fill="white" />
                        <path d="M50 0 H 90 Q 95 0 95 5 V 55 Q 95 60 90 60 H 50 Z" fill="white" />
                        <line x1="47.5" y1="5" x2="47.5" y2="55" stroke="#606c55" strokeWidth="1" />
                    </g>

                    <g transform="translate(115, 100) rotate(-15)">
                        <path d="M0 30 
             V 60 Q 0 70 10 70 H 40 Q 50 70 50 60 
             V 35 Q 50 30 45 30 Q 40 30 40 35 
             V 30 Q 40 25 35 25 Q 30 25 30 30 
             V 25 Q 30 20 25 20 Q 20 20 20 25 
             V 10 Q 20 0 10 0 Q 0 0 0 10 Z"
                            fill="white" stroke="#4a5342" strokeWidth="2" />
                        <line x1="20" y1="30" x2="20" y2="45" stroke="#4a5342" strokeWidth="1" opacity="0.3" />
                        <line x1="30" y1="35" x2="30" y2="45" stroke="#4a5342" strokeWidth="1" opacity="0.3" />
                        <line x1="40" y1="40" x2="40" y2="45" stroke="#4a5342" strokeWidth="1" opacity="0.3" />
                    </g>
                </svg>

            </div>
            <div className="blog-col">
                <div className="blog-text">
                    <h3>BLOG</h3>
                    <button className="btn-watch" style={{ alignSelf: "flex-start" }}>READ MORE</button>
                </div>
                <div className="blog-img-wrap">
                    <img
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                        alt="Blog: Path to Financial Freedom"
                    />
                    <div className="blog-img-overlay">
                        <small>Path to Income</small>
                        <br />
                        <strong>The Right Way to<br />Financial Freedom</strong>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingBlog;
import React from "react";

const HeroSection = ({ contentList }) => {
  return (
    <main className="hero-section-container">
      {contentList.map((item) => (
        <main className="hero-section">
          <div className="hero-content">
              <div className="title">
                <h2>{item.title}</h2>
              </div>
              <div className="subTitle">
                <h4>{item.subTitle}</h4>
              </div>
              <div className="desc">
                <p>{item.desc}</p>
              </div>
          </div>
          <div className="hero-image-container">
            <img className="hero-image" src={item.image} alt="heroImage" />
          </div>
        </main>
      ))}
    </main>
  );
};

export default HeroSection;

import React, { useState } from "react";
import "./card.css";
import { motion } from "framer-motion";

const Card = ({ cardData, setIsPaused, handleSelectedVideo }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      />

      <motion.button
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: .4, type: "tween" }}
        style={{ background: "none", border: "none" }}
      >
        <div
          class="hero"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => {
            return handleSelectedVideo(cardData.video)}}
        >
          <div className="hero-profile-container">
  <img
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    className={isHover ? 'hero-profile-img-hover' : 'hero-profile-img'}
    src={cardData?.projectImage}
    alt=""
  />
  <div class="first hero-description-bk"></div>
  <div class="hero-logo">
    <img src="codingIcon.png" />
  </div>
  <div class="hero-description">
    <p>{cardData?.title}</p>
  </div>
  <div class="hero-btn">
    <a href="#">Learn More</a>
  </div>

  {isHover && (
    <div className="overlay">
      <div className="overlay-text">Click to play Video</div>
    </div>
  )}
</div>

        </div>
      </motion.button>
    </div>
  );
};

export default Card;

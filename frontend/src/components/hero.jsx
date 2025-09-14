import React from "react";
import "../css/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container text-center">
        <h2 className="hero-title">Share Your Perspective</h2>
        <p className="hero-subtitle">
          Discover stunning photos from photographers around the world. Share
          your honest reviews and let your voice be heard. Connect with a
          community that loves photography as much as you do. Explore, rate, and
          inspire others with your insights. Start sharing today and become part
          of the PicReview community.
        </p>
        <button className="hero-btn">Start Reviewing</button>
      </div>
    </section>
  );
}

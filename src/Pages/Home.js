

import React, { useState } from 'react';
import '../Styles/Home.css';
import foodImage from '../Images/food_beverage.png';
import backImage from '../Images/back_house.png';
import houseImage from '../Images/house_keeping.png';
import cleanerImage from '../Images/cleaner.png';

function Home() {
  const [showCleaner, setShowCleaner] = useState(false);
  return (
    <div className="home">

      {/* ===== Section-1 ===== */}

{/* ===== Section-1 ===== */}
<section className="section-1">
  <div className="section-1-overlay">

    <div className="section-1-grid">
      {/* Left - Company Description */}
      <div className="section-box left-box">
        <h2>Aldgate Recruitment</h2>
        <p>
          We connect top-tier hospitality talent with London’s finest hotels,
          restaurants, and events. Trusted by industry leaders for quality and speed.
        </p>
      </div>

      {/* Middle - Find Work */}
      <div className="section-box middle-box">
        <h3>Find Work</h3>
        <p>Join a team that values your skills. Apply now for flexible, high-quality hospitality jobs.</p>
        <button className="btn btn-yellow">Start Job Search</button>
      </div>

      {/* Right - Recruit Staff */}
      <div className="section-box right-box">
        <h3>Recruit Staff</h3>
        <p>Need top-tier, vetted hospitality professionals? We deliver the right talent, fast.</p>
        <button className="btn btn-light">Request Staff</button>
      </div>
    </div>

  </div>
</section>


{/* ===== Section-3 ===== */}
<section className="section-3">
  <h2 className="section-3-title">Departments</h2>

  <div
    className="department-grid drag-scroll"
    onMouseDown={(e) => {
      const slider = e.currentTarget;
      slider.isDown = true;
      slider.startX = e.pageX - slider.offsetLeft;
      slider.scrollLeft = slider.scrollLeft || 0;
      slider.classList.add('active');

      const onMouseMove = (moveEvent) => {
        if (!slider.isDown) return;
        moveEvent.preventDefault();
        const x = moveEvent.pageX - slider.offsetLeft;
        const walk = (x - slider.startX) * 1.2;
        slider.scrollLeft = slider.scrollLeft - walk;
      };

      const onMouseUp = () => {
        slider.isDown = false;
        slider.classList.remove('active');
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }}
  >
    <div className="card">
      <img src={foodImage} alt="Food & Beverage" />
      <h3>Food & Beverage</h3>
      <p>Food and Beverage manages and serves food and drinks to hotel guests or visitors.</p>
    </div>

    <div className="card">
      <img src={backImage} alt="Back of House" />
      <h3>Back of House</h3>
      <p>This includes kitchen, offices, storage, and hidden areas guests don’t usually see.</p>
    </div>

    <div className="card">
      <img src={houseImage} alt="Housekeeping" />
      <h3>Housekeeping</h3>
      <p>Manages cleaning, linen, and maintenance duties across the premises.</p>
    </div>

    <div className="card">
      <img src={cleanerImage} alt="Cleaner" />
      <h3>Cleaner</h3>
      <p>Ensures hygiene and neatness in all operational and guest-facing areas.</p>
    </div>
  </div>

  <button className="aldgate-btn">Work with Aldgate Recruitment</button>
</section>


      {/* ===== Meet Our Team ===== */}
      <section className="our-team">
        <h2>Meet Our Directors</h2>
        <div className="team-grid">
          <div className="member">Abu Naser - Director</div>
          <div className="member">Anjalee Fernandez - Director</div>
        </div>
      </section>

      {/* ===== Call To Action ===== */}
      <section className="call-to-action">
        <h2>Looking to Hire or Get Hired?</h2>
        <button>Contact Us</button>
      </section>

    </div>
  );
}

export default Home;

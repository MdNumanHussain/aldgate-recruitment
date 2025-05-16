

import React, { useState } from 'react';
import '../Styles/Home.css';
import foodImage from '../Images/food_beverage.png';
import backImage from '../Images/back_house.png';
import houseImage from '../Images/house_keeping.png';
import cleanerImage from '../Images/cleaner.png';

function Home() {
  const [showCleaner, setShowCleaner] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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

{/* ===== Section-2 ===== */}
<section className="section-2">
  <div className="section-2-content">
    <h2>Aldgate offers more than just recruitment</h2>
    <button className="section-2-btn">
      Learn more <span className="arrow">→</span>
    </button>
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

{/* ===== Section-4 ===== */}
<section className="section-4">
  <div className="section-4-container">
    {/* Left Buttons */}
    <div className="section-4-sidebar">
      {[
        "Why Choose Us",
        "What We Offer",
        "What We Cover",
        "What We Service",
        "Find Work",
        "Recruit Staff"
      ].map((item, index) => (
        <button
          key={index}
          className={`section-4-btn ${activeTab === index ? "active" : ""}`}
          onClick={() => setActiveTab(index)}
        >
          {item}
        </button>
      ))}
    </div>

    {/* Right Content */}
    <div className="section-4-content">
      {activeTab === 0 && (
        <div className="section-boxed">
          <img src={require("../Images/whyus.png")} alt="Why Us" />
          <h2>Why Choose Us</h2>
          <p>We build trusted partnerships through consistency, quality, and speed of service.</p>
          <ul>
            <li> Trusted by top hospitality groups</li>
            <li> Reliable staff on short notice</li>
            <li> Quality-focused recruitment</li>
            <li> Onboarding and support systems</li>
          </ul>
          <div className="section-buttons">
            <button className="section-act-btn yellow">Find Job</button>
            <button className="section-act-btn dark">Recruit Staff</button>
          </div>
        </div>
      )}

      {activeTab === 1 && (
        <div className="section-boxed">
          <img src={require("../Images/weoffer.png")} alt="We Offer" />
          <h2>What We Offer</h2>
          <p>We deliver staffing, training, and consultancy tailored for every venue type.</p>
          <ul>
            <li> Temporary and full-time placements</li>
            <li> Bespoke training services</li>
            <li> One-on-one client consultancy</li>
            <li> Flexible shift fulfillment</li>
          </ul>
        </div>
      )}

      {activeTab === 2 && (
        <div className="section-boxed">
          <img src={require("../Images/wecover.png")} alt="We Cover" />
          <h2>What We Cover</h2>
          <p>Roles we support across front-of-house and back-of-house operations:</p>
          <ul>
            <li> Waiters & Waitresses</li>
            <li> Banqueting Porters</li>
            <li> Public Area Cleaners</li>
            <li> Chefs & Stewards</li>
          </ul>
        </div>
      )}

      {activeTab === 3 && (
        <div className="section-boxed">
          <img src={require("../Images/whatweservice.png")} alt="We Service" />
          <h2>What We Service</h2>
          <p>Industries and environments we supply professional talent to:</p>
          <ul>
            <li> Luxury hotels and fine dining</li>
            <li> Private events & weddings</li>
            <li> Catering companies</li>
            <li> Chain restaurants and pubs</li>
          </ul>
        </div>
      )}

      {activeTab === 4 && (
        <div className="section-boxed">
          <img src={require("../Images/findjob.png")} alt="Find Work" />
          <h2>Find Work</h2>
          <p>Apply for roles that match your skills, flexibility, and goals. Start earning now.</p>
          <ul>
            <li> Flexible shifts and locations</li>
            <li> Instant shift notifications</li>
            <li> Weekly pay and fair rates</li>
            <li> Training and onboarding</li>
          </ul>
          <button className="section-act-btn yellow">Start Job Search</button>
        </div>
      )}

      {activeTab === 5 && (
        <div className="section-boxed">
          <img src={require("../Images/findstaff.png")} alt="Find Staff" />
          <h2>Recruit Staff</h2>
          <p>We connect you with experienced, vetted, and ready-to-work hospitality staff.</p>
          <ul>
            <li> Last-minute coverage</li>
            <li> On-demand support 24/7</li>
            <li> Chefs, servers, baristas, stewards</li>
            <li> Staff replacement guarantee</li>
          </ul>
          <button className="section-act-btn dark">Request Staff</button>
        </div>
      )}
    </div>
  </div>
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

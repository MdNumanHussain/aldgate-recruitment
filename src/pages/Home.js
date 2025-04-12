import React from "react";
import "../styles/Home.css"; // Import CSS
import recruitmentImage from "../images/recruitmentagency.png";
import logoWithBackground from "../images/logoqwithbackground.png";
import Lottie from "lottie-react";
import logo from "../images/logo.png";
import aboutUsAnimation from "../animations/aboutus.json";
import benefitsAnimation from "../animations/benefits.json";
import servicesAnimation from "../animations/services.json"; 
import departmentAnimation from "../animations/department.json";
const Home = () => {
  return (
    <div className="home">
      {/* About Us Section */}
      <section className="about-us-section">
     
        {/* Left Side - Text Content */}
        <div className="about-content">
          <h1 className="styled-heading">
            Connecting Employers & Job Seekers Seamlessly
          </h1>
          <p className="styled-paragraph">
            At <span className="highlight">Aldgate Recruitment</span>, we help
            businesses find top talent and assist job seekers in landing their
            ideal roles. Whether you're an <span className="highlight">employer</span> looking for reliable staff or a{" "}
            <span className="highlight">candidate</span> searching for your next opportunity, we’ve got you covered.
          </p>
          <div className="about-buttons">
            <button className="demo-button">Request a Demo</button>
            <button className="play-button">
              <i className="fa fa-play"></i> Watch Video
            </button>
          </div>
        </div>

        {/* Right Side - Lottie Animation */}
        
      </section>



      {/* Third Section */}
      <section className="third-section">
        <div className="third-container">
          <div className="third-content">
            <h2 className="third-title">Connecting Talent with Opportunities</h2>
            <p className="third-description">
              At Aldgate Recruitment, we bridge the gap between skilled professionals 
              and top-tier businesses. Whether you're seeking new career opportunities 
              or hiring top talent, we’ve got the expertise to support you.
            </p>
            <div className="third-buttons">
              <button className="work-button">Find Work</button>
              <button className="staff-button">Recruit Staff</button>
            </div>
            <div className="third-stats">
              <div className="stat-item">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-item">
                <h3>90%</h3>
                <p>Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="third-logo">
            <img src={logo} alt="Aldgate Recruitment" />
          </div>
          <div className="third-features">
            <div className="feature-card">
              <i className="fas fa-brain"></i>
              <h4 id="housekeeping">Housekeeping</h4>
              <p>Expert hiring strategies with AI-powered insights.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-shipping-fast"></i>
              <h4>Food & Bevarage</h4>
              <p>Quick hiring process with high-quality candidates.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-star"></i>
              <h4>Back of House</h4>
              <p>Industry-standard hiring methods and processes.</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-shield-alt"></i>
              <h4>Concierge</h4>
              <p>Connecting you with a verified talent pool.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
      <div className="benefits-content">
        {/* Left Side - Text Content */}
        <div className="benefits-text">
          <h2 className="benefits-title">Care Management & Proactive Care Platform</h2>
          <p className="benefits-description">
            Aldgate Recruitment helps businesses and organizations streamline their hiring 
            process. We provide end-to-end staffing solutions, ensuring you get the right 
            talent for your specific needs.
          </p>
          <button className="demo-button">Get a Demo <span>▼</span></button>
        </div>

        {/* Right Side - Lottie Animation */}
        <div className="benefits-animation">
          <Lottie animationData={benefitsAnimation} loop={true} autoplay={true} />
        </div>
      </div>

      {/* Stats Section */}
      <div className="benefits-stats">
        <div className="stat-card">
          <i className="fas fa-envelope"></i>
          <h3>3 million messages</h3>
          <p>Personalized and sent to job seekers</p>
        </div>

        <div className="stat-card">
          <i className="fas fa-clock"></i>
          <h3>5.1 million minutes</h3>
          <p>Of interviews conducted successfully</p>
        </div>

        <div className="stat-card">
          <i className="fas fa-briefcase"></i>
          <h3>20+ industries</h3>
          <p>Covered across multiple business sectors</p>
        </div>
      </div>
    </section>

      {/* Services Section */}
      <section className="services-section">
      <div className="services-container">
        {/* Left Side: Text & Stats */}
        <div className="services-text">
          <h2 className="services-title">Delivering Superior Preventative Care</h2>
          <p className="services-description">
            Aldgate Recruitment helps businesses hire top talent efficiently, ensuring 
            smooth recruitment processes and long-term success.
          </p>

          <div className="services-stats">
            <div className="stat-card">
              <i className="fas fa-clipboard-list"></i>
              <h3>80% Engagement Rate</h3>
              <p>Keeps businesses connected with high-quality professionals.</p>
            </div>

            <div className="stat-card">
              <i className="fas fa-heartbeat"></i>
              <h3>5% Decrease in Hiring Costs</h3>
              <p>Reduces recruitment costs while maintaining quality.</p>
            </div>

            <div className="stat-card">
              <i className="fas fa-chart-line"></i>
              <h3>6.5X Faster Hiring</h3>
              <p>Our AI-powered hiring platform accelerates talent acquisition.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Lottie Animation */}
        <div className="services-animation">
          <Lottie animationData={servicesAnimation} loop={true} autoplay={true} />
        </div>
      </div>
    </section>

    {/* Departments Section */}
<section className="departments-section">
  <div className="departments-container">
    {/* Left Side - Animated Illustration */}
    <div className="departments-animation">
      <Lottie animationData={departmentAnimation} loop={true} autoplay={true} />
    </div>

    {/* Right Side - Stats Section */}
    <div className="departments-stats">
      <div className="stat-card">
        <i className="fas fa-chart-line"></i>
        <h3>$45k</h3>
        <p>Revenue per month for every 1,000 employees placed</p>
      </div>

      <div className="stat-card">
        <i className="fas fa-hand-holding-usd"></i>
        <h3>$213k</h3>
        <p>Net profit per year for every 1,000 employees placed</p>
      </div>

      <div className="stat-card">
        <i className="fas fa-users"></i>
        <h3>500+ Candidates</h3>
        <p>Placed in leading industries monthly</p>
      </div>
    </div>
  </div>
</section>




      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2 className="cta-title">Ready to transform your business?</h2>
          <p className="cta-text">
            Join thousands of satisfied customers who have taken their projects to the next level.
            Start your journey today.
          </p>
          <button className="cta-button">
            Learn More About Us <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
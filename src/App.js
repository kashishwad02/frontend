import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <header className="hero" id="home">
        <div className="hero-content">
          <h1>Empower. Manage. Transform.</h1>
          <p>Helping NGOs streamline operations and create real impact.</p>
          <button className="cta-button" onClick={() => navigate("/get-started")}>
            Get Started
          </button>
        </div>
      </header>

      <section className="features" id="features">
        <h2>What We Offer</h2>
        <div className="feature-grid">
          <div className="card">
            <span>👥</span>
            <h3>Volunteer Management</h3>
            <p>Track and coordinate volunteers efficiently.</p>
          </div>
          <div className="card">
            <span>💰</span>
            <h3>Donation Tracking</h3>
            <p>Securely manage donations and transparency.</p>
          </div>
          <div className="card">
            <span>📅</span>
            <h3>Event Scheduling</h3>
            <p>Organize events and manage participation.</p>
          </div>
          <div className="card">
            <span>📊</span>
            <h3>Reports & Analytics</h3>
            <p>Make informed decisions with real-time data.</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          <strong>NGO Manager</strong> is a mission-driven platform created to empower grassroots organizations with the digital tools they need to drive social change. From volunteer coordination to donation tracking and real-time analytics — we make NGO operations seamless and impactful.
        </p>
        <div className="mission-block">
          <img src="https://cdn-icons-png.flaticon.com/512/4285/4285600.png" alt="Mission Icon" />
          <div>
            <h3>Our Mission</h3>
            <p>
              To simplify, automate, and amplify the work of NGOs so they can focus on what truly matters — making the world a better place.
            </p>
          </div>
        </div>

        <h3>Why Choose Us?</h3>
        <div className="about-features">
          <div className="about-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1049/1049011.png" alt="Easy to Use" />
            <h4>Easy to Use</h4>
            <p>Our clean interface requires no tech background — just log in and go.</p>
          </div>
          <div className="about-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2920/2920334.png" alt="Secure" />
            <h4>Secure & Reliable</h4>
            <p>We prioritize your data and donor privacy using encrypted storage.</p>
          </div>
          <div className="about-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1792/1792865.png" alt="Support" />
            <h4>Ongoing Support</h4>
            <p>Our dedicated support team is always ready to help you grow.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Join 100+ NGOs Making a Difference</h2>
        <button className="cta-button" onClick={() => navigate("/get-started")}>Register Now</button>
      </section>
    </>
  );
}

function GetStarted() {
  const [formData, setFormData] = useState({
    ngoName: "",
    mission: "",
    email: "",
    contact: "",
    website: "",
    address: "",
    type: "Education",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`NGO Registered:\n\n${JSON.stringify(formData, null, 2)}`);
    // Add API integration here
  };

  return (
    <div className="form-page full-width">
      <h2>Register Your NGO</h2>
      <form onSubmit={handleSubmit} className="ngo-form">
        <input
          type="text"
          name="ngoName"
          placeholder="NGO Name"
          value={formData.ngoName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Contact Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="website"
          placeholder="Website (optional)"
          value={formData.website}
          onChange={handleChange}
        />
        <textarea
          name="mission"
          placeholder="NGO's Mission"
          value={formData.mission}
          onChange={handleChange}
          rows={4}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          required
        />
        <label>
          NGO Type:
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Environment">Environment</option>
            <option value="Women Empowerment">Women Empowerment</option>
            <option value="Animal Welfare">Animal Welfare</option>
            <option value="Disaster Relief">Disaster Relief</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <button type="submit" className="cta-button">Submit</button>
      </form>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <nav className="navbar">
        <div className="logo">🌱 NGO Manager</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="dark-toggle" onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>

      <footer className="footer" id="contact">
        <p>© 2025 NGO Manager. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="LinkedIn" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Instagram" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Facebook" /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;

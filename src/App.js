import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import doctorImg from "./images/doctor.jpg";
import deliveryImg from "./images/delivery.jpg";
import Donate from "./Donate";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="hero">
                  <h1>💊 Community Medicine Sharing</h1>
                  <p>Reducing medicine waste. Increasing access for all.</p>
                  <Link to="/donate" className="donate-button">🚑 Donate Medicine</Link>
                </header>

                <section className="images">
                  <img src={doctorImg} alt="Doctor" />
                  <img src={deliveryImg} alt="Delivery Person" />
                </section>

                <section className="about">
                  <h2>🌟 Why This Matters</h2>
                  <p>
                    Millions of people throw away good medicines every year while others struggle to afford them. 
                    This platform bridges that gap by allowing safe, peer-to-peer medicine sharing.
                  </p>
                </section>

                <section className="how-it-works">
                  <h2>⚙ How It Works</h2>

                  <div className="step">
                    <h3>📤 1. Upload Medicine Details</h3>
                    <p>Upload a photo and basic info. Clear packaging helps us scan expiry dates.</p>
                  </div>
                  <div className="step">
                    <h3>🕵️‍♀️ 2. Auto-Scan for Expiry</h3>
                    <p>We filter out expired meds for safety.</p>
                  </div>
                  <div className="step">
                    <h3>📍 3. Connect with Local Needs</h3>
                    <p>Nearby people or NGOs can request what they need.</p>
                  </div>
                  <div className="step">
                    <h3>🤝 4. Handoff & Delivery</h3>
                    <p>Coordinate exchange or drop at collection points.</p>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



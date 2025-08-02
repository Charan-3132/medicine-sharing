import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import doctorImg from "./images/doctor.jpg";
import deliveryImg from "./images/delivery.jpg";
import Donate from "./Donate";
import Contact from "./Contact";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="bg-gradient-to-b from-cyan-700 to-blue-500 text-white py-16 px-6 shadow-xl">
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-5xl font-extrabold mb-4">💊 Medicycle</h1>
    <p className="text-xl mb-6 font-light tracking-wide">
      Recycle Medicines. Revive Lives.
    </p>

    <p className="max-w-4xl mx-auto text-lg mb-10 leading-relaxed">
      Every year, over ₹10,000 crores worth of medicines are wasted in India alone — many of them still usable. Meanwhile, people in rural and urban slums die due to the unavailability of simple, affordable medicines. <strong>Medicycle</strong> is built to bridge this heartbreaking gap with technology and compassion.
    </p>

    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md text-left text-white shadow-md space-y-5 text-base leading-relaxed">
      <div>
        <h2 className="text-xl font-semibold mb-1">🧭 Our Mission</h2>
        <p>
          Medicycle is on a mission to minimize medical waste and maximize access. We empower people to donate unused, unexpired medicines to communities that need them — safely, quickly, and locally.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-1">💡 Core Features</h2>
        <ul className="list-disc list-inside space-y-1 ml-3">
          <li>📸 Upload medicine images with details</li>
          <li>📆 Auto-detect expiry dates using OCR</li>
          <li>📍 Match requests with local recipients</li>
          <li>🛵 Enable pickups, delivery, or drop-offs</li>
          <li>⚠️ Expiry & safety filters for verification</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-1">🧬 Who Can Use It?</h2>
        <p>
          Anyone with surplus or leftover medicines. Chronic illness patients, families post-recovery, pharmacies with unsold stock, health NGOs, and local clinics can all contribute or benefit.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-1">🚚 How It Works (Step-by-Step)</h2>
        <ol className="list-decimal list-inside space-y-1 ml-3">
          <li>Click “Donate Medicine” to start</li>
          <li>Upload clear photo(s) of the packaging</li>
          <li>Fill in medicine name, quantity, and expiry</li>
          <li>Our system checks safety and lists it</li>
          <li>Nearby users get notified and can request</li>
          <li>Coordinate pickup or drop at collection centers</li>
        </ol>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-1">🌍 Why This Matters</h2>
        <p>
          With Medicycle, we reduce pharmaceutical pollution, ease healthcare burden for low-income families, and promote a culture of sharing. One unused strip could be another person’s survival.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-1">🔐 Safety & Responsibility</h2>
        <ul className="list-disc list-inside space-y-1 ml-3">
          <li>No expired, opened, or damaged medicines allowed</li>
          <li>No narcotics or controlled substances accepted</li>
          <li>Basic checks are done before any listing goes live</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-1">🚀 Join the Movement</h2>
        <p>
          Be part of a circular healthcare revolution. Whether you’re donating or requesting, you’re making a difference. Let’s build a healthier, more sustainable community — together.
        </p>
      </div>
    </div>

    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
      <Link to="/donate" className="bg-white text-cyan-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
        🚑 Donate Medicine
      </Link>
      <Link to="/contact" className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-cyan-700 transition duration-300">
        📞 Contact Us
      </Link>
    </div>
  </div>
</header>



                <section className="flex justify-center gap-6 mt-6">
                  <img src={doctorImg} alt="Doctor" className="w-1/3 rounded shadow" />
                  <img src={deliveryImg} alt="Delivery Person" className="w-1/3 rounded shadow" />
                </section>

                <section className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">🌟 Why This Matters</h2>
                  <p>
                    Millions throw away usable medicines every year while others can't afford them.
                    This platform allows safe, peer-to-peer sharing of medicines in your community.
                  </p>
                </section>

                <section className="p-6 bg-gray-100 rounded">
                  <h2 className="text-2xl font-semibold mb-4">⚙ How It Works</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">📤 1. Upload Medicine Details</h3>
                      <p>Photo, name, expiry, and quantity.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">🕵️‍♀️ 2. Auto-Scan for Expiry</h3>
                      <p>We skip expired/unclear ones for safety.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">📍 3. Connect with Local Needs</h3>
                      <p>Nearby people or NGOs can request them.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">🤝 4. Handoff & Delivery</h3>
                      <p>Meet or drop at a collection point.</p>
                    </div>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



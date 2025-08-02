import React, { useState } from "react";
import "./Donate.css";

function Donate() {
  const [medicine, setMedicine] = useState("");
  const [expiry, setExpiry] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { medicine, expiry, quantity, image });
    alert("✅ Medicine submitted (prototype)");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="donate-form">
      <h2>🩺 Donate Medicine</h2>
      <form onSubmit={handleSubmit}>
        <label>Medicine Name</label>
        <input
          type="text"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
          required
        />

        <label>Expiry Date</label>
        <input
          type="date"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          required
        />

        <label>Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <label>Upload Medicine Photo</label>
        <input type="file" accept="image/*" onChange={handleImageChange} required />

        {preview && (
          <div className="preview">
            <p>📸 Preview:</p>
            <img src={preview} alt="Preview" />
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Donate;

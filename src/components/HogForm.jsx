import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);
  const [weight, setWeight] = useState("");
  const [medal, setMedal] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newHog = {
      name: name,
      specialty: specialty,
      greased: greased,
      weight: parseFloat(weight),
      "highest medal achieved": medal,
      image: image,
    };

    onAddHog(newHog);

    // Reset form
    setName("");
    setSpecialty("");
    setGreased(false);
    setWeight("");
    setMedal("");
    setImage("");
  }

  return (
    <div className="ui segment" style={{ margin: "20px" }}>
      <h2>Add a New Hog</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="specialty">Specialty</label>
          <input 
            type="text" 
            id="specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="weight">Weight</label>
          <input 
            type="number" 
            id="weight"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="medal">Highest Medal Achieved</label>
          <input 
            type="text" 
            id="medal"
            value={medal}
            onChange={(e) => setMedal(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="image">Image URL</label>
          <input 
            type="text" 
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <div className="ui checkbox">
            <input 
              type="checkbox" 
              id="greased"
              checked={greased}
              onChange={(e) => setGreased(e.target.checked)}
            />
            <label htmlFor="greased">Greased</label>
          </div>
        </div>

        <button type="submit" className="ui button primary">
          Add Hog
        </button>
      </form>
    </div>
  );
}

export default HogForm;

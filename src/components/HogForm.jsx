import React, { useState } from "react";

const HogForm = ({ addHog }) => {
    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        greased: false,
        weight: "",
        "highest medal achieved": "",
        image: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHog = {
            ...formData,
            weight: parseFloat(formData.weight)
        };
        addHog(newHog);
        setFormData({
            name: "",
            specialty: "",
            greased: false,
            weight: "",
            "highest medal achieved": "",
            image: ""
        });
    };

    return (
        <div className="ui segment">
            <h2>Add a New Hog</h2>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        type="text"
                        id="specialty"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="weight">Weight:</label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        step="0.1"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="highest-medal">Highest Medal Achieved:</label>
                    <input
                        type="text"
                        id="highest-medal"
                        name="highest medal achieved"
                        value={formData["highest medal achieved"]}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="field">
                    <input
                        type="checkbox"
                        id="greased-input"
                        name="greased"
                        checked={formData.greased}
                        onChange={handleChange}
                    />
                    <label htmlFor="greased-input">Greased?</label>
                </div>
                <button className="ui button" type="submit">Add Hog</button>
            </form>
        </div>
    );
};

export default HogForm;

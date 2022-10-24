import React from "react";

function SetName({ formData, setFormData }) {
    return (
        <div className="name-container">
        <div className="note">
            <p>Como você se chama?</p>
        </div>
        <input
            type="text"
            placeholder="Primeiro Nome..."
            value={formData.firstName}
            onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
            }}
        />
        <input
            type="text"
            placeholder="Sobrenome..."
            value={formData.lastName}
            onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
            }}
        />
        </div>
    );
}

export default SetName;

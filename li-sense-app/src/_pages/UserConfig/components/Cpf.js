import React from "react";

function SetCPF({ formData, setFormData }) {
    return (
    <div className="cpf-container">
        <div className="note">
        <p>A LI-SENSE utilizará seu CPF/CNPJ durante a etapa de confirmação.</p>
    </div>
    <input
        type="text"
        placeholder="CPF..."
        value={formData.cpf}
        onChange={(event) =>
        setFormData({ ...formData, cpf: event.target.value })
        }
    />
    </div>
    );
}

export default SetCPF;

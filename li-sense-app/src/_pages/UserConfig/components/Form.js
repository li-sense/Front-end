import React, { useState } from "react";
import SetName from "./Name";
import SetCPF from "./Cpf";

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        cpf: "",
        firstName: "",
        lastName: "",
    });

    const FormTitles = ["Informe seu CPF\\CNPJ", "Insira seu nome"];

    const PageDisplay = () => {
        if (page === 0) {
        return <SetCPF formData={formData} setFormData={setFormData} />;
        } else {
        return <SetName formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <div className="form">
        <div className="progressbar">
            <div style={{ width: page === 0 ? "50%" : "100%" }}></div>
        </div>
        <div className="form-container">
            <div className="header">
            <h1>{FormTitles[page]}</h1>
            </div>
            <div className="body">{PageDisplay()}</div>
            <div className="footer">
            <button
                disabled={page == 0}
                onClick={() => {
                setPage((currPage) => currPage - 1);
                }}
            >
                Voltar
            </button>

            <button
                onClick={() => {
                if (page === FormTitles.length - 1) {
                    alert("FORMULÁRIO ENVIADO");
                    console.log(formData);
                } else {
                    setPage((currPage) => currPage + 1);
                }
                }}
            >
                {page === FormTitles.length - 1 ? "Enviar" : "Próximo"}
            </button>
            </div>
        </div>
        </div>
    );
}

export default Form;

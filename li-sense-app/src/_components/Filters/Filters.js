import React from "react";
import "./Filter.css";

export default function Filters() {
  const options = ["Categorias", "Promoções", "Legislação"];
  // Livro
  // Musica

  return (
    <>
      <div className="flex w-full items-center justify-center">
        {options.map((_value, key) => (
          <button key={key} className="ml-2 filter rounded-full">
            {_value}
          </button>
        ))}
      </div>
    </>
  );
}

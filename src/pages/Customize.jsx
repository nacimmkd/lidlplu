import './Customize.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fruits, legumes, pain } from '../data/Produits.js';

function Customize() {
  const [selected, setSelected] = useState(["Fruits", "Légumes", "Pains"]);
  const navigate = useNavigate();


  const handleSelection = (category) => {
    setSelected((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };


  const getSelectedProducts = () => {
    let selectedProducts = [];
    if (selected.includes("Fruits")) selectedProducts = [...selectedProducts, ...fruits];
    if (selected.includes("Légumes")) selectedProducts = [...selectedProducts, ...legumes];
    if (selected.includes("Pains")) selectedProducts = [...selectedProducts, ...pain];
    return selectedProducts;
  };

 
  const handleValidate = () => {
    const selectedProducts = getSelectedProducts();
    if (selectedProducts.length === 0) {
      alert("Veuillez choisir une option.")
      return
    } else {
      navigate('/pluapp', { state: { selectedProducts } }); 
    }
  };

  
  const handleBack = () => {
    navigate('/'); 
  };

  return (
    <div className="customize-container">
      <div className="customize-card">
        <h2 className="customize-title">Choisissez vos catégories :</h2>
        <div className="customize-checkboxes">
          {["Fruits", "Légumes", "Pains"].map((category) => (
            <label key={category} className="customize-label">
              <input
                type="checkbox"
                checked={selected.includes(category)}
                onChange={() => handleSelection(category)}
              />
              <span className="custom-checkbox"></span>
              {category}
            </label>
          ))}
        </div>
      </div>

      <div className="customize-buttons">
        <button className="customize-button" onClick={handleValidate}>
          Valider
        </button>
        <button className="customize-button revenir" onClick={handleBack}>
          Revenir
        </button>
      </div>
    </div>
  );
}

export default Customize;

import './PluQuiz.css';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Clavier from './Clavier';
import Produit from './Produit';
import Header from './Header';

function PluQuiz({affichePlu}) {

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.selectedProducts || []; 

  const [produits, setProduits] = useState(data)
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);; 
  const [produitActual, setProduitActual] = useState(null);
  const [maxQuestions] = useState(Math.min(10,data.length));
  const [isCorrect, setIsCorrect] = useState(null);
  

  // Sound Effect
  const playSound = (type) => {
    const audio = new Audio(type ? '/sounds/correct.mp3' : '/sounds/incorrect.mp3');
    audio.play();
  };


  const getProduit = () => {
    if (produits.length === 0 || progress === maxQuestions) return;

    const randomIndex = Math.floor(Math.random() * produits.length);
    const newProduit = produits[randomIndex];
    const newProduits = produits.filter(p => p.plu !== newProduit.plu);


    setProduits(newProduits);
    setProduitActual(newProduit);
    setIsCorrect(null);
  };

  
  // Initialisera avec un premier produit
  useEffect(() => {
    if (data.length > 0) {
      getProduit();
    }
  }, [data]);


  useEffect(() => {
    if (progress === maxQuestions) {
      navigate('/score', { state: { score, totalProduits: maxQuestions } });
    }
  }, [progress, score, navigate]);



  const handleUserInput = (dataInput) => {
    if (!produitActual) return;

    if (produitActual.plu == dataInput) {
      setScore(prev => prev + 1);
      setIsCorrect(true);
      playSound(true);
    } else {
      setIsCorrect(false);
      playSound(false);
    }

    setTimeout(() => {
      setProgress(prev => prev + 1);
      getProduit(); // Changer de produit
    }, 500);
  };



  return (
    <div className="PluQuiz">
      <Header progress={progress} totalProduits={maxQuestions} />
      {produitActual && produitActual.nom && (
        <Produit key={produitActual.plu} produit={produitActual} isCorrect={isCorrect} affichePlu={affichePlu}/>
      )}
      <Clavier handleUserInput={handleUserInput} score={score} totalProduits={maxQuestions} />
    </div>
  );
}

export default PluQuiz;

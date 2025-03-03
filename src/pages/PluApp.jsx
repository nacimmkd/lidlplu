import './PluApp.css';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Clavier from '../components/Clavier';
import Produit from '../components/Produit';
import Header from '../components/Header';
import data from '../data/Produits';

function PluApp() {
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [produits, setProduits] = useState([...data]);
  const [produitActual, setProduitActual] = useState(null);
  const [isCorrect , setIsCorrect] = useState(null);
  const navigate = useNavigate(); 

  const playSound = (type) => {
    const audio = new Audio(type === true ? '/sounds/correct.mp3' : '/sounds/incorrect.mp3');
    audio.play();
  };

  const getProduit = () => {
    if (progress === data.length) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * produits.length);
    const newProduit = produits[randomIndex];
    const newProduits = produits.filter(p => p.plu !== newProduit.plu);

    setProduits(newProduits);
    setProduitActual(newProduit);
    setIsCorrect(null);
  };


  useEffect(() => {
    getProduit();
  }, []); // pour initialiser produitActual avec un premier produit


  useEffect(() => {
    // Quand progress atteint le nombre total de produits, on redirige
    if (progress === data.length) {
      navigate('/scorepage', { state: { score : score, totalProduits: data.length } });
    }
  }, [progress, score, navigate]);


  const handleUserInput = (dataInput) => {
    if (!produitActual) return; 

    if (produitActual.plu == dataInput) {
      setScore(prev => prev + 1);
      setIsCorrect(true);
      playSound(true);
    }else {
      setIsCorrect(false);
      playSound(false);
    }

    setTimeout( () => {
      setProgress(prev => prev + 1);
      getProduit(); // changer de produit 
    },500)
  };

  return (
    <div className="PluApp">
      <Header progress={progress} totalProduits={data.length} />
      {produitActual && produitActual.nom && (
        <Produit key={produitActual.plu} image={produitActual.image} nom={produitActual.nom} isCorrect={isCorrect} />
      )}
      <Clavier handleUserInput={handleUserInput} score={score} totalProduits={data.length}/>
    </div>
  );
}

export default PluApp;

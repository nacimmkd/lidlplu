import './Score.css' 
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react';

export default function () {

    const location = useLocation();
    const {score , totalProduits } = location.state || {score : 0 , totalProduits : 0}
    const isSuccess = score === totalProduits && score > 0;

    const playSound = () => {
        const audio = new Audio(
            isSuccess ? '/sounds/success.mp3'
            : '/sounds/gameover.mp3'
        );
        audio.play();
    };

    useEffect( () => {
        playSound();
    }, [])

    return (
        <div className="continer">
            <div className={`score-container ${isSuccess ? 'success' : 'failure'}`}>
                <h1 id='score'>{score}</h1>
                <h1 id='totalQuestions'>{totalProduits}</h1>
                <br />
                {score === totalProduits && score > 0 ? <h1 id='bon'>Félicitations 🎉🏆</h1> : <h1 id='pasbon'>Dommage 😔 <br/> Essaie encore ! 💪</h1> }
            </div>
            <Link to="/">Recommencer</Link>
        </div>
    )
}
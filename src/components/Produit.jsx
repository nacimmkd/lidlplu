import './Produit.css';
import correctIcon from '/imagesApp/vrai.png';   
import incorrectIcon from '/imagesApp/faux.png';

export default function Produit({ image, nom , isCorrect }) {



    return (
        <div className="container">
            <div className="image-container">
                <img src={image} alt={nom} />
                {isCorrect === true && <img className="validation-icon" src={correctIcon} alt="Correct" />}
                {isCorrect === false && <img className="validation-icon" src={incorrectIcon} alt="Incorrect" />}
            </div>
            <div className="product-name">
                <p>{nom}</p>
            </div>
        </div>
    );
}

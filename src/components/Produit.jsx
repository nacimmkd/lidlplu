import './Produit.css';
import correctIcon from '/imagesApp/vrai.png';   
import incorrectIcon from '/imagesApp/faux.png';

export default function Produit({ produit , isCorrect , affichePlu}) {

    return (
        <div className="container">
            <div className="image-container">
                <img src={produit.image} alt={produit.nom} />
                {isCorrect === true && <img className="validation-icon" src={correctIcon} alt="Correct" />}
                {isCorrect === false && <img className="validation-icon" src={incorrectIcon} alt="Incorrect" />}
            </div>
            <div className="product-name">
                <p>{produit.nom}</p> 
                {affichePlu ? <p className='plu'>PLU : {produit.plu}</p> : null}
            </div>
        </div>
    );
}

import './SavoirPlus.css' 
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div className="savoirplus">
            <div className="continer">
                <p>Je m'appelle Nacim, étudiant à l'Université Sorbonne
                Paris Nord et équipier polyvalent chez Lidl. J'ai développé 
                l'application Lidl PLU dans le but d'aider les nouveaux 
                arrivants à apprendre et mémoriser facilement les codes PLUs 
                des produits. Grâce à cette application intuitive et pratique, 
                chacun peut s'entraîner et améliorer sa rapidité et sa fiabilité 
                en caisse. Mon objectif est de rendre l'apprentissage des codes 
                PLU plus accessible et efficace pour tous les équipiers Lidl.</p>
            </div>
            <Link className='close' to='/'>Fermer</Link>
        </div>
    )
}
import './SavoirPlus.css' 
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div className="savoirplus">
            <div className="continer">
                <p>Je m'appelle <span>Nacim</span>, étudiant à <span>l'Université Sorbonne
                Paris Nord</span> et équipier polyvalent chez <span>Lidl</span>. J'ai développé 
                l'application <span>Lidl PLU</span> dans le but d'aider les nouveaux 
                arrivants à apprendre et mémoriser facilement les <span>codes PLUs </span>
                des produits. Grâce à cette application intuitive et pratique, 
                chacun peut s'entraîner et améliorer sa fiabilité 
                en caisse. L'objectif de l'application est de rendre l'apprentissage des codes 
                PLUs plus accessible et efficace pour tous les équipiers <span>Lidl</span>.</p>
            </div>
            <Link className='close' to='/'>Fermer</Link>
        </div>
    )
}
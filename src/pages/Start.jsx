import './Start.css' 
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div className="start">
            <div className="elements">
                <Link className='commencer element' to="/pluapp">Commencer</Link>
                <Link className='savoir element' to="/savoirplus">En Savoir Plus</Link>
            </div>
        </div>
    )
}
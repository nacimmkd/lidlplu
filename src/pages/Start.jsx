import './Start.css' 
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div className="startpage">
            <div className="elements-continer">
                <Link className='commencer element' to="/customize">Commencer</Link>
                <Link className='savoir element' to="/savoirplus">En Savoir Plus</Link>
            </div>
        </div>
    )
}
import './Start.css' 
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div className="start">
            <div className="elements">
                <Link className='commancer' to="/pluapp">Commancer</Link>
                <Link className='savoir' to="/savoirplus">En Savoir Plus</Link>
            </div>
        </div>
    )
}
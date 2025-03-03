import './Start.css' 
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div className="start">
            <div className="elements">
                <Link to="/plu">Commancer</Link>
            </div>
        </div>
    )
}
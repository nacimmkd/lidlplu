import './Start.css' 
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div className="startpage">
            <div className="elements-continer">
                <Link className='commencer element' to="/customize" state={{ from : "tester"}}> Se Tester</Link>
                <Link className='element' to="/customize" state={{ from : "apprendre"}}>Apprendre</Link>
                <Link className='element' to="/savoirplus">En Savoir Plus</Link>
            </div>
        </div>
    )
}
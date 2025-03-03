import './Header.css'

export default function Header({progress , totalProduits}) {
    
    const value = Math.floor(progress / totalProduits) ;
    
    return (
        <div className='header'>
            <progress id="progress" value={progress} max={totalProduits}/>
        </div>
    )
}
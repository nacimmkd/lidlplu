import './Clavier.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Clavier({handleUserInput , score , totalProduits}) {

    const [input , setInput] = useState("");
    const navigate = useNavigate();

    const handleBtnClick = (value) => {
        setInput( prev => prev + value)
    }

    const handleClear = () => {
        setInput(""); // par la suite je vais changer au nom de produit
    }

    const handlePluClick = () => {
        if (input === "") {return}
        handleUserInput(input);
        setInput("");
    }

    const handleTotalClick = () => {
        navigate('/scorepage', { state: { score, totalProduits } });
    }


    return (
        <>
        <div className="clavier">
            <input type="text" value={input} disabled/>
            <div className="clavier-continer">
                <div className="chiffres-continer">

                    <button onClick={() => handleBtnClick("1")}>1</button>
                    <button onClick={() => handleBtnClick("2")}>2</button>
                    <button onClick={() => handleBtnClick("3")}>3</button>

                    <button onClick={() => handleBtnClick("4")}>4</button>
                    <button onClick={() => handleBtnClick("5")}>5</button>
                    <button onClick={() => handleBtnClick("6")}>6</button>

                    <button onClick={() => handleBtnClick("7")}>7</button>
                    <button onClick={() => handleBtnClick("8")}>8</button>
                    <button onClick={() => handleBtnClick("9")}>9</button>

                    <button onClick={() => handleBtnClick("0")}>0</button>
                    <button onClick={() => handleBtnClick("00")}>00</button>

                    <button className='btn-clear' onClick={() => handleClear()}>C</button>

                </div>
                <div className="btn-func-continer">
                    <button className='btn-plu' onClick={ handlePluClick }>PLU</button>
                    <button className='btn-total' onClick={ handleTotalClick }>Total</button>
                </div>
            </div>
        </div>
        </>
    )
}
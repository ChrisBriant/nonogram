import { useContext } from "react";
import {Context as NonogramContext} from '../context/NonogramContext';

const MainDisplay = () => {
    const {state:{nonogram}} = useContext(NonogramContext);

    return (
        <div id="mainDisplay">
            <h1 className="centerText">Nonogram</h1>
            <div className="mainDisplayTextContainer">
                <p className="centerText"><strong>Find as many word combinations as possible from the letters below!</strong></p>
                <p>Rules:</p>
            </div>
            <ul>
                <li>Words must contain letters from the 9 letters displayed on the screen.</li>
                <li>Letters must not be repeated, unless you have two or more instances of the same letter in the nine letter nonogram.</li>
            </ul>
            {
                <div className="nonogramContainer">
                {
                    <div className="letterGrid">
                    {
                        nonogram.word.split('').map((letter,i) => (
                            <div key={i} className={ i==4 ? "letterItem specialLetter" : "letterItem" }>
                                {letter}
                            </div>
                        ))
                    }
                    </div>  
                }
                </div>
            }
        </div>
    )
}

export default MainDisplay;
import { useContext } from "react";
import {Context as NonogramContext} from '../context/NonogramContext';

const MainDisplay = () => {
    const {setShowRules, state:{nonogram}} = useContext(NonogramContext);

    const openRulesAction = () => {
        setShowRules(true);
    }

    return (
        <div id="mainDisplay">
            <h1 className="centerText">Nonogram</h1>
            <div className="mainDisplayTextContainer">
                <p className="centerText"><strong>Find as many word combinations as possible from the letters below!</strong></p>
                <p className="centerText"><strong>Rules: </strong>Click <span className="openRulesLink" onClick={openRulesAction}>here</span> to view the rules.</p>
            </div>
            {
                <div className="nonogramContainer">
                {
                    <div className="letterGrid">
                    {
                        nonogram.word.split('').map((letter,i) => (
                            <div key={i} className={ i===4 ? "letterItem specialLetter" : "letterItem" }>
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
import {useContext} from 'react';
import {Context as NonogramContext} from '../context/NonogramContext';


const RulesDialog = () => {
    const {setShowRules, state:{showRules}} = useContext(NonogramContext);

    const cancelAction = () => {
        setShowRules(false);
    }

    return (
        <>
            {
                showRules
                ? <div className="modalBg">
                    <div className="modal rulesModal">
                        <div className="rulesArea">
                            <div>
                                <h3>Rules</h3>
                                <ol>
                                    <li>Words must contain letters from the 9 letters displayed on the screen.</li>
                                    <li>Letters must not be repeated, unless you have two or more instances of the same letter in the nine letter nonogram.</li>
                                </ol>
                            </div>
                            <div>
                                <h3>Scoring</h3>
                                <ol>
                                    <li>Words must have 3 or more letters</li>
                                    <li>One point for letter</li>
                                    <li>If the word contains the special character it is worth double.</li>
                                    <li>Nine letter words score 150</li>
                                </ol>
                            </div>
                        </div>
                        <div className='buttonBar'>
                            <button onClick={cancelAction}>Close</button>
                        </div>
                    </div>
                </div>
                : null
            }

        </>
    )
}

export default RulesDialog;
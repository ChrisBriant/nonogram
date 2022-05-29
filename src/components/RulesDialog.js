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
                        <h3>Rules</h3>
                        <ul>
                            <li>Words must contain letters from the 9 letters displayed on the screen.</li>
                            <li>Letters must not be repeated, unless you have two or more instances of the same letter in the nine letter nonogram.</li>
                        </ul>
                        <div className='buttonBar'>
                            <button onClick={cancelAction}>Cancel</button>
                        </div>
                    </div>
                </div>
                : null
            }

        </>
    )
}

export default RulesDialog;
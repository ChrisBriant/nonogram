import {useContext} from 'react';
import {Context as NonogramContext} from '../context/NonogramContext';

const Results = () => {
    //const {state:{words,nonogram}} = useContext(NonogramContext);
    //console.log('NONO', nonogram);

    return (
        <>
            <h3 className="centerText">Score</h3>
            <div className="gap10"></div>
            <div className="resultsContainer">

            </div>
            <div className="scoreButtonContainer">
                <button>Start Again</button>
            </div>
        </>
    )
}

export default Results;
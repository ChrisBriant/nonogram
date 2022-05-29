import {useContext} from 'react';
import {Context as NonogramContext} from '../context/NonogramContext';
import LetterWordDisplay from './LetterWordDisplay';

const Results = () => {
    const {state:{results,nonogram}} = useContext(NonogramContext);

    const startAgainAction = () => {
        //Just refresh the page to reload a new nonogram
        window.location.href = '';
    }

    return (
        <>
            {
                results.result
                ? <>
                    <h3 className="centerText">Score</h3>
                    <div className="gap10"></div>
                    <p className="centerText"><strong>You scored {results.totalScore} out of {results.solution.totalScore}</strong></p>
                    <div className="resultsContainer">
                        <p><strong>Words Scored</strong></p>
                        <div className="gap10"></div>
                        <LetterWordDisplay letterCount={3} wordList={results.result['3letter'].scoredWords} specialLetter={nonogram.word[4]} score={results.result['3letter'].score}/>
                        <LetterWordDisplay letterCount={4} wordList={results.result['4letter'].scoredWords} specialLetter={nonogram.word[4]} score={results.result['4letter'].score}/>
                        <LetterWordDisplay letterCount={5} wordList={results.result['5letter'].scoredWords} specialLetter={nonogram.word[4]} score={results.result['5letter'].score}/>
                        <LetterWordDisplay letterCount={6} wordList={results.result['6letter'].scoredWords} specialLetter={nonogram.word[4]} score={results.result['6letter'].score}/>
                        <LetterWordDisplay letterCount={7} wordList={results.result['7letter'].scoredWords} specialLetter={nonogram.word[4]} score={results.result['7letter'].score}/>
                        <LetterWordDisplay letterCount={8} wordList={results.result['8letter'].scoredWords} specialLetter={nonogram.word[4]} score={results.result['8letter'].score}/>
                        <LetterWordDisplay letterCount={9} wordList={results.result['9letter'].scoredWords} specialLetter={nonogram.word[4]} score={results.result['9letter'].score}/>
                        <div className="gap10"></div>
                        <hr />
                        <div className="gap10"></div>
                        <p><strong>Solution</strong></p>
                        <div className="gap10"></div>
                        <LetterWordDisplay letterCount={3} wordList={results.solution.result['3letter'].scoredWords} specialLetter={nonogram.word[4]} score={results.solution.result['3letter'].score}/>
                        <LetterWordDisplay letterCount={4} wordList={results.solution.result['4letter'].scoredWords} specialLetter={nonogram.word[4]} score={results.solution.result['4letter'].score}/>
                        <LetterWordDisplay letterCount={5} wordList={results.solution.result['5letter'].scoredWords} specialLetter={nonogram.word[4]} score={results.solution.result['5letter'].score}/>
                        <LetterWordDisplay letterCount={6} wordList={results.solution.result['6letter'].scoredWords} specialLetter={nonogram.word[4]} score={results.solution.result['6letter'].score}/>
                        <LetterWordDisplay letterCount={7} wordList={results.solution.result['7letter'].scoredWords} specialLetter={nonogram.word[4]} score={results.solution.result['7letter'].score}/>
                        <LetterWordDisplay letterCount={8} wordList={results.solution.result['8letter'].scoredWords} specialLetter={nonogram.word[4]} score={results.solution.result['8letter'].score}/>
                        <LetterWordDisplay letterCount={9} wordList={results.solution.result['9letter'].scoredWords} specialLetter={nonogram.word[4]} score={results.solution.result['9letter'].score}/>
                    </div>
                    <div className="scoreButtonContainer">
                        <button onClick={startAgainAction}>Start Again</button>
                    </div>
                </>
                : <div>
                    <h3 className="centerText">An Error Occured</h3>
                    <div className="gap10"></div>
                    <p className="centerText">{results.message}</p>
                    <div className="gap10"></div>
                    <div className="scoreButtonContainer">
                        <button onClick={startAgainAction}>Start Again</button>
                    </div>
                </div>
                    
            }

        </>
    )
}

export default Results;
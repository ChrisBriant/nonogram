import {useContext,useState} from 'react';
import {Context as NonogramContext} from '../context/NonogramContext';

const WordsDisplay = () => {
    const {setShowModal,setNoWordsMessage,state:{words,noWordsMessage}} = useContext(NonogramContext);
    //const [noWordsMessage,setNoWordsMessage] = useState('');

    const confirmAction = () => {
        let wordList = [
            ...words['3Letter'],
            ...words['4Letter'],
            ...words['5Letter'],
            ...words['6Letter'],
            ...words['7Letter'],
            ...words['8Letter'],
            ...words['9Letter'],
        ];
        if(wordList.length > 0) {
            setShowModal(true);
        } else {
            setNoWordsMessage('You need to enter at least one word!');
        }
        
    }

    return (
        <>
            <h3 className="centerText">Your Words</h3>
            <div className="gap10"></div>
            <div className="resultsContainer">
                { noWordsMessage !== '' ? <p>{noWordsMessage}</p> : null }
                {
                    words['3Letter'].length > 0 
                    ? <div>
                        <div className="gap10"></div>
                        <p>3 Letter</p>
                        {
                            words['3Letter'].map((e,i)=> (
                                <span key={i}> {e} </span>
                            ))
                        }
                    </div>
                    : null
                }
                {
                    words['4Letter'].length > 0 
                    ? <div>
                        <div className="gap10"></div> 
                        <p>4 Letter</p>
                        {
                            words['4Letter'].map((e,i) => (
                                <span  key={i}> {e} </span>
                            ))
                        }
                    </div>
                    : null
                }
                {
                    words['5Letter'].length > 0 
                    ? <div> 
                        <div className="gap10"></div>
                        <p>5 Letter</p>
                        {
                            words['5Letter'].map((e,i)=> (
                                <span  key={i}> {e} </span>
                            ))
                        }
                    </div>
                    : null
                }
                {
                    words['6Letter'].length > 0 
                    ? <div> 
                        <div className="gap10"></div>
                        <p>6 Letter</p>
                        {
                            words['6Letter'].map((e,i)=> (
                                <span  key={i}> {e} </span>
                            ))
                        }
                    </div>
                    : null
                }
                {
                    words['7Letter'].length > 0 
                    ? <div> 
                        <div className="gap10"></div>
                        <p>7 Letter</p>
                        {
                            words['7Letter'].map((e,i)=> (
                                <span  key={i}> {e} </span>
                            ))
                        }
                    </div>
                    : null
                }
                {
                    words['8Letter'].length > 0 
                    ? <div> 
                        <div className="gap10"></div>
                        <p>8 Letter</p>
                        {
                            words['8Letter'].map((e,i)=> (
                                <span  key={i}> {e} </span>
                            ))
                        }
                    </div>
                    : null
                }
                {
                    words['9Letter'].length > 0 
                    ? <div> 
                        <div className="gap10"></div>
                        <p>9 Letter</p>
                        {
                            words['9Letter'].map((e,i)=> (
                                <span  key={i}> {e} </span>
                            ))
                        }
                    </div>
                    : null
                }
            </div>
            <div className="scoreButtonContainer">
                <button onClick={confirmAction}>Score</button>
            </div>
        </>
    )
}

export default WordsDisplay;
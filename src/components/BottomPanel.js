import {useState, useContext} from 'react';
import {Context as NonogramContext} from '../context/NonogramContext';
let timer;

const BottomPanel = () => {
    const [wordList, setWordList] = useState('');
    const {setWordMatches,state:{nonogram}} = useContext(NonogramContext);

    const scanText = (text,letterCount) => {
        let regEx =  new RegExp(`\\b\\w{${letterCount}}\\b`,'gm');
        let validWords = [];
        let matchedWords = text.match(regEx);

        if(matchedWords) {
            matchedWords.forEach(word => {
                let validWord = true;
                let possibleLetters = [...nonogram.word.split('')];
                word.split('').forEach(letter => {
                    let letterAtIndex = possibleLetters.indexOf(letter);
                    if(letterAtIndex === -1) {
                        validWord = false;
                    } else {
                        possibleLetters.splice(letterAtIndex,1);
                    }
                });
                if(validWord) {
                    validWords.push(word);
                }
            });
        }

        //Add the words to the store
        setWordMatches(validWords,letterCount);
    }

    const handleKeyPressed = (e) => {
        setWordList(e.target.value);
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            for(let i=3;i<10;i++) {
                scanText(e.target.value,i);
            }
        },1000);
    }

    return (
        <div id="bottomPanel">
            <h3>Enter words below seperated by spaces: </h3>
            <textarea onKeyDown={handleKeyPressed}></textarea>
        </div>
    )
}

export default BottomPanel;

import {useState, useContext} from 'react';
import {Context as NonogramContext} from '../context/NonogramContext';
let timer;

const BottomPanel = () => {
    const [wordList, setWordList] = useState('');
    const {state:{nonogram}} = useContext(NonogramContext);

    const scanText = (text,letterCount) => {
        console.log('matches',text.match(/\b\w{3}\b/gm));
        let regEx =  new RegExp(`\\b\\w{${letterCount}}\\b`,'gm');
        let validWords = [];
        let matchedWords = text.match(regEx);
        console.log(regEx.test(text), regEx);
        if(matchedWords) {
            matchedWords.forEach(word => {
                let validWord = true;
                word.split('').forEach(letter => {
                    if(!nonogram.word.includes(letter)) {
                        validWord = false;
                    }
                });
                if(validWord) {
                    validWords.push(word);
                }
            });
        }

        console.log(`${letterCount} words`, validWords);
        //Add the words to the store
    }

    const handleKeyPressed = (e) => {
        console.log('Key Pressed', e);
        setWordList(e.target.value);
        console.log('word list',wordList);
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            console.log('one second has passed');
            for(let i=3;i<10;i++) {
                scanText(e.target.value,i);
            }
        },1000);
    }

    return (
        <div id="bottomPanel">
            <h2>Enter words below seperated by spaces: </h2>
            <textarea onKeyDown={handleKeyPressed}></textarea>
        </div>
    )
}

export default BottomPanel;

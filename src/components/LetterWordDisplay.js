//Display the list of words for a given letter cound, e.g. all five letter words

const LetterWordDisplay = (props) => {
    const wordWithSpecial = (word) => {
        let formattedWord = '';
        word.split('').forEach((letter) => {
            if(letter==props.specialLetter) {
                formattedWord += `<span class="specialHighlight">${letter}</span>`;
            } else {
                formattedWord += letter;
            }
        });
        return formattedWord + ' ';
    }
    console.log('word list', props.wordList, props.letterCount, props.specialLetter);
    //wordWithSpecial(props.wordList[0])

    return(
        <div>
            {
                props.wordList.length > 0
                ? <> 
                    <p><strong>{props.letterCount} Letter</strong> <small>(Score: {props.score})</small></p>
                    {
                        props.wordList.map((word,i)=> (
                            <span key={i} dangerouslySetInnerHTML={{ __html: wordWithSpecial(word)}}></span>
                        ))
                    }
                </>
                : null
            }

        </div>
    );
}

export default LetterWordDisplay;
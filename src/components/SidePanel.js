import {useContext} from 'react';
import {Context as NonogramContext} from '../context/NonogramContext';

const SidePanel = () => {
    const {state:{words,nonogram}} = useContext(NonogramContext);
    console.log('NONO', nonogram);

    return (
        <div id="sidePanel">
            <h3 className="centerText">Your Words</h3>
            <div className="gap10"></div>
            <div className="resultsContainer">
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
                <button>Score</button>
            </div>
        </div>
    )
}

export default SidePanel;
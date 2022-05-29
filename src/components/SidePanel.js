import {useContext} from 'react';
import {Context as NonogramContext} from '../context/NonogramContext';

const SidePanel = () => {
    const {state:{words}} = useContext(NonogramContext);

    return (
        <div id="sidePanel">
            <h3 className="centerText">Your Words</h3>
            {
                words['3Letter'].length > 0 
                ? <div> 
                    <p>3 Letter</p>
                    {
                        words['3Letter'].map(e => (
                            <span> {e} </span>
                        ))
                    }
                  </div>
                : null
            }
            {
                words['4Letter'].length > 0 
                ? <div> 
                    <p>4 Letter</p>
                    {
                        words['4Letter'].map(e => (
                            <span> {e} </span>
                        ))
                    }
                  </div>
                : null
            }
            {
                words['5Letter'].length > 0 
                ? <div> 
                    <p>5 Letter</p>
                    {
                        words['5Letter'].map(e => (
                            <span> {e} </span>
                        ))
                    }
                  </div>
                : null
            }
            {
                words['6Letter'].length > 0 
                ? <div> 
                    <p>6 Letter</p>
                    {
                        words['6Letter'].map(e => (
                            <span> {e} </span>
                        ))
                    }
                  </div>
                : null
            }
            {
                words['7Letter'].length > 0 
                ? <div> 
                    <p>7 Letter</p>
                    {
                        words['7Letter'].map(e => (
                            <span> {e} </span>
                        ))
                    }
                  </div>
                : null
            }
            {
                words['8Letter'].length > 0 
                ? <div> 
                    <p>8 Letter</p>
                    {
                        words['8Letter'].map(e => (
                            <span> {e} </span>
                        ))
                    }
                  </div>
                : null
            }
            {
                words['9Letter'].length > 0 
                ? <div> 
                    <p>9 Letter</p>
                    {
                        words['9Letter'].map(e => (
                            <span> {e} </span>
                        ))
                    }
                  </div>
                : null
            }
        </div>
    )
}

export default SidePanel;
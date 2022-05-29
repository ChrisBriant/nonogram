import {useContext,useState} from 'react';
import {Context as NonogramContext} from '../context/NonogramContext';


const AreYouSure = () => {
    const {setShowModal,setLoading,getResults,state:{showModal,nonogram,words}} = useContext(NonogramContext);

    const cancelAction = () => {
        setShowModal(false);
    }

    const scoreAction = () => {
        let payload = {
            id : nonogram.id,
            word_list : [
                ...words['3Letter'],
                ...words['4Letter'],
                ...words['5Letter'],
                ...words['6Letter'],
                ...words['7Letter'],
                ...words['8Letter'],
                ...words['9Letter'],
            ],
            special : nonogram.word[4],
            word : nonogram.word,
        }
        setShowModal(false);
        setLoading(true);
        getResults(payload);
    }

    return (
        <>
            {
                showModal
                ? <div className="modalBg">
                    <div className="modal">
                        <p>Are you sure you want to score your word selections?</p>
                        <div className='buttonBar'>
                            <button onClick={scoreAction}>Yes</button>
                            <button onClick={cancelAction}>No</button>
                        </div>
                    </div>
                </div>
                : null
            }

        </>
    )
}

export default AreYouSure;
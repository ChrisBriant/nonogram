import {useContext,useState} from 'react';
import {Context as NonogramContext} from '../context/NonogramContext';


const AreYouSure = () => {
    const {setShowModal,setLoading,getResults,state:{showModal}} = useContext(NonogramContext);
    //const [loading,setLoading] = useState(false);

    console.log('Do i show the modal', showModal);

    const cancelAction = () => {
        console.log('I am cancelling');
        setShowModal(false);
    }

    const scoreAction = () => {
        console.log('Scoring will happen');
        setShowModal(false);
        setLoading(true);
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
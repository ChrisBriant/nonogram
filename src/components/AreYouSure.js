
const AreYouSure = (props) => {
    return (
        <div className="modalBg">
            <div className="modal">
                <p>{props.message}</p>
                <div className='buttonBar'>
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </div>
        </div>
    )
}

export default AreYouSure;
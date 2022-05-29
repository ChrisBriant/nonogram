import createDataContext from './createDataContext';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const defaultState = {
  nonogram: {word:''},
  words : {
    '3Letter' : [],
    '4Letter' : [],
    '5Letter' : [],
    '6Letter' : [],
    '7Letter' : [],
    '8Letter' : [],
    '9Letter' : [],
  },
  scored : false,
  showModal : false,
  loading: false,
  results : {},
  noWordsMessage : '',
};

const nonogramReducer = (state,action) => {
  switch(action.type) {
    case 'setNonogram':
        return {...state,nonogram:action.payload};
    case 'setWordMatches':
        let newWords = {...state.words};
        let uniqueMatches = action.payload.matches.filter((v, i, a) => a.indexOf(v) === i);
        newWords[`${action.payload.letterCount}Letter`] = uniqueMatches;
        return {...state,words:newWords};
    case 'setShowModal':
        return {...state,showModal:action.payload};
    case 'setLoading':
        return {...state,loading:action.payload};
    case 'getResults':
        return {...state,results:action.payload,scored:true,loading:false};
    case 'setNoWordsMessage':
        return {...state,noWordsMessage:action.payload};
    default:
      return defaultState;
  }
};

const setNonogram = (dispatch) => async () => {
    await fetch(`${BASE_URL}/api/getnonogram`, 
    {
        method: "GET",
        mode: 'cors',
        headers: { 
            "Content-Type": "application/json",
            'Authorization' : API_KEY,
        }
    }).then(res => {
        return res.json();
    }).then(data => {
        dispatch({type:'setNonogram', payload: data});
    })
    .catch(err => {
        console.log(err);
    });
}


const setWordMatches = (dispatch) => async (matches,letterCount) => {
    dispatch({type:'setWordMatches', payload: {matches,letterCount}});
}

const setShowModal = (dispatch) => async (show) => {
    dispatch({type:'setShowModal', payload: show});
}

const setLoading = (dispatch) => async (loading) => {
    dispatch({type:'setLoading', payload: loading});
}

const setNoWordsMessage = (dispatch) => async (message) => {
    dispatch({type:'setNoWordsMessage', payload: message});
}

const getResults = (dispatch) => async (payload) => {
    await fetch(`${BASE_URL}/api/scoreword/`, 
    {
        method: 'POST',
        mode: 'cors',
        headers: { 
            "Content-Type": "application/json",
            'Authorization' : API_KEY,
        },
        body: JSON.stringify(payload), 
    }).then(res => {
        return res.json();
    }).then(data => {
        dispatch({type:'getResults', payload: data});
    })
    .catch(err => {
        console.log(err);
    });
}

export const {Provider, Context} = createDataContext (
  nonogramReducer,
  { setNonogram, setWordMatches, setShowModal, setLoading, getResults, setNoWordsMessage },
  {...defaultState}
);

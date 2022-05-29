const BASE_URL = 'http://localhost:8000';
const API_KEY = '2S%&IH?N(lO9<:rO&w<?AenHg4dy.#0UE&z6J.2#t(TXQ6Mz2aE$E(d(PIpYgdO7AvEo8Hn<(Sj^OBJ.mMEu0XJC$K6j*AW8U^7kIc;QgEL*)@S)Wq2GFvVL6ZB6EGFD';



const getNonogram = async () => {
    await fetch(`${BASE_URL}/api/getnonogram`, 
    {
        method: "GET",
        mode: 'cors',
        headers: { 
            //'Access-Control-Allow-Origin' : '*',
            "Content-Type": "application/json",
            'Authorization' : API_KEY,
        }
    }).then(res => {
        return res.json();
    }).then(data => {
        return data;
    })
    .catch(err => {
        return null;
    });
}

export {getNonogram};
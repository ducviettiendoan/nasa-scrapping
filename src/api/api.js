import store from '../store';
const axios = require('axios');

export const fetchApod = () => {
    const data = axios.get(store.getState().pictures.urlGetApod);
    return data;
}



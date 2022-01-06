const axios = require('axios');

const urlGetApod = "https://api.nasa.gov/planetary/apod?start_date=2022-01-01&end_date=2022-01-05&api_key=kvNnQd5AKI44QXcEwD58x9xy7EnODFmnsCJScNk9";

export const fetchApod = () => {
    const data = axios.get(urlGetApod);
    return data;
}
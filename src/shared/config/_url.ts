const production = process.env.NODE_ENV === 'production';

const API_URL = production
    ? 'https://api.stalkomplect.ru/api/'
    : 'http://localhost:5000/api/';
const FILESERVER_URL = production
    ? 'https://api.stalkomplect.ru:8080/'
    : 'http://localhost:8080/';

export const _urlConfig = {
    API_URL,
    FILESERVER_URL,
};

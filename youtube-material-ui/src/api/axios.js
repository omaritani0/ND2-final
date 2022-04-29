import axios from 'axios';

export default axios.create({
    baseURL: 'https://nextdoor2-backend.herokuapp.com/api/'
});
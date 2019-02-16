import axios from 'axios';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 10,
        type: 'video',
        key : 'AIzaSyBYrcvLJtUOVoOzXKQfLj4cAVeqr4rWilM'
    },
    headers : {
        'Accept' : 'application/json'
    }
})
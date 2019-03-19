import axios from 'axios'

const youtubeSearch = axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params  : {
        part : 'snippet',
        maxResults : 20,
        type: 'video',
        key : 'API KEY' 
    },
    headers : {
        'Accept' : 'application/json'
    }
})

const youtubeVideo = axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params  : {
        part : 'snippet',
        maxResults : 20,
        key : 'API KEY' 
    },
    headers : {
        'Accept' : 'application/json'
    }
})

export { youtubeSearch , youtubeVideo } 
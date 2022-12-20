import axios from 'axios';

const instance = axios.create ({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        api_key: "ca96a6a6b1b061a113eeaa2667b95a13",
        language: "ko-KR",
    }
})  

export default instance;
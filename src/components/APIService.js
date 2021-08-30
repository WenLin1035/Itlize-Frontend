import axios from 'axios';

const USER_API_REST_URL = "http://localhost:8080/KoreraItlize/user/getuserbyid";
const SIGNIN = "http://localhost:8080/KoreraItlize/user/getalluser";

const jwt = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYW4iLCJyb2xlIjoiZGFuIiwiZXhwIjoxNjMwNDAwOTA3LCJpYXQiOjE2MzAzNjQ5MDd9.qdlCH7-qY2f4lPMdGL5xUoZPG-t3wsayryhamhhz8As';
const token = {
    headers: {
        Authorization: 'Bearer ' + jwt
    }
}

const token1 = {
    headers: {
        Authorization: 'Bearer ' + jwt
    }
}



class APIService {
    //gets all users after signing in
    SignIn() {
        return axios.get(SIGNIN, token)
    }
    getuser() {
        return axios.get(USER_API_REST_URL, token)
    }
    //get user by username but returns 400 error
    getToken() {
        axios.get(USER_API_REST_URL, {
            params: {
                username: "dan",
                password: "12344456"
            }
        }).then((res) => {
            console.log('Data of sign in: ', res);
            return res;
        }).catch((error) => {
            console.log('ERROR HAS OCCURED');
        })
    }
}
export default new APIService();
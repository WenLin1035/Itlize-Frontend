import axios from 'axios';

const USER_API_REST_URL = "http://localhost:8080/KoreraItlize/user/getuserbyid";
const SIGNIN = "http://localhost:8080/KoreraItlize/user/authenticate";


const jwt = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYW4iLCJyb2xlIjoiZGFuIiwiZXhwIjoxNjMwNDAzNzg3LCJpYXQiOjE2MzAzNjc3ODd9.8T1EvkO5KdzLHdb_1lwjcsrmIbz0CCZb9PtjBtcDzZw';
const token = {
    headers: {
        Authorization: 'Bearer ' + jwt
    }
}
var formdata = new FormData();
formdata.append("id", 3);

axios({
    method: 'post',
    url: USER_API_REST_URL,
    data: formdata,
    headers: {
        Authorization: 'Bearer ' + jwt,
        'Content-Type': 'multipart/form-data'
    }
})

const signin = JSON.stringify({ username: 'dan', password: '12344456' });



class APIService {
    //gets all users after signing in
    SignIn() {
        return axios.get(SIGNIN, token)
    }
    getuser() {
        return axios.post(USER_API_REST_URL, formdata, token)
    }
    //sign in gives error
    async getToken() {
        const test = await axios.post(SIGNIN, signin, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
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
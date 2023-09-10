import axios from "axios";

// create a url that contains a access token
const InstaRequest = axios.create({
    baseUrl:'https://instagram-express-app.vercel.app/api/auth',
    header:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})

export default InstaRequest;
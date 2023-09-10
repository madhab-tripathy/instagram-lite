import axios from "axios";

// create auth url 
const  instaAuth = axios.create({
    baseURL: "https://instagram-express-app.vercel.app/api/auth"
})

export default instaAuth;
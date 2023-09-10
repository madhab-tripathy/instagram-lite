import React,{useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import instaAuth from '../Utilities/InstaAuth';
import {Typography, TextField,Card, Container, Grid, Item, Box, CardContent, Button} from "@mui/material"
import useStyles from "../Styles";
import iphone from "../Image/PngItem_2998371.png"
import instaLogoText from "../Image/instalogo-text.png"
import TokenContext from '../Context/TokenContext';

const Signup = (()=>{   
    const classes = useStyles();
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",email:"",password:"",cpassword:""
    });
    let {name, email, password, cpassword} = user;
    let [error,setError] = useState();
    let [succcess,setSuccess] = useState();
    let {token, setToken} = useContext(TokenContext);
    console.log(token);
    function addUser(e){
        e.preventDefault();
        // checck mark
        if(!name || !email || !password || !cpassword){
            setError("All Fields are Mandatory");
            setSuccess("");
            return;
        }
        if(password !== cpassword){
            setError("Password miss match");
            setSuccess("");
            return;
        }
        instaAuth.post("/signup",{name,email,password})
        .then(response =>{
            setSuccess(response.data.message);
            // set token for context
            setToken(response.data.data.token);
            // console.log(response);
            localStorage.setItem('token',response.data.data.token)
            setError("");
            setTimeout(()=>{
                navigate('/login');
            },2000)
        })
        .catch(err =>{
            setError(err.response.data.message);
            console.log(err.response.data.message);
            setSuccess("");
        })

    }

    return(
        <div>
            <Container>
                <Grid container spacing={0} className={classes.loginBox} maxWidth="lg">
                    <Grid item className={classes.loginHero} sm={12} md={6}>
                        <img 
                            className={classes.imageBox}
                            src = {iphone}
                            alt = 'login avatar'
                        />
                    </Grid>
                    <Grid item className={classes.loginGrid} sm={12} md={4}>
                        <Grid item style={{display: 'flex', flexDirection: 'column', rowGap:'1rem'}}>
                            <Card className={classes.formCard}>
                                <CardContent className={classes.cardContent}>
                                    <Box className={classes.cardLogo}
                                        component= "img"
                                        src = {instaLogoText}
                                        alt = "logo text"
                                    />
                                    <form className="form-group" onSubmit={addUser}>
                                        <TextField
                                            id="outlined-username-input"
                                            label="Name"
                                            type="text"
                                            autoComplete="current-username"
                                            onChange={(e)=>{setUser({...user, name:e.target.value})}}
                                        />
                                        <TextField
                                            id="outlined-email-input"
                                            label="Email"
                                            type="email"
                                            autoComplete="current-email"
                                            onChange={(e)=>{setUser({...user,email:e.target.value})}}
                                        />
                                        <TextField
                                            id="outlined-password-input"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            onChange={(e)=>{setUser({...user,password:e.target.value})}}
                                        />
                                        <TextField
                                            id="outlined-password-input"
                                            label="Confirm Password"
                                            type="password"
                                            autoComplete="current-password"
                                            onChange={(e)=>{setUser({...user,cpassword:e.target.value})}}
                                        />
                                        <Button variant="contained" type="submit">Sign up</Button>
                                    </form>                                  
                                </CardContent>
                            </Card>
                            <Card className={classes.bottomCard} >
                                <p style={{display: 'flex', justifyContent: 'center', padding:"18px 0 !important"}}>Have an account?<span><Link className='link-style' to="/login">&nbsp; Login</Link></span></p>
                            </Card>
                            <Box className={classes.appAdvertise}>

                            </Box>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Container>  
        </div>
    )
});


export default Signup;
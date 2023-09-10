
import React,{useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {Typography, TextField,Card, Container, Grid, Item, Box, CardContent, Button} from "@mui/material"
import useStyles from "../Styles";
import instaAuth from '../Utilities/InstaAuth';
import iphone from "../Image/PngItem_2998371.png"
import instaLogoText from "../Image/instalogo-text.png"
import TokenContext from '../Context/TokenContext';

const Login = (()=>{   
    const classes = useStyles();
    let [user,setUser] = useState({
        email:"",password:""
    });
    const navigate = useNavigate();
    let [error,setError] = useState();
    let [success,setSuccess] = useState();
    let {token,setToken} = useContext(TokenContext);
    let {email,password} = user;
    
    function validateUser(e){
        e.preventDefault();
        if(!email || !password){
            setError('All fields are required');
            return;
        }
        if(!email.includes('@')){
            setError('Invalid email address');
            return;
        }
        
        instaAuth.post("/login",{email,password})
        .then(response =>{
            setToken(response.data.data.token)
            localStorage.setItem("token",response.data.data.token)
            setSuccess("Successfully login")
            setError("")
            setTimeout(() => {
            navigate("/dashboard") }, 2000);
        })
        .catch(error =>{
            setError(error.response.data.message);
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
                                {error && <Typography variant="h6" color="red">{error}</Typography>}
                                {success && <Typography variant="h6" color="#1976d2">{success}</Typography>}
                                    
                                    <Box className={classes.cardLogo}
                                        component= "img"
                                        src = {instaLogoText}
                                        alt = "logo text"
                                    />
                                    <form className="form-group" onSubmit={validateUser}>
                                        <TextField
                                            id="outlined-email-input"
                                            label="Email"
                                            type="Email"
                                            autoComplete="current-password"
                                            onChange={(e)=>{setUser({...user, email: e.target.value})}}
                                        />
                                        <TextField
                                            id="outlined-password-input"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            onChange={(e)=>{setUser({...user, password: e.target.value})}}
                                        />
                                        <Button variant="contained" type="submit">Login</Button>
                                        <div className="or-option-sec">
                                            <span className="or-option"></span>
                                            <span className='or-mid'>OR</span>
                                            <span className="or-option line2"></span>
                                        </div>
                                    </form>
                                    <small><a className='link-style' href="#">Forgot Password?</a></small>                                    
                                </CardContent>
                            </Card>
                            <Card className={classes.bottomCard} >
                                <p style={{display: 'flex', justifyContent: 'center', padding:"18px 0 !important"}}>Don't have an account?<span><Link className='link-style' to="/">&nbsp; Sign up</Link></span></p>
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

export default Login;
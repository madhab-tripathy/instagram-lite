
import React from 'react'
import {Typography, Card, Container, Grid, Item, Box, CardContent} from "@mui/material"
import useStyles from "../Styles";
import InstagramIcon from '@mui/icons-material/Instagram';

import image from "../Image/login-screen.jpg"
import instaLogoText from "../Image/instalogo-text.png"

const Login = (()=>{   
    const classes = useStyles();
    return(
        <div>
            <Container>
                <Grid container spacing={0} className={classes.loginBox} maxWidth="lg">
                    <Grid item className={classes.loginHero}>
                        <Box className={classes.imageBox}
                            component= "img"
                            src = {image}
                            alt = 'login avatar'
                        />
                    </Grid>
                    <Grid item className={classes.loginGrid}>
                        <Card className={classes.formCard}>
                            <CardContent className={classes.cardContent}>
                            <Box className={classes.cardLogo}
                                component= "img"
                                src = {instaLogoText}
                                alt = "logo text"
                            />

                            </CardContent>
                        </Card>
                        <Card className={classes.bottomCard}>

                        </Card>
                        <Box className={classes.appAdvertise}>

                        </Box>
                    </Grid>
                </Grid>
            </Container>  
        </div>
    )
});

export default Login;
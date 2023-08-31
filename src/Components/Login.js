
import React from 'react'
import {Typography, Card, Container, Grid, Item, Box, CardContent} from "@mui/material"
import useStyles from "../Styles";
import InstagramIcon from '@mui/icons-material/Instagram';

import iphone from "../Image/PngItem_2998371.png"
import instaLogoText from "../Image/instalogo-text.png"

const Login = (()=>{   
    const classes = useStyles();
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
                        <Grid item>
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
                </Grid>
            </Container>  
        </div>
    )
});

export default Login;
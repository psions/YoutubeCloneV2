import React from 'react';
import { Typography, AppBar,Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import {PhotoCamera} from '@mui/icons-material';
import { makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px',
    },
    buttons:{
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '200%',
        display: 'flex',
        flexDirection: 'column'
    },
    CardMedia: {
        paddingTop: '56.25%' //16:9

    },
    cardContent: {
        flexGrow: 1,
    },
    footer:{
        backgroundColor:theme.palette.background.paper,
        padding: '50px 0'
    }
}));


const cards= [1, 2, 3, 4]

const MatrialUi = () => {
    const classes = useStyles
    return ( 
        <>
            <CssBaseline />
            <AppBar position= "relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant = "h6">
                        Next Video
                    </Typography>
                </Toolbar>

            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm" >
                        <Typography variant= "h2" align="center" color= "textPrimary" gutterBottom>
                            YouTubeClone
                        </Typography>
                        <Typography variant = "h5" align="center" color= "textSecondary" paragraph>
                            Welcome to the Clone
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color= "primary">
                                        See my Videos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color= "primary">
                                        View Comments
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                    {cards.map((card) =>(
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia 
                                    component="img"
                                    className={classes.CardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                    alt="random image"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card, use this area to describe content
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button type="submit" 
                                    size="small" 
                                    color= "primary" 
                                    variant="outlined">Like</Button>
                                    <Button type="submit"
                                     size="small" 
                                    color= "secondary" 
                                    variant="outlined">Dislike</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))} 
                    </Grid>
                </container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography> 
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Something here for Footer
                </Typography>
            </footer>
        </>
    );
}
 
export default MatrialUi;
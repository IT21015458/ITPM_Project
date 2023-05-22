import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card, CardActionArea, CardMedia, Typography } from '@material-ui/core';
import articles from '../images/articles.jpg'
import prduct from '../images/product.jpg'
import crop from '../images/crop.jpg'
import qna from '../images/qa.jpg'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function CardComponent() {
    const classes = useStyles();

    return (
        <>
            <Container style={{ marginTop: '2%' }} >
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} md={3}>
                            <Card>
                                <Link to='/articleView'>
                                    <CardActionArea>
                                        <CardMedia>
                                            <img
                                                src={articles}
                                                alt='article image'
                                                width='100%'
                                                height='auto'
                                            />
                                        </CardMedia>
                                    </CardActionArea>
                                </Link>
                                <Typography style={{ fontSize: '20px', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
                                    Articles
                                </Typography>
                            </Card>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia>
                                        <img
                                            src={prduct}
                                            width='100%'
                                            height='auto'
                                        />
                                    </CardMedia>
                                    <Typography style={{ fontSize: '20px', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
                                        Product Marcket Place
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia>
                                        <img
                                            src={crop}
                                            width='100%'
                                            height='auto'
                                        />
                                    </CardMedia>
                                    <Typography style={{ fontSize: '20px', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
                                        Crop Marcket Place
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia>
                                        <img
                                            src={qna}
                                            width='100%'
                                            height='auto'
                                        />
                                    </CardMedia>
                                    <Typography style={{ fontSize: '20px', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
                                        Q and A
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    </Grid>
                </div >
            </Container >

        </>

    );
}

export default CardComponent;

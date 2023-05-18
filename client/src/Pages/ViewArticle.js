import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card, Divider, Typography, CardContent, Tooltip } from '@material-ui/core';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import HLogo from '../images/HLogo.png'
import FLogo from '../images/Logo.png'
import HomePageCSS from '../Styles/HomePage.module.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    cards: {
        flexGrow: 1,
        padding: 10
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        fontSize: 30,
    },
}));

function ViewPlant() {
    const location = useLocation();
    const ID = location.state.props;
    const [article, setArticle] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8060/api/article/getArticleData/${ID}`).then((res) => {
            setArticle(res.data.ArticleDetails[0]);
        }).catch(err => {
            alert(err);
        });
    }, [])

    console.log("article::: ", article)


    const classes = useStyles();

    return (
        <>
            <nav>
                <img src={HLogo} alt='Header Logo' />
                <span>Green<br />Culture</span>
            </nav>
            <Container style={{ backgroundColor: '#E3F2C1', padding: '12px', borderRadius: '10px', marginTop: '15px', marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2%' }}>
                    <Tooltip title="Back" placement='right'>
                        <Link to='/articleView'>
                            <ArrowBackIosIcon style={{ color: 'black' }} />
                        </Link>
                    </Tooltip>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={10} sm={6} md={12} style={{ maxHeight: "100%", maxWidth: "1000px", }}>
                        <Card style={{ marginLeft: '30%' }}>
                            <center>
                                <img
                                    src={`http://localhost:8060/assets/articles/${article.articleImage}`}
                                    alt="Nothing"
                                    style={{
                                        width: "80%",
                                        height: "100%",
                                        marginTop: '25px'
                                    }}
                                />
                                <h2>{article.articleTitle}</h2>
                                <p>{article.articleCategory}</p>
                            </center>
                        </Card>
                    </Grid>
                    {/* <Grid item sm={6} >
                        <Paper className={classes.paper}>
                            <h2>{article.articleTitle}</h2>
                            <p>{article.articleCategory}</p>
                        </Paper>
                    </Grid> */}
                    <Grid item xs={12} md={12}>
                        <Card>
                            <Paper className={classes.paper}>
                                {article.articleDescription}
                            </Paper>
                        </Card>
                    </Grid>
                    <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 5 }} />
                </Grid>
            </Container>
            <section className={HomePageCSS.footerContainer}>
                <div className={HomePageCSS.footerUpper}>
                    <div>
                        <div className={HomePageCSS.companyDetailsContaniner}>
                            <img src={FLogo} alt='Footer' />
                            <h3>Green Culture</h3>
                        </div>
                        <p>
                            GREEN CULTURE is a web application for connect
                            farmer and customer. We share knowledgeable articles
                            using agriculture experts and provides Question and answer section
                        </p>
                    </div>
                    <div>
                        <h3>Contact us</h3>
                        <span>Contact No 01132145678</span>
                        <span>Email greenculture@greenculture.com</span>
                    </div>
                    <div>
                        <h3>Site Map</h3>
                        <span>Crops Market</span>
                        <span>Articles</span>
                        <span>Forum</span>
                        <span>Agriculture Products Market</span>
                        <span>Signup</span>
                        <span>Signin</span>
                        <span>About us</span>
                    </div>
                </div>
                <div className={HomePageCSS.footerdown}>
                    <span>2023 &copy; Green Culture</span>
                </div>
            </section>

        </>
    )
}

export default ViewPlant
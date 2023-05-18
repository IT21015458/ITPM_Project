import React, { useEffect, useState } from 'react'
import HLogo from '../images/HLogo.png'
import FLogo from '../images/Logo.png'
import HomePageCSS from '../Styles/HomePage.module.css'
import Container from 'react-bootstrap/esm/Container'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { Card, IconButton, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));


function ArticleView() {
    const classes = useStyles();
    const navigate = useNavigate();

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8060/api/article/getArticles").then((res) => {
            setArticles(res.data);
        }).catch((err) => {
            alert(err);
        }).then((d) => {

        })
    }, [])

    const MoreDetails = (e) => {
        const ID = e._id;
        console.log("ID:: ", ID);
        navigate('/viewArticle', { state: { props: ID } });
    };

    return (
        <>
            <nav>
                <img src={HLogo} alt='Header Logo' />
                <span>Green<br />Culture</span>
            </nav>

            <Container style={{ backgroundColor: '#E3F2C1', padding: '12px', borderRadius: '10px', marginTop: '15px', marginBottom: '15px' }}>
                <div style={{ height: '40px', display: 'flex', justifyContent: 'right' }}>
                    <Tooltip title="Add Articles" placement="left">
                        <Link to='/addArticles'>
                            <IconButton >
                                <PlaylistAddIcon style={{ color: 'black', fontSize: '30px' }} />
                            </IconButton>
                        </Link>
                    </Tooltip>
                </div>
                <div classname={classes.root} style={{ padding: "15px" }}>
                    <Grid container spacing={3}>
                        {articles.map((e, i) => (
                            <Grid key={i} item xs={12} md={3} >
                                <Card style={{ padding: "10px", height: "28rem", }}>
                                    <div style={{ height: '11rem', display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            src={`http://localhost:8060/assets/articles/${e.articleImage}`}
                                            alt="Nothing"
                                            height="100%"
                                            width="auto"
                                        />
                                    </div>
                                    <p style={{ fontFamily: 'Impact', fontSize: '23px', fontWeight: 'bold' }}>{e.articleTitle}</p>
                                    <p style={{ fontFamily: 'Impact', fontSize: '23px', fontWeight: 'bold' }}>{e.articleCategory}</p>
                                    <div style={{ height: '25%' }}>
                                        <p>{e.articleDescription.substring(0, 100) + '...'}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button
                                            variant="outline-success"
                                            onClick={() => MoreDetails(e)}
                                            style={{ marginRight: "15px", }}
                                        >
                                            View More
                                        </Button>
                                    </div>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>


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

export default ArticleView
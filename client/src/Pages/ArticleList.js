import React, { useEffect, useState } from 'react'
import HomePageCSS from '../Styles/HomePage.module.css'
import HLogo from '../images/HLogo.png'
import FLogo from '../images/Logo.png'
import CardComponent from '../components/CardComponent';
import Container from 'react-bootstrap/esm/Container'
import { ButtonGroup, Tooltip } from '@material-ui/core';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Buttons from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Table from 'react-bootstrap/Table'

function ArticleList() {
    const [search, setSearch] = useState("");
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        console.log("inside")

        axios.get("http://localhost:8060/api/article/getArticles/").then((res) => {
            setArticles(res.data);
            console.log("inside 22")
        }).catch((err) => {
            alert(err);
            console.log("err1 ger article", err)
        })
    }, [articles])

    const articleDelete = (e) => {
        axios.delete(`http://localhost:8060/api/article/deleteArticle/${e}`).then(res => {
            toast.error("Article deleted successfully!!")
        }).catch(err => {
            alert(err)
        })
    }

    const updateArticleDetails = (data) => {
        console.log("helllckaxa")
        navigate('/updateArticles', { state: { data: data } })
    }

    return (
        <>
            <nav>
                <img src={HLogo} alt='Header Logo' />
                <span>Green<br />Culture</span>
            </nav>

            <Container style={{ backgroundColor: '#E3F2C1', padding: '12px', borderRadius: '10px', marginBottom: '25px', marginTop: '25px' }}>
                <Tooltip title="Back" placement='right'>
                    <Link to='/articleView'>
                        <ArrowBackIosIcon style={{ color: 'black' }} />
                    </Link>

                </Tooltip>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <Link to='/addArticles'>
                        <Buttons style={{ marginRight: '5px' }}>Add Articles</Buttons>
                    </Link>
                    <Link to='/listArticles'>
                        <Buttons>View Articles</Buttons>
                    </Link>
                </div>

                <center>
                    <Form className="d-flex" style={{ width: '40%', marginTop: '20px' }}>

                        <Form.Control
                            type="search"
                            value={search}
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => { setSearch(e.target.value) }}
                        />
                        <Buttons >Search</Buttons>
                    </Form>
                </center>

                <Table striped bordered hover style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Article Title</th>
                            <th>Article Category</th>
                            <th>Article content</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articles.filter((element) => {
                            if (search === "") {
                                return element;
                            } else if ((element.articleCategory.toLowerCase()).includes(search.toLocaleLowerCase())) {
                                return element;
                            }
                        }).map((elem, id) => (
                            <tr key={id} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                <td>{id + 1}</td>
                                <td>{elem.articleTitle}</td>
                                <td>{elem.articleCategory}</td>
                                <td>{elem.articleDescription.substring(0, 200) + '...'}</td>
                                <td >
                                    <Buttons size="sm" variant="outline-primary" onClick={() => { updateArticleDetails(elem) }} >Edit</Buttons>
                                </td>
                                <td>
                                    <Buttons size="sm" style={{ marginLeft: "10px" }} variant="outline-danger" onClick={() => articleDelete(elem._id)} >Delete</Buttons>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </Table>




                <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
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

export default ArticleList
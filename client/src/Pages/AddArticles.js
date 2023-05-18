import React, { useState } from 'react'
import HomePageCSS from '../Styles/HomePage.module.css'
import HLogo from '../images/HLogo.png'
import FLogo from '../images/Logo.png'
import CardComponent from '../components/CardComponent';
import Container from 'react-bootstrap/esm/Container'
import { Button, ButtonGroup, Tooltip } from '@material-ui/core';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Buttons from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function AddArticles() {

    const [articleID, setArticleID] = useState();
    const [articleTitle, setArticleTitle] = useState();
    const [articleCategory, setArticleCategory] = useState();
    const [articleDescription, setArticleDescription] = useState();
    const [articleImage, setArticleImage] = useState();

    const navigate = useNavigate();

    const Validate = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("articleID", articleID);
        formData.append("articleTitle", articleTitle);
        formData.append("articleCategory", articleCategory);
        formData.append("articleDescription", articleDescription);
        formData.append("file", articleImage);

        console.log("formData", formData)

        axios.post("http://localhost:8060/api/article/AddArticles", formData).then(async res => {
            console.log("Articles added successfully!!!");
            toast.success('Article Inserted Successfuly!!')
        }).catch(err => {
            console.log("Article insertion failed")
            toast.error('Article insertion failed!!')
        })

    }

    const fileUpload = async (e) => {
        console.log("File set");
        setArticleImage(e.target.files[0]);
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
                <Form onSubmit={Validate}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridProductID">
                            <Form.Label>Article ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter Article ID" onChange={(e) => { setArticleID(e.target.value) }} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridProductID">
                            <Form.Label>Article Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Article Title" onChange={(e) => { setArticleTitle(e.target.value) }} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCatagory">
                            <Form.Label>Article Catagory</Form.Label>
                            <Form.Select onChange={(e) => { setArticleCategory(e.target.value) }}>
                                <option >--Select article catogory--</option>
                                <option value="Vegitable & Fruites">Vegitable & Fruites</option>
                                <option value="Machine Products">Machine Products</option>
                                <option value="Grains">Grains</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formFile" className="mb-3">
                            <Form.Label>Enter Article Image: </Form.Label>
                            <Form.Control type="file" onChange={(e) => { fileUpload(e) }} accept='image/*' required />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGridDescription">
                        <Form.Label>Article Content</Form.Label>
                        <Form.Control as="textarea" rows={10} placeholder='Enter Article Content' onChange={(e) => { setArticleDescription(e.target.value) }} />
                    </Form.Group>
                    <center>
                        <Buttons variant="outline-success" type="submit" style={{ width: '30%' }}>
                            Submit
                        </Buttons>
                    </center>

                </Form>
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

export default AddArticles
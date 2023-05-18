import HomePageCSS from '../Styles/HomePage.module.css'
import HLogo from '../images/HLogo.png'
import FLogo from '../images/Logo.png'
import CardComponent from './CardComponent';

function HomePage() {
    return (
        <>
            <nav>
                <img src={HLogo} alt='Header Logo' />
                <span>Green<br />Culture</span>
            </nav>
            <section className={HomePageCSS.header}>
                
            </section>
            <section className={HomePageCSS.details}>
                <CardComponent />
            </section>
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
    );
}
export default HomePage;
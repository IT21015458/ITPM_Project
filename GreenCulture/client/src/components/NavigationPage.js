import veg from '../images/veg.jpg'
import vig from '../images/vig.jpg'
import vag from '../images/vag.jpg'
import NavigationPageCSS from '../Styles/NavigationPage.module.css'


function NavigationPage() {
    return (
        <>
          <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner" id={NavigationPageCSS.backgroundBlur}>

              <div className="carousel-item active" data-bs-interval="2000" id={NavigationPageCSS.backgroundFilter}>
                <img src={veg} className="d-block w-100 vh-100" alt="..." id={NavigationPageCSS.opacityFilter}/>
              </div>

              <div className="carousel-item" data-bs-interval="2000" id={NavigationPageCSS.backgroundFilter}>
                <img src={vig} className="d-block w-100 vh-100 img-fluid" alt="..." id={NavigationPageCSS.opacityFilter}/>
              </div>

              <div className="carousel-item" data-bs-interval="2000" id={NavigationPageCSS.backgroundFilter}>
                <img src={vag} className="d-block w-100 vh-100 img-fluid " alt="..." id={NavigationPageCSS.opacityFilter}/>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <div id={NavigationPageCSS.headerContainer}>
              <h1 id={NavigationPageCSS.headerText}>ආයුබෝවන්</h1>
              <h3 id={NavigationPageCSS.subHeaderText}>ඔබට අවශ්‍ය භාෂාව තෝරන්න<br/>Choose Your Language</h3>
              <button type="button" class="btn btn-success btn-lg" id={NavigationPageCSS.button1}>සිංහල </button>
              <button type="button" class="btn btn-success btn-lg" id={NavigationPageCSS.button1}>English</button>
            </div>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </>
    );
  }
  export default NavigationPage;
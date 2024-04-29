
import Container from "../Container/Container";
import "./Banner.css"

const Banner = () => {
    return (
        
       <div id="banner-part">
        <div className="overlay">
           
              <Container >
                <div className="banner-container">
                    <h1>Marcuiric IT</h1>
                    <h2>Business Agency</h2>

                    <div className="button">
                        <button>Learn More</button>
                    </div>

                </div>
              </Container>
           
        </div>
          
       </div>
    );
};

export default Banner;
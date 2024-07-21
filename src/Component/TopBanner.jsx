import Carousel from 'react-bootstrap/Carousel';
const TopBanner=()=>{
    return(
        <>
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
        
          src="./public/image/f3.jpg"
          alt="First slide"  width="1000px" height="300px"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./public/image/f4.jpg"
          alt="Second slide" width="100px" height="300px"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./public/image/f1.jpg"
          alt="Third slide"  width="100px" height="300px"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}
export default TopBanner;
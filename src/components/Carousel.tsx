import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProjCarousel = () => {
    return (
        <Carousel>
            <div>
                <img src="/images/lakitu.jpg" />
            </div>
            <div>
                <img src="/images/me.jpeg" />
            </div>
        </Carousel>
    );
}

export default ProjCarousel;
import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";
import ProductCard from "../ProductCard/ProductCard";

const productImageCarousel = ({images})=> {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    

    
    const carouselImages = images.map(image => (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={image.url}
                alt={image.title}
            />

        </Carousel.Item>

    ))
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {carouselImages}
        </Carousel>
    );
}

export default productImageCarousel;
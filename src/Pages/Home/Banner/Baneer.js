import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Baneer = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);}
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./images/banner/banner1.jpg'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Some of my special clicks</h3>
                    <p>This piece of masterpiece I alaways carry with me.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./images/banner/banner2.jpg'
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Some of my special clicks</h3>
                    <p>Jungle which i alawys love to go for travel and also for shoot.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='./images/banner/banner4.jpg'
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Some of my special clicks</h3>
                    <p>
                        Wedding and Couple photography is one of my passion.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
   
};

export default Baneer;
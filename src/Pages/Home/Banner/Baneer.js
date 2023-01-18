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
                    className="d-block w-100" height={548}
                    src='https://scontent.fdac19-1.fna.fbcdn.net/v/t39.30808-6/274327770_10208546677702248_2408383023812275831_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeGsWzKorDgslHA0SBzMwRr02ncMOK4t9fjadww4ri31-Bk1PECiRQCbyHQ33Te01JhCUR5a1C2xy5EgOfn-p28Q&_nc_ohc=wMgPNEEsFG0AX_pWsKl&_nc_ht=scontent.fdac19-1.fna&oh=00_AfBe-dqb8LqCyUoBqZyCaCYqsSH_7IpOVUqW43hQAHg8Qw&oe=63CD856C'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Some of my coule clicks</h3>
                    <p>One of the best couple shoot I have Done.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" height={548}
                    src='https://scontent-ccu1-1.xx.fbcdn.net/v/t39.30808-6/325890027_487125956928899_1413760275695584580_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGCOY8xHwsdzI-cEojdZxPtx1crM8ZkshjHVyszxmSyGLg-GnKSAPgpozUu3Rp3zsCxB0PdW4hx-mDFOGDVBoJl&_nc_ohc=Nq6hGiKjXJIAX8TRvAa&_nc_ht=scontent-ccu1-1.xx&oh=00_AfBeQIxEDpU5GVCKZykGxfFOzTb8dW8GcN1QdIl2OxGoDQ&oe=63CC89DC'
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Some of my special clicks</h3>
                    <p>Jungle which i alawys love to go for travel and also for shoot.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" height={548}
                    src='https://scontent.fdac19-1.fna.fbcdn.net/v/t39.30808-6/291890285_10208845137323552_2649103183144459534_n.jpg?stp=dst-jpg_p640x640&_nc_cat=1&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeF4opcA8euXLlxqpa638BgVFK2ohrcItsMUraiGtwi2w8vOi_vSiH17r2rmVleB7dchDyVOG2g__44W_dhw6Tdt&_nc_ohc=hx9U0YOU34cAX9nB4js&_nc_ht=scontent.fdac19-1.fna&oh=00_AfCzlKcTgSh0YjuQxilm16VEsVlT0C1VMBbyJorBcxT-Gw&oe=63CC035E'
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
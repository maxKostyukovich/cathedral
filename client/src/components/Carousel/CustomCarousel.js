import React from 'react'
import styles from './CustomCarousel.module.sass'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { CarouselPhoto } from '../../constants/staticPhoto'
function CustomCarousel (props) {
    let carouselItems  = CarouselPhoto.map((img) => {
        return (
            <img className={styles.carousel} key={img} src={img} alt={"logo"}/>
        )
    });
    return (
        <Carousel showThumbs={false}>
            {carouselItems}
        </Carousel>
    )
}

export default CustomCarousel
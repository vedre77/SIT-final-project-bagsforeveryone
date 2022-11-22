import React, { useState } from 'react'
import { 
    ImageSliderDiv,
    leftArrowStyles,
    rightArrowStyles
} from './About.styles';
import {IoIosArrowDropleft} from 'react-icons/io';
import {IoIosArrowDropright} from 'react-icons/io';


const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: '100%',
        minHeight: '500px',
        borderRadius: '15px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${slides[currentIndex].url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '75% 50%'
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <ImageSliderDiv>
            <div style={slideStyles}>
                <IoIosArrowDropleft style={leftArrowStyles} onClick={goToPrevious} />
                <IoIosArrowDropright style={rightArrowStyles} onClick={goToNext} />
            </div>
        </ImageSliderDiv>
    )
}

export default ImageSlider;


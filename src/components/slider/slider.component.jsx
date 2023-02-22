import './slider.styles.scss'
import React, { useState, useEffect } from 'react';

import { ReactComponent as LeftArrow } from '../../assets/left-arrow.svg'
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg'

import Button from '../button/button.component';

const slides = [
    { id: 1, imgUrl: 'https://i.ibb.co/VTKQTHP/Untitled-1.png', alt: 'Slide 1' },
    { id: 2, imgUrl: 'https://i.ibb.co/fHMdKCd/dylan-nolte-SH-Ijr-Kw-G8c-unsplash.jpg', alt: 'Slide 2' },
    { id: 3, imgUrl: 'https://i.ibb.co/Z8mjmwy/Untitled.png', alt: 'Slide 3' },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const handlePrevClick = () => {
        setCurrentSlide((currentSlide + slides.length - 1) % slides.length);
    };

    const handleNextClick = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    return (
        <div className="slider-container">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                    <div className='slide-content'
                        style={{
                            backgroundImage: `url(${slide.imgUrl})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <h1>a new kind of</h1>
                        <h1>chocolate</h1>
                        <Button buttonType='inverted'>explore now</Button>
                    </div>
                </div>
            ))}
            <LeftArrow className='arrow-left' onClick={handlePrevClick} />
            <RightArrow className='arrow-right' onClick={handleNextClick} />
        </div>
    )
}

export default Slider;
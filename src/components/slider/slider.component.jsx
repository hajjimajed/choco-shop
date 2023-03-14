import './slider.styles.scss'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as LeftArrow } from '../../assets/left-arrow.svg'
import { ReactComponent as RightArrow } from '../../assets/right-arrow.svg'

import Button from '../button/button.component';

const slides = [
    { id: 1, imgUrl: 'https://i.ibb.co/VTKQTHP/Untitled-1.png', imgUrl2: 'https://i.ibb.co/SfMKNtC/chocolate.png', alt: 'Slide 1', text1: 'Our Chocolate', text2: 'chocolate', link: '/chocolates' },
    { id: 2, imgUrl: 'https://i.ibb.co/fHMdKCd/dylan-nolte-SH-Ijr-Kw-G8c-unsplash.jpg', imgUrl2: 'https://i.ibb.co/Dt24pw7/candys.png', alt: 'Slide 2', text1: 'Our Candys', text2: 'with new flavors', link: '/candys' },
    { id: 3, imgUrl: 'https://i.ibb.co/Z8mjmwy/Untitled.png', imgUrl2: 'https://i.ibb.co/pJGhZp5/gift.png', alt: 'Slide 3', text1: 'Our Gifts', text2: 'you love', link: '/gifts' },
];

const Slider = () => {
    const navigate = useNavigate();

    const navigationHandler = (id) => {
        const slide = slides.find(s => s.id === id);
        if (slide) {
            navigate(slide.link);
        }
    }

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
                        <div>
                            <h1>{slide.text1}</h1>
                            <Button onClick={() => navigationHandler(slide.id)} buttonType='inverted'>explore now</Button>
                        </div>

                        <img src={slide.imgUrl2} alt="" />
                    </div>
                </div>
            ))}
            <LeftArrow className='arrow-left' onClick={handlePrevClick} />
            <RightArrow className='arrow-right' onClick={handleNextClick} />
        </div>
    )
}

export default Slider;
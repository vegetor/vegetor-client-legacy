import React from 'react'
import Slider from 'react-slick'

type Props = {
  images: string[];
}

const config = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Carousel: React.FC<Props> = ({ images }) => (
  <Slider { ...config }>
    {
      images.map(image => <img key={ image } src={ image } alt="" />)
    }
  </Slider>
)

export default Carousel

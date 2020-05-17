import React from 'react'
import {Carousel} from "../../components";

type Props = {
  images: string[];
}

const Slider: React.FC<Props> = ({ images }) => (
  <article>
    <Carousel images={ images } />
  </article>
)

export default Slider

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCart from '../../components/ProductCard';

const ProductSlider = (props) => {
    const projects = props.data.projects;

  
  return (
    <div className="container py-4 px-4 justify-content-center bg-dark">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={30}
      >
        <div>
        {projects && projects.map((project) =>
          <div className='project-preview' key={project.id}>
            <SwiperSlide>
          <ProductCart data={{ imgSrc: project.imgSrc, price: project.price, title: project.title, id:  project.id, blockchain: project.blockchain}} />
        </SwiperSlide>
          </div>
        )}
        </div>
      </Swiper>
    </div>
  )
}

export default ProductSlider

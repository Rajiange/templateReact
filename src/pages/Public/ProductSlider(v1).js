import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCart from '../../components/ProductCard';
import ProjectList from '../../components/ProjectList';

const ProductSlider = () => {
  const [projects, setProject] = useState(null);
  const [immutables, setImmutable] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/project')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      setProject(data);
    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:8000/immutable')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      setImmutable(data);
    })
  }, [])


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
          <ProductCart data={{ imgSrc: project.imgSrc, price: project.price, title: project.title, id:  project.id}} />
        </SwiperSlide>
          </div>
        )}
        </div>
      </Swiper>
    </div>
  )
}

export default ProductSlider

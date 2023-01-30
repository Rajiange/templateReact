import React, { useEffect, useState } from 'react'
import ProductSlider from './ProductSlider';

const Home = () => {
    const [projects, setProject] = useState(null);
    const [immutables, setImmutable] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:8000/project')
      .then(res => {
        return res.json();
      })
      .then(data => {
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
          <div>
                <h1> BNB </h1>
                <ProductSlider data={{ projects : projects }}/>
                <h1> Immutable </h1>
                <ProductSlider data={{ projects : immutables }}/>
                
  
  </div>
  
      )
}

export default Home

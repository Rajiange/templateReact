import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode';

const Services = () => {

  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL("https://pokeapi.co/").then((setSrc));
  }, []); 

  return (
    <h1>
        service
        <img src={src}></img>
    </h1>
  )
}

export default Services

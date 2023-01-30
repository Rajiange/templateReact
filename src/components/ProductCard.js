import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import './productcard.css'

const ProductCard = props => {
    let {imgSrc, price, title, id, blockchain} = props.data;

  return (
    <Card className="p-0 overflow-hidden h-100 shadow" style={{ height : 300 }}>
    <div className="overflow-hidden rounded p-0 bg-light" >
        <Card.Img style= {{width : 221, height : 221}} variant="top" src={imgSrc} />
    </div>
    <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
    </Card.Body>
    <Link to={`/radar/${blockchain}/${id}`}>
    <Button className="w-100 rounded-0" variant="success">Description</Button>
    </Link>
    </Card>
  )
}

export default ProductCard

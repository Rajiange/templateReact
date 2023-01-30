import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import './productcard.css'

const ProjectList = props => {
    //let {imgSrc, price, title, id} = props.data;
    const projects = props.data;
    console.log(props ,projects)
    return(
        <div className="project-list">
            {projects.map((project) => (
                  <Card className="p-0 overflow-hidden h-100 shadow">
                  <div className="overflow-hidden rounded p-0 bg-light" key={project.id}>
                      <Card.Img variant="top" src={project.imgSrc} />
                  </div>
                  <Card.Body className="text-center">
                      <Card.Title className="display-6">{project.price}</Card.Title>
                      <Card.Title>{project.title}</Card.Title>
                  </Card.Body>
                  <Link to={`/radar/${project.id}`}>
                  <Button className="w-100 rounded-0" variant="success">Add to Cart</Button>
                  </Link>
                  </Card>
                // <div className='project-preview' key={project.id}>
                //     <h2>{project.title}</h2>
                //     <p>price ${project.price}</p>
                // </div>
            ))}
        </div>
    )
//   return (
//     <Card className="p-0 overflow-hidden h-100 shadow">
//     <div className="overflow-hidden rounded p-0 bg-light" >
//         <Card.Img variant="top" src={imgSrc} />
//     </div>
//     <Card.Body className="text-center">
//         <Card.Title className="display-6">{price}</Card.Title>
//         <Card.Title>{title}</Card.Title>
//     </Card.Body>
//     <Link to={`/radar/${id}`}>
//     <Button className="w-100 rounded-0" variant="success">Add to Cart</Button>
//     </Link>
//     </Card>
//   )
}

export default ProjectList

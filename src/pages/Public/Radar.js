import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

const Radar = () => {
  const { id, blockchain } = useParams();
  const [projects, setProject] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/' + blockchain + '/' + id)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(blockchain);
        setProject(data);
      })
  }, [])

  return (
    <div className='Project-detail'>
      <h1>
        Radar - {id}
      </h1>
      <section>
      {projects && <div> <p> {projects.title} </p> <p> {projects.information} </p></div>}
      </section>
      <section>
      {projects && <div> <p> {projects.title} </p> <p> {projects.information} </p></div>}
      </section>
      <section>
      {projects && <div> <p> {projects.title} </p> <p> {projects.information} </p></div>}
      </section>
    </div>
  )
}

export default Radar

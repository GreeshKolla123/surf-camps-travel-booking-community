import React from 'react'

function SurfCampCard({ surfCamp }) {
  return (
    <div>
      <h2>{surfCamp.name}</h2>
      <p>{surfCamp.location}</p>
      <p>{surfCamp.price}</p>
      <button>Book Now</button>
    </div>
  )
}

export default SurfCampCard
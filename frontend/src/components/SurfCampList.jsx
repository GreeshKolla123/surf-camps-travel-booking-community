import React from 'react'
import SurfCampCard from './SurfCampCard.jsx'

function SurfCampList({ surfCamps }) {
  return (
    <div>
      {surfCamps.map((surfCamp) => (
        <SurfCampCard key={surfCamp.id} surfCamp={surfCamp} />
      ))}
    </div>
  )
}

export default SurfCampList
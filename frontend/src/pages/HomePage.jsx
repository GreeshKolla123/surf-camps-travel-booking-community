import React from 'react'
import SearchBar from '../components/SearchBar.jsx'
import SurfCampList from '../components/SurfCampList.jsx'

function HomePage() {
  const [surfCamps, setSurfCamps] = React.useState([])

  const handleSearch = async (searchTerm) => {
    const response = await api.get(`/surf-camps?search=${searchTerm}`)
    setSurfCamps(response.data)
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SurfCampList surfCamps={surfCamps} />
    </div>
  )
}

export default HomePage
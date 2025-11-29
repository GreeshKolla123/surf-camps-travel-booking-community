import React, { useState } from 'react'
import api from '../utils/api'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = async () => {
    const response = await api.get(`/surf-camps?search=${searchTerm}`)
    console.log(response.data)
  }

  return (
    <div>
      <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for surf camps" />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar
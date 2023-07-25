"use client"

import React, {useState} from 'react'
import { SearchMenuFacture } from '.'

function SearchBar() {

    const[manufacturer, setManufacturer] = useState('')

    const handleSearch = () => {}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
        <SearchMenuFacture
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        </div>
    </form>
  )
}

export default SearchBar
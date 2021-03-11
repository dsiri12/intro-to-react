import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("")

  const handleInputChange = (event) => {
  }

  const handleClearClick = () => {
  }

  const searchDisplayButton = searchValue.length > 0


  const filteredProducts = props.products.filter((product) => {
    return product.includes(searchValue)
  })

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      {searchDisplayButton && <button onClick={handleClearClick}>clear</button>}

      <ul>
        {filteredProducts.map((product) => {
          return <li key={product}>{product}</li>
        })}
      </ul>
    </div>
  )
}

export default SearchBar
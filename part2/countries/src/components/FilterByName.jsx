import { useState } from "react";
import DisplaySingleCountry from "./DisplaySingleCountry";

const FilterByName = ({countries}) => {
    const [searchItem, setSearchItem] = useState('')
    const [filteredCountries, setFilteredCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
  
    const handleInputChange = (e) => { 
      const searchTerm = e.target.value;
      setSearchItem(searchTerm)
  
      if(searchTerm === '') {
        setFilteredCountries([])
        setSelectedCountry(null)
      } else {
        const filteredItems = countries.filter((country) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountries(filteredItems);

        if (filteredItems.length === 1) {
            setSelectedCountry(filteredItems[0])
        } else {
            setSelectedCountry(null)
        }
      }
    }

    return (
      <>
        <input
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder='Type to search'
        />
        {selectedCountry ? (
            <DisplaySingleCountry country={selectedCountry} />
        ) : filteredCountries.length > 10 ? (
            <div>Too many matches, specify another filter</div>
        ) : (
            <ul>
            {filteredCountries.map((country) => (
                <li key={country.name.official}>
                {country.name.common}
                <button onClick={() => setSelectedCountry(country)}>show</button>
                </li>
            ))}
            </ul>
        )}
      </>
    )
}

export default FilterByName

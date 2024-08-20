import { useState } from "react";

const FilterByName = ({persons}) => {
    const [searchItem, setSearchItem] = useState('')
    const [filteredPersons, setFilteredPersons] = useState([])
  
    const handleInputChange = (e) => { 
      const searchTerm = e.target.value;
      setSearchItem(searchTerm)
  
      if(searchTerm === '') {
        setFilteredPersons([])
      } else {
        const filteredItems = persons.filter((person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPersons(filteredItems);
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
        <ul>
          {filteredPersons.map(person => <li key={person.id}>{person.name}</li>)}
        </ul>
      </>
    )
}

export default FilterByName

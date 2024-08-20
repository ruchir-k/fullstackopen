import { useEffect, useState } from 'react'
import countriesService from './services/countries'
import FilterByName from './components/FilterByName'

const App = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countriesService
      .getAll()
      .then(allCountries => {
        setCountries(allCountries)
      })
  },[])

  return (
    <>
      <div>
        find countries
        <div><FilterByName countries={countries} /></div>
      </div>
    </>
  )
}

export default App

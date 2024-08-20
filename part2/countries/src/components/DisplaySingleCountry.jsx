import Weather from "./Weather"

const DisplaySingleCountry = ({country}) => {

    return(
        <>
            <div>
                <h1>{country.name.common}</h1>
                <div>capital: {country.capital}</div>
                <div>area: {country.area}</div>
                <h3>languages:</h3>
                <ul>
                    {Object.values(country.languages).map((language, index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>
                <div>
                    <img src={country.flags.png} alt={country.flags.alt}/>
                </div>
                <h2>Weather in {country.capital}</h2>
                <Weather latlng={country.capitalInfo.latlng} />
            </div>
        </>
    )
}

export default DisplaySingleCountry
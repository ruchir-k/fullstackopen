import DeleteButton from './DeleteButton'

const ListNumbers = ({persons, setPersons}) => {

    return(
        <div>
            {persons.map(person => (
            <div key={person.name}>
                {person.name} {person.number}
                <DeleteButton
                        id={person.id} 
                        name={person.name} 
                        persons={persons} 
                        setPersons={setPersons} 
                    />
            </div>
            ))}
        </div>
    )
}

export default ListNumbers
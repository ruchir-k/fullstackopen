import { useState } from "react"
import phonebookService from '../services/phonebook'

const AddPerson = ({persons, setPersons, setNotificationMessage, setNotificationType}) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber,
            id: (persons.length + 1).toString(),
        }

        if(persons.some(person => person.name === nameObject.name)) {
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const ogPerson = persons.find(p => p.name === newName)
                const modifiedObject = {...nameObject, id: ogPerson.id}
                phonebookService
                    .update(ogPerson.id, modifiedObject)
                    .then(modifiedPerson => {
                        const modifiedPersons = persons.filter(p => p.id !== ogPerson.id)
                        setPersons(modifiedPersons.concat(modifiedPerson))
                        setNotificationMessage(
                            `'${modifiedPerson.name}' justhad their number updated`
                        )
                        setNotificationType('success')
                        setTimeout(() => {
                            setNotificationMessage(null)
                            setNotificationType(null)
                        }, 5000)
                    })
                    .catch(error => {
                            setNotificationMessage(
                                `Information of '${ogPerson.name}' has already been removed from server`
                            )
                            setNotificationType('error')
                            setTimeout(() => {
                                setNotificationMessage(null)
                                setNotificationType(null)
                            }, 5000)
                        }
                    )
            }
        } else if(persons.some(person => person.number === nameObject.number)) {
            alert(`${newNumber} is already added to phonebook`)
        } else {
            phonebookService
                .create(nameObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')

                    setNotificationMessage(
                        `'${returnedPerson.name}' was added to phonebook`
                    )
                    setNotificationType('success')
                    setTimeout(() => {
                        setNotificationMessage(null)
                        setNotificationType(null)
                    }, 5000)
                })
            
        }
    }

    return(
        <form onSubmit={addPerson}>
            <div>
            name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
            </div>
            <div>
            number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddPerson
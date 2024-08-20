import { useEffect, useState } from 'react'
import FilterByName from './components/FilterByName'
import AddPerson from './components/AddPerson'
import ListNumbers from './components/ListNumbers'
import phonebookService from './services/phonebook'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationType, setNotificationType] = useState(null)

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={notificationType}/>
      <div>Filter by Name</div>
      <div><FilterByName persons={persons}/></div>
      <div>Add a new Person</div>
      <div>
        <AddPerson 
              persons={persons}
              setPersons={setPersons} 
              setNotificationMessage={setNotificationMessage}
              setNotificationType={setNotificationType} 
        />
      </div>
      <h2>Numbers</h2>
      <ListNumbers persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App
import React from 'react';
import phonebookService from '../services/phonebook';

const DeleteButton = ({ id, name, persons, setPersons }) => {
    const handleDelete = () => {
        if (window.confirm(`Delete ${name} ?`)) {
            phonebookService
                .deleteItem(id)
                .then(responseData => {
                    const modifiedPersons = 
                        persons.filter(person =>
                            person.id !== responseData.id
                        );
                    setPersons(modifiedPersons);
                });
        }
    };

    return (
        <button onClick={handleDelete}>delete</button>
    );
};

export default DeleteButton;
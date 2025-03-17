import { useEffect, useState } from "react";
import personsService from "./services/persons";
import Search from "./Search";
import Form from "./Form";
import PeopleInfo from "./PeopleInfo";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filterKeyword, setFilterKeyword] = useState("");

  const peopleToShow = filterKeyword.trim() === "" ? persons : filterPersons();

  function filterPersons() {
    const filteredPersons = persons.filter((person) => {
      const personName = person.name.toLowerCase();
      return personName.startsWith(filterKeyword.toLowerCase().trim());
    });

    return filteredPersons;
  }

  function addPerson(event) {
    event.preventDefault();

    const isNameInPersons = persons.some(
      (person) => person.name === newName.trim()
    );

    const newPerson = { name: newName, number: newPhoneNumber };

    if (isNameInPersons) {
      const updateConfirmed = confirm(
        `${newName} is already added, update phone number?`
      );

      if (updateConfirmed) {
        const personId = persons.filter(
          (person) => person.name === newName.trim()
        )[0].id;
        const updatedPerson = { ...newPerson, id: personId };

        personsService.updatePerson(updatedPerson).then((res) => {
          const updatedPersonsArray = persons.map((person) => {
            return person.id === personId ? res : { ...person };
          });

          setPersons(updatedPersonsArray);
        });
      }
    } else {
      let newPersonsArray = persons.map((person) => ({ ...person }));
      personsService
        .addPerson(newPerson)
        .then((res) => setPersons([...newPersonsArray, res]));
    }
  }

  function deletePerson(id, name) {
    const deleteConfirmed = confirm(`Delete ${name}?`);

    if (deleteConfirmed) {
      personsService.deletePerson(id);

      const updatedPersons = persons
        .filter((person) => person.id !== id)
        .map((person) => ({ ...person }));

      setPersons(updatedPersons);
    }
  }

  useEffect(() => {
    personsService.getAllPersons().then((res) => setPersons(res));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>

      <Search
        filterKeyword={filterKeyword}
        setFilterKeyword={setFilterKeyword}
      ></Search>

      <Form
        handleSubmit={addPerson}
        newName={newName}
        setNewName={setNewName}
        newPhoneNumber={newPhoneNumber}
        setNewPhoneNumber={setNewPhoneNumber}
      ></Form>

      <PeopleInfo
        persons={peopleToShow}
        handleDelete={deletePerson}
      ></PeopleInfo>
    </div>
  );
};

export default App;

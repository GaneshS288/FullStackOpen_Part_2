import { useState } from "react";
import Search from "./Search";
import Form from "./Form";
import PeopleInfo from "./PeopleInfo";

const Person = ({ name, phone }) => {
  return (
    <div>
      <p>
        {name} - {phone}
      </p>
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "9172344567" },
    { name: "anjani", phone : "1234567890"},
    { name: "anul", phone : "4578345690"},
    { name: "amita", phone : "9056784027"},
    { name: "ganesh", phone : "8594765899"},
    { name: "samar", phone : "23490658490"}
  ]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filterKeyword, setFilterKeyword] = useState("");

  const peopleToShow =
    filterKeyword.trim() === ""
      ? persons
      : filterPersons();

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

    if (isNameInPersons) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const newPeron = { name: newName, phone: newPhoneNumber };
      setPersons([...persons, newPeron]);
    }
  }

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

      <PeopleInfo persons={peopleToShow}></PeopleInfo>
    </div>
  );
};

export default App;

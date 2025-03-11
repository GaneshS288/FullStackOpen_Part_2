import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import Form from "./Form";
import PeopleInfo from "./PeopleInfo";

const App = () => {
  const [persons, setPersons] = useState([]);
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
      const newPeron = { name: newName, number: newPhoneNumber, id: (persons.length + 1) };
      setPersons([...persons, newPeron]);
    }
  }

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => setPersons(res.data));
  }, [])

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

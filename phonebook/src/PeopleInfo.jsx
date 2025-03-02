const Person = ({ name, phone }) => {
  return (
    <div>
      <p>
        {name} - {phone}
      </p>
    </div>
  );
};

function PeopleInfo({ persons }) {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person
          key={person.name}
          name={person.name}
          phone={person.phone}
        ></Person>
      ))}
    </div>
  );
}

export default PeopleInfo;

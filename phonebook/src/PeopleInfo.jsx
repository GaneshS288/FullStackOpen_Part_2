const Person = ({ name, number }) => {
  return (
    <div>
      <p>
        {name} - {number}
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
          key={person.id}
          name={person.name}
          number={person.number}
        ></Person>
      ))}
    </div>
  );
}

export default PeopleInfo;

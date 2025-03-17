import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

function getAllPersons() {
  const data = axios
    .get(baseUrl)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
}

function addPerson(newPerson) {
  const res = axios
    .post(baseUrl, newPerson)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return res;
}

function deletePerson(id) {
  const res = axios.delete(`${baseUrl}/${id}`).catch((err) => console.log(err));
}

export default { getAllPersons, addPerson, deletePerson };

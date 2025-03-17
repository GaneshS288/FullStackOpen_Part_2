import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

function getAllPersons() {
  const data = axios.get(baseUrl).then((res) => res.data);
  return data;
}

function addPerson(newPerson) {
  const res = axios.post(baseUrl, newPerson).then((res) => res.data);
  return res;
}

export default { getAllPersons, addPerson };

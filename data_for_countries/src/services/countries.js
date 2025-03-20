import axios from "axios";

function getCountriesData() {
  const res = axios.get("https://studies.cs.helsinki.fi/restcountries/api/all");
  return res;
}

export { getCountriesData };

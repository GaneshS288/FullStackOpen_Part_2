import { useEffect, useState } from "react";
import { getCountriesData } from "./services/countries";
import Search from "./Search";

function App() {
  const [countriesData, setCountriesdata] = useState([]);
  const [countryFilterWord, setCountryFilterWord] = useState("");

  const countriesToDisplay = countriesData.filter((data) => {
    const lowerCaseCountryName = data.name.common.toLowerCase();
    return lowerCaseCountryName.startsWith(countryFilterWord);
  });

  function updateCountryFilterWord(event) {
    const newFilterWord = event.target.value;
    setCountryFilterWord(newFilterWord);
  }

  useEffect(() => {
    getCountriesData().then((res) => setCountriesdata(res.data));
  }, []);

  console.log(countriesToDisplay);

  return (
    <>
      <h1>Data for Countries</h1>
      <Search inputValue={countryFilterWord} handleInput={updateCountryFilterWord}></Search>
    </>
  );
}

export default App;

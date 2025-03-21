import { useEffect, useState } from "react";
import { getCountriesData } from "./services/countries";
import Search from "./Search";
import CountryList from "./CountryList";

function App() {
  const [countriesData, setCountriesdata] = useState([]);
  const [countryFilterWord, setCountryFilterWord] = useState("");

  const countriesToDisplay = countriesData.filter((data) => {
    const lowerCaseCountryName = data.name.common.toLowerCase();
    return lowerCaseCountryName.includes(countryFilterWord);
  });

  function updateCountryFilterWord(event) {
    const newFilterWord = event.target.value;
    setCountryFilterWord(newFilterWord.toLowerCase());
  }

  useEffect(() => {
    getCountriesData().then((res) => setCountriesdata(res.data));
  }, []);

  console.log(countriesToDisplay);

  return (
    <>
      <h1>Data for Countries</h1>
      <Search inputValue={countryFilterWord} handleInput={updateCountryFilterWord}></Search>
      <CountryList countryArray={countriesToDisplay}></CountryList>
    </>
  );
}

export default App;

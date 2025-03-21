import Country from "./Country";

function CountryList({ countryArray }) {
  if (countryArray.length > 10) {
    return (
      <p>Too many matching results, please be more specific in your query</p>
    );
  } else if (countryArray.length <= 10 && countryArray.length > 1) {
    return countryArray.map((countryData) => {
      const name = countryData.name.common;
      const languages = countryData.languages;
      const area = countryData.area;
      const flagImg = countryData.flags.png;
      const flatAlt = countryData.flags.alt;
      const capital = countryData.capital;

      return (
        <Country
          key={name}
          name={name}
          area={area}
          languages={languages}
          flagImg={flagImg}
          flagImgAlt={flatAlt}
          capital={capital}
        ></Country>
      );
    });
  } else if (countryArray.length === 1) {
    const name = countryArray[0].name.common;
    const languages = countryArray[0].languages;
    const area = countryArray[0].area;
    const flagImg = countryArray[0].flags.png;
    const flatAlt = countryArray[0].flags.alt;
    const capital = countryArray[0].capital;

    return (
      <Country
        name={name}
        capital={capital}
        area={area}
        languages={languages}
        flagImg={flagImg}
        flagImgAlt={flatAlt}
        enableDetails={true}
      ></Country>
    );
  }
}

export default CountryList;

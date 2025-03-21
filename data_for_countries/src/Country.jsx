import { useState } from "react";

function CountryCompact({ name, showHandler }) {
  return (
    <div className="country-container">
      <p>{name}</p>
      <button onClick={showHandler}>Show details</button>
    </div>
  );
}

function CountryDetailed({
  name,
  capital,
  area,
  languages,
  flagImg,
  flagImgAlt,
  showHandler,
}) {
  const languagesArray = Object.values(languages);

  return (
    <div className="country-container">
      <h2>{name}</h2>
      <p>Capital - {capital}</p>
      <p>Area- {area}</p>

      <h3>Languages</h3>
      {languagesArray.map((lang) => (
        <p key={lang}>{lang}</p>
      ))}
      <div>
        <img src={flagImg} alt={flagImgAlt} />
      </div>

      <button onClick={showHandler}>HideDetails</button>
    </div>
  );
}

function Country({
  name,
  capital,
  area,
  languages,
  flagImg,
  flagImgAlt,
  enableDetails = false,
}) {
  const [showDetails, setShowDetails] = useState(enableDetails);

  if (showDetails) {
    return (
      <CountryDetailed
        name={name}
        capital={capital}
        area={area}
        languages={languages}
        flagImg={flagImg}
        flagImgAlt={flagImgAlt}
        showHandler={() => setShowDetails(!showDetails)}
      ></CountryDetailed>
    );
  } else {
    return (
      <CountryCompact
        name={name}
        showHandler={() => setShowDetails(!showDetails)}
      ></CountryCompact>
    );
  }
}

export default Country;

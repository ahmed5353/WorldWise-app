/* eslint-disable react/prop-types */
import ReactCountryFlag from "react-country-flag";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{<ReactCountryFlag countryCode={country.emoji} svg />}</span>
      <span>{country.countryName}</span>
    </li>
  );
}

export default CountryItem;

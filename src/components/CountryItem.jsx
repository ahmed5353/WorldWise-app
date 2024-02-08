/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";
import FlagemojiToPNG from "../utils/FlagemojiToPNG";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{<FlagemojiToPNG flag={country.emoji} />}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;

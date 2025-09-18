import { useContext, useEffect, useState } from "react";
import { LangContext } from '../context/LangContext';
import {themeIcon} from "../assets/images";
import {darkthemeIcon} from "../assets/images";

const Header = ({ logotext, links }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const { lang, setLang } = useContext(LangContext);
  const [icon, setIcon] = useState(themeIcon);

  const setTheme = () => {
    document.body.classList.toggle("active");

    if (document.body.classList.contains("active")) {
      setIcon(darkthemeIcon); 
    } else {
      setIcon(themeIcon); 
    }
  };

  useEffect(() => {
    document.body.classList.remove("ru", "en");
    document.body.classList.add(lang);
  }, [lang]);

  return (

    <header className="header">
      <a href="" className="logo">{logotext}</a>

      <div
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        {links.map((elem) => (
          <li key={elem}>
            <a href={`#${elem.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {elem}
            </a>
          </li>
        ))}
      </ul>

      <div className="switches">
        <img onClick={setTheme} src={icon} alt="theme" className="theme" />
        {lang === "en" ? (
          <button className="lang-btn" onClick={() => setLang("ru")}>RU</button>
        ) : (
          <button className="lang-btn" onClick={() => setLang("en")}>EN</button>
        )}
      </div>
    </header>
  );
};

export default Header;




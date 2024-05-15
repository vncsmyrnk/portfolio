import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import i18n from './i18n/config.js'

function LanguageSwitch(props) {
  const [areDropDownOptionsVisible, setDropDownOptionsVisible] = useState(false);
  const [language, setLanguage] = useState(i18n.language);

  const toggleDDClickHandler = (e) => {
    setDropDownOptionsVisible(!areDropDownOptionsVisible);
  }

  const closeDDClickHandler = (e) => {
    setDropDownOptionsVisible(false);
  }

  const optionClickHandler = (e) => {
    const newLang = e.target.getAttribute('lang-value');
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    closeDDClickHandler()
  }

  const languageFlagAssociation = {
    en: 'gb',
    'pt-BR': 'br',
  };

  return (
    <div className={"relative inline-block text-left" + props.className}>
      <div>
        <button onClick={toggleDDClickHandler} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700" id="menu-button" aria-expanded="true" aria-haspopup="true">
        <span className={"fi fi-" + languageFlagAssociation[language] } />
        <FaChevronDown />
        </button>
      </div>
    
      <div className={"absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md text-gray-900 dark:text-gray-200 bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " + (areDropDownOptionsVisible ? "" : "hidden")} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div className="my-1 cursor-pointer" role="none">
          <button onClick={optionClickHandler} className="w-full text-left px-4 py-2 text-sm dark:hover:bg-gray-900" role="menuitem" tabIndex="-1" id="menu-item-1" lang-value="en">
            <span className="fi fi-gb mr-2" />English
          </button>
          <button onClick={optionClickHandler} className="w-full text-left block px-4 py-2 text-sm dark:hover:bg-gray-900" role="menuitem" tabIndex="-1" id="menu-item-2" lang-value="pt-BR">
            <span className="fi fi-br mr-2" />Português
          </button>
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitch;

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import i18n from "./../i18n/config";

type LanguageSwitchProps = {
  className?: string;
};

function LanguageSwitch({ className }: LanguageSwitchProps) {
  const [areDropDownOptionsVisible, setDropDownOptionsVisible] =
    useState(false);
  const [language, setLanguage] = useState(i18n.language);

  const toggleDDClickHandler = () => {
    setDropDownOptionsVisible(!areDropDownOptionsVisible);
  };

  const closeDDClickHandler = () => {
    setDropDownOptionsVisible(false);
  };

  const optionClickHandler = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLButtonElement;
    const newLang: string = target.getAttribute("lang-value") || "";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    closeDDClickHandler();
  };

  const languageFlagAssociation: { [key: string]: string } = {
    en: "gb",
    "pt-BR": "br",
  };

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <div>
        <button
          onClick={toggleDDClickHandler}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-400 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <span className={`fi fi-${languageFlagAssociation[language]}`} />
          <FaChevronDown />
        </button>
      </div>

      <div
        className={
          "absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " +
          (areDropDownOptionsVisible ? "" : "hidden")
        }
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="my-1 cursor-pointer" role="none">
          <button
            onClick={optionClickHandler}
            className="w-full text-left px-4 py-2 text-sm dark:hover:bg-slate-900"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-1"
            lang-value="en"
          >
            <span className="fi fi-gb mr-2" />
            English
          </button>
          <button
            onClick={optionClickHandler}
            className="w-full text-left block px-4 py-2 text-sm dark:hover:bg-slate-900"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-2"
            lang-value="pt-BR"
          >
            <span className="fi fi-br mr-2" />
            Português
          </button>
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitch;

import { Trans } from "react-i18next";

type DarkModeSwitchProps = {
  className?: string;
};

function DarkModeSwitch({ className }: DarkModeSwitchProps) {
  const toggleToDarkMode = () => {
    document.documentElement.classList.add("dark");
  };

  const toggleToLightMode = () => {
    document.documentElement.classList.remove("dark");
  };

  return (
    <div className={`flex flex-col justify-center ${className}`}>
      <label
        className="relative cursor-pointer p-2 group"
        htmlFor="light-switch"
      >
        <span onClick={toggleToDarkMode}>
          <svg
            className="dark:hidden"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-slate-300"
              d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
            />
            <path
              className="fill-slate-400"
              d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
            />
          </svg>
        </span>
        <span onClick={toggleToLightMode}>
          <svg
            className="hidden dark:block"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-slate-400"
              d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
            />
            <path
              className="fill-slate-500"
              d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
            />
          </svg>
        </span>
        <div
          role="tooltip"
          className="absolute right-0 top-10 z-10 hidden md:inline-block w-36 px-2 py-1 text-sm font-medium text-slate-700 dark:text-slate-300 text-center transition-opacity duration-300 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 tooltip bg-slate-300 dark:bg-slate-700"
        >
          <Trans i18nKey="header.toggle-dark-light-mode-tooltip" />
        </div>
      </label>
    </div>
  );
}

export default DarkModeSwitch;

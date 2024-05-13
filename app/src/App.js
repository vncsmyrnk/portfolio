import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-section">
        <nav class="bg-white border-gray-200">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mr-4">
            <span class="self-center text-2xl font-semibold whitespace-nowrap">VM</span>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                <li>
                  <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Experience</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About me</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="content-section">
        <div className="title-section text-right">
          <p className="main-sentence text-7xl font-bold">Powering the digital world from behind the scenes</p>
          <p className="description text-gray-800 text-4xl mt-4">I build scalable, secure, and seamless backend infrastructures</p>
        </div>
        <div className="description-section mt-8">
          <div className="description-text text-xl text-gray-800">
            <p>I am a backend developer specialized in crafting robust APIs using an arsenal of tools including Python, Java, and Node.js. With a deep understanding of backend principles and concepts, I am proficient in implementing SOLID principles, RESTful architecture, and clean code practices to engineer scalable and efficient solutions.</p>
          </div>
          <button class="mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Check out
          </button>
        </div>
      </div>
      <div></div>
      <div className="footer-section"></div>
    </div>
  );
}

export default App;

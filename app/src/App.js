import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism, dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function App() {
  const codeString = `bp = Blueprint('bp_ingrediente', __name__)

@bp.get("")
def get_ingredientes():
    with session_scope() as session:
        ingredientes = session.query(Ingrediente).all()
        return jsonify([i.serialize() for i in ingredientes]) `;

  return (
    <div className="App">
      <div className="main-page h-screen flex flex-col" id="home">
        <div className="header-section bg-white fixed top-0 right-0 left-0 pb-2">
          <nav>
            <div class="flex flex-wrap items-center justify-between mx-auto pt-4">
              <span class="self-center text-2xl font-semibold whitespace-nowrap">VM</span>
              <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                  <li>
                    <a href="#home" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
                  </li>
                  <li>
                    <a href="#projects" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
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
        <div className="content-section flex flex-col grow justify-center ml-8">
          <div className="title-section text-right">
            <p className="main-sentence text-7xl font-bold">Powering the digital world from behind the scenes</p>
            <p className="description text-gray-800 text-4xl mt-4">I build scalable, secure, and seamless backend infrastructures</p>
          </div>
        </div>
        <div className="description-section mt-8 grow justify-center">
          <div className="description-text text-xl text-gray-800">
            <p>I am <span className="underline">Vinicius Mayrink</span> and I am a backend developer specialized in crafting robust APIs using an arsenal of tools including Python, Java, and Node.js. With a deep understanding of backend principles and concepts, I am proficient in implementing SOLID principles, RESTful architecture, and clean code practices to engineer scalable and efficient solutions.</p>
          </div>
          <a href="#projects">
            <button class="mt-8 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Check it out
            </button>
          </a>
        </div>
      </div>
      <div className="projects-page h-screen flex flex-col justify-center" id="projects">
        <div className="projects-section page-section">
          <p className="text-center text-6xl font-bold">Projects</p>
          <div className="project-samples grid grid-cols-1 gap-4 mt-[5%]">
            <div className="project-sample project-python w-full">
              <div class="p-6 bg-white border border-gray-200 rounded-lg shadow">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Restaurant integration API</h5>
                    <SyntaxHighlighter language="python" style={prism}>
                      {codeString}
                    </SyntaxHighlighter>
                  <a href="https://github.com/Sistema-de-integracao-em-restaurante/api" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      See on GitHub
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

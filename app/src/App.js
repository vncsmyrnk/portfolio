import './App.css';
import Project from './Project';
import DarkModeSwitch from './DarkModeSwitch';
import { useInView } from 'react-intersection-observer'
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub, FaReact } from 'react-icons/fa';

function App() {
  const [refProjects, inViewProjects] = useInView({ threshold: 0.5 })

  const projects = [
    {
      name: 'Restaurant integration API',
      description: 'This API aims to centralize information related to restaurant orders in just one place, providing webhooks so that other systems can make decisions based on order activity',
      language: 'python',
      codeString: `[...]
bp = Blueprint('bp_ingrediente', __name__)

@bp.get("")
def get_ingredientes():
    with session_scope() as session:
        ingredientes = session.query(Ingrediente).all()
        return jsonify([i.serialize() for i in ingredientes])
[...]`,
      linkUrl: 'https://github.com/Sistema-de-integracao-em-restaurante/api',
      linkDescription: 'See on GitHub',
    },
    {
      name: 'Work Time calculator API',
      description: 'This is an app built with Spring Boot and Gradle to calculate work time for a given parameter inputs',
      language: 'java',
      codeString: `[...]
@PostMapping(value = "day")
public ResponseEntity<List<Calculation>> calculateDay(@Valid @RequestBody RequestDay requestDay) {
  Day day =
      DayBuilder.of(
          requestDay.getDate(), requestDay.getRegisteredRecords(), requestDay.getShiftRecords());
  List<Calculation> calculations = day.calculate();
  return ResponseEntity.ok(calculations);
}
[...]`,
      linkUrl: 'https://github.com/clocked-app/calculations-api',
      linkDescription: 'See on GitHub',
    },
  ];

  return (
    <div className="App relative bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="main-page h-screen flex flex-col" id="home">
        <div className="header-section bg-white dark:bg-gray-900 z-10 fixed top-0 right-0 left-0 pb-2 pr-[15%] pl-[15%]">
          <nav>
            <div class="flex flex-wrap items-center justify-between mx-auto pt-4">
              <span class="self-center text-4xl font-semibold whitespace-nowrap">~</span>
              <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                  <li>
                    <a href="#home" class="block py-2 px-3 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-500 hover:scale-110" aria-current="page">Home</a>
                  </li>
                  <li>
                    <a href="#projects" class="block py-2 px-3 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-500 hover:scale-110">Projects</a>
                  </li>
                  <li>
                    <a href="#ai-projects" class="block py-2 px-3 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-500 hover:scale-110">AI Projects</a>
                  </li>
                  <li>
                    <a href="#about-me" class="block py-2 px-3 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-500 hover:scale-110">About me</a>
                  </li>
                  <li>
                    <a href="#contact" class="block py-2 px-3 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-500 hover:scale-110">Contact</a>
                  </li>
                  <li>
                    <DarkModeSwitch />
                  </li>
                </ul>
              </div>
              <div className="sm:hidden">
                <DarkModeSwitch />
              </div>
            </div>
          </nav>
        </div>
        <div className="content-section flex flex-col grow justify-center ml-8 pt-[100px] md:pt-0 mr-5 md:mr-[15%] ml-5 md:ml-[20%]">
          <div className="title-section text-right animate-[slideLeft_1s_ease-out]">
            <p className="main-sentence text-4xl md:text-7xl font-bold">Powering the digital world from behind the scenes</p>
            <p className="description text-gray-800 dark:text-gray-300 text-2xl md:text-4xl mt-4">I build scalable, secure, and seamless backend infrastructures</p>
          </div>
        </div>
        <div className="description-section mt-8 grow justify-center pr-5 md:pr-[20%] ml-5 md:ml-[15%] animate-[slideRight_1s_ease-out]">
          <div className="description-text text-base md:text-xl text-gray-800 dark:text-gray-400 pt-8 md:pt-0">
            <p>I am <span className="underline">Vinicius Mayrink</span> and I am a backend developer specialized in crafting robust APIs using an arsenal of tools including <span className="text-blue-700 dark:text-blue-400 font-semibold">Python</span>, <span className="text-blue-700 dark:text-blue-400 font-semibold">Java</span>, and <span className="text-blue-700 dark:text-blue-400 font-semibold">Node.js</span>. With a deep understanding of backend principles and concepts, I am proficient in implementing SOLID principles, RESTful architecture, and clean code practices to engineer <strong>scalable</strong> and <strong>efficient</strong> solutions.</p>
          </div>
          <a href="#projects">
            <button class="mt-8 bg-blue-500 dark:bg-blue-700 hover:bg-blue-400 dark:hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 dark:border-blue-900 hover:border-blue-500 dark:hover:border-blue-700 rounded transition duration-500 hover:scale-110">
              Check it out
            </button>
          </a>
        </div>
      </div>
      <div className="projects-page md:h-screen flex flex-col justify-center" id="projects">
        <div ref={refProjects} className={inViewProjects ? "animate-none md:animate-[upDown_1s_ease-out]" : "visible md:invisible"}>
          <div className="projects-section page-section mr-[5%] ml-[5%]">
            <p className="text-3xl md:text-5xl font-bold mr-[10%] ml-[10%] mt-[70px] md:mt-0">Projects</p>
            <div className="project-samples grid grid-cols-1 md:grid-cols-2 gap-4 mt-[5%] mx-2 mb-2">
              {projects.map((project) => {
                return <Project className="project-sample project-python w-full" name={project.name} description={project.description} language={project.language} codeString={project.codeString} linkUrl={project.linkUrl} linkDescription={project.linkDescription} />
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="contact-page h-screen flex flex-col justify-end" id="contact">
          <div className="contact-section page-section mr-[5%] ml-[5%] h-2/5 flex flex-col justify-self-center items-center">
            <p className="text-3xl md:text-5xl font-bold mr-[10%] ml-[10%] mt-[70px] md:mt-0">Contact me on</p>
            <div className="platforms mt-5 flex">
              <a href="https://www.linkedin.com/in/vncsmyrnk">
                <FaLinkedin className="mx-2 md:mx-5" color="#334155" size="4rem" />
              </a>
              <a href="mailto:vmayrink12@gmail.com">
                <FaEnvelope className="mx-2 md:mx-5" color="#334155" size="4rem" />
              </a>
              <a href="https://github.com/vncsmyrnk">
                <FaGithub className="mx-2 md:mx-5" color="#334155" size="4rem" />
              </a>
              <a href="tel:+5531984805330">
                <FaPhone className="mx-2 md:mx-5" color="#334155" size="4rem" />
              </a>
            </div>
          </div>
          <div className="footer-section page-section w-full bg-gray-300 dark:bg-gray-950 mt-[5%] flex flex-col h-1/6 items-center justify-center">
            <p className="dark:text-gray-700">This website is powered by</p>
            <div className="footer-tools flex mt-2">
              <FaReact className="mx-2" color="#334155" size="2rem" />
              <a href="https://github.com/vncsmyrnk/portfolio">
                <FaGithub className="mx-2" color="#334155" size="2rem" />
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-800 mt-3 text-sm">&copy; 2024 Vinicius Mayrink</p>
          </div>
      </div>
    </div>
  );
}

export default App;

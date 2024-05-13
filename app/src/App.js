import './App.css';
import Project from './Project';
import { useInView } from 'react-intersection-observer'

function App() {
  const [refProjects, inViewProjects] = useInView({ threshold: 0.5 })

  const codeStringRestaurant = `[...]
bp = Blueprint('bp_ingrediente', __name__)

@bp.get("")
def get_ingredientes():
    with session_scope() as session:
        ingredientes = session.query(Ingrediente).all()
        return jsonify([i.serialize() for i in ingredientes])
[...]`;

  const codeStringWTC = `[...]
@PostMapping(value = "day")
public ResponseEntity<List<Calculation>> calculateDay(@Valid @RequestBody RequestDay requestDay) {
  Day day =
      DayBuilder.of(
          requestDay.getDate(), requestDay.getRegisteredRecords(), requestDay.getShiftRecords());
  List<Calculation> calculations = day.calculate();
  return ResponseEntity.ok(calculations);
}
[...]`;

  const descriptionRestaurant = "This API aims to centralize information related to restaurant orders in just one place, providing webhooks so that other systems can make decisions based on order activity";
  const descriptionWTC = "This is an app built with Spring Boot and Gradle to calculate work time for a given parameter inputs";

  return (
    <div className="App relative">
      <div className="main-page h-screen flex flex-col" id="home">
        <div className="header-section bg-white z-10 fixed top-0 right-0 left-0 pb-2 pr-[15%] pl-[15%]">
          <nav>
            <div class="flex flex-wrap items-center justify-between mx-auto pt-4">
              <span class="self-center text-4xl font-semibold whitespace-nowrap">~</span>
              <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                  <li>
                    <a href="#home" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
                  </li>
                  <li>
                    <a href="#projects" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AI Projects</a>
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
        <div className="content-section flex flex-col grow justify-center ml-8 pt-[100px] md:pt-0 mr-[15%] ml-[20%]">
          <div className="title-section text-right animate-[slideLeft_1s_ease-out]">
            <p className="main-sentence text-2xl md:text-7xl font-bold">Powering the digital world from behind the scenes</p>
            <p className="description text-gray-800 text-xl md:text-4xl mt-4">I build scalable, secure, and seamless backend infrastructures</p>
          </div>
        </div>
        <div className="description-section mt-8 grow justify-center pr-5 md:pr-[20%] ml-5 md:ml-[15%] animate-[slideRight_1s_ease-out]">
          <div className="description-text text-xl text-gray-800 pt-8 md:pt-0">
            <p>I am <span className="underline">Vinicius Mayrink</span> and I am a backend developer specialized in crafting robust APIs using an arsenal of tools including Python, Java, and Node.js. With a deep understanding of backend principles and concepts, I am proficient in implementing SOLID principles, RESTful architecture, and clean code practices to engineer scalable and efficient solutions.</p>
          </div>
          <a href="#projects">
            <button class="mt-8 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Check it out
            </button>
          </a>
        </div>
      </div>
      <div className="projects-page md:h-screen flex flex-col justify-center" id="projects">
        <div ref={refProjects} className={inViewProjects ? "animate-[upDown_1s_ease-out]" : "invisible"}>
          <div className="projects-section page-section pr-[5%] pl-[5%]">
            <p className="text-6xl font-bold mt-[60px] md:mt-0 md:mt-0">Projects</p>
            <div className="project-samples grid grid-cols-1 md:grid-cols-2 gap-4 mt-[5%] mx-2">
              <Project className="project-sample project-python w-full" name="Restaurant integration API" description={descriptionRestaurant} language="python" codeString={codeStringRestaurant} linkUrl="https://github.com/Sistema-de-integracao-em-restaurante/api" linkDescription="See on GitHub" />
              <Project className="project-sample project-java w-full" name="Work Time calculator API" description={descriptionWTC} language="java" codeString={codeStringWTC} linkUrl="https://github.com/clocked-app/calculations-api" linkDescription="See on GitHub" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

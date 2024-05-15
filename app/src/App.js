import './App.css';
import Project from './Project';
import DarkModeSwitch from './DarkModeSwitch';
import { useInView } from 'react-intersection-observer'
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub, FaReact } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation, Trans } from 'react-i18next';

function App() {
  const [refProjects, inViewProjects] = useInView({ threshold: 0.5 })
  const [refAbout, inViewAbout] = useInView({ threshold: 0.5 })
  const { t } = useTranslation();

  const carouselResponsivity = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const mySkills = ['docker', 'api', 'rest', 'python', 'integrations', 'java', 'backend', 'ai/ml', 'ci/cd', 'git', 'pipelines'];

  const projects = [
    {
      name: t('project_restaurant_name'),
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
      chips: ['rest api', 'python', 'flask', 'sqlalchemy', 'docker']
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
      chips: ['rest api', 'java', 'spring boot', 'docker']
    },
    {
      name: 'Sentiment Analysis in Portuguese Sentences',
      description: 'This project aims at analyzing and predicting sentiments associated with texts written in the Portuguese language through NLP',
      language: 'python',
      codeString: `[...]
@app.post("/analyze")
def analyze():
    distilled_student_sentiment_classifier = pipeline(
        model="lxyuan/distilbert-base-multilingual-cased-sentiments-student",
        return_all_scores=True
    )
    print(request.data, request.json)
    sentence_to_analyze = request.json['sentence']
    return distilled_student_sentiment_classifier(sentence_to_analyze)
[...]`,
      linkUrl: 'https://github.com/vncsmyrnk/sentiment-analysis-pt',
      linkDescription: 'See on GitHub',
      chips: ['nlp', 'ai', 'rest api', 'python', 'tensorflow']
    },
    {
      name: 'Doar Digital API',
      description: 'REST API responsible for managing donation information. This API was built with NodeJS and Koa.js. The application expects a PostgreSQL database. Docker was used to run the app services',
      language: 'javascript',
      codeString: `[...]
@app.post("/analyze")
def analyze():
    distilled_student_sentiment_classifier = pipeline(
        model="lxyuan/distilbert-base-multilingual-cased-sentiments-student",
        return_all_scores=True
    )
    print(request.data, request.json)
    sentence_to_analyze = request.json['sentence']
    return distilled_student_sentiment_classifier(sentence_to_analyze)
[...]`,
      linkUrl: 'https://github.com/doardigital/api',
      linkDescription: 'See on GitHub',
      chips: ['rest api', 'node.js', 'koa.js', 'docker']
    },
  ];

  return (
    <div className="App relative bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="main-page h-screen flex flex-col" id="home">
        <div className="header-section bg-white dark:bg-gray-900 z-[1001] fixed top-0 right-0 left-0 pb-2 pr-[15%] pl-[15%]">
          <nav>
            <div className="flex flex-wrap items-center justify-between mx-auto pt-4">
              <span className="self-center text-4xl font-semibold whitespace-nowrap">~</span>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                  <li>
                    <a href="#home" className="block py-2 px-3 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-500 hover:scale-110" aria-current="page"><Trans i18nKey="header.home"/></a>
                  </li>
                  <li>
                    <a href="#projects" className="block py-2 px-3 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-500 hover:scale-110"><Trans i18nKey="header.projects"/></a>
                  </li>
                  <li>
                    <a href="#about-me" className="block py-2 px-3 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-500 hover:scale-110"><Trans i18nKey="header.about"/></a>
                  </li>
                  <li>
                    <a href="#contact" className="block py-2 px-3 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-500 hover:scale-110"><Trans i18nKey="header.contact"/></a>
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
            <p className="main-sentence text-4xl md:text-7xl font-bold"><Trans i18nKey="main_sentence.title" /></p>
            <p className="description text-gray-800 dark:text-gray-300 text-2xl md:text-4xl mt-4"><Trans i18nKey="main_sentence.description" /></p>
          </div>
        </div>
        <div className="description-section mt-8 grow justify-center pr-5 md:pr-[20%] ml-5 md:ml-[15%] animate-[slideRight_1s_ease-out]">
          <div className="description-text text-base md:text-xl text-gray-800 dark:text-gray-400 pt-8 md:pt-0">
            <p><Trans i18nKey="description_section.text" components={{ span_name: <span className="underline" />, span_language: <span className="text-blue-700 dark:text-blue-400 font-semibold" />, strong: <strong /> }} /></p>
          </div>
          <a href="#projects">
            <button className="mt-8 bg-blue-500 dark:bg-blue-700 hover:bg-blue-400 dark:hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 dark:border-blue-900 hover:border-blue-500 dark:hover:border-blue-700 rounded transition duration-500 hover:scale-110">
              <Trans i18nKey="description_section.button" />
            </button>
          </a>
        </div>
      </div>
      <div className="projects-page md:h-screen flex flex-col justify-center" id="projects">
        <div ref={refProjects} className={inViewProjects ? "animate-none md:animate-[upDown_1s_ease-out]" : "visible md:invisible"}>
          <div className="projects-section page-section mr-[5%] ml-[5%]">
            <p className="text-3xl md:text-5xl font-bold mr-[10%] ml-[10%] mt-[70px] md:mt-0">Projects</p>
            <div className="project-samples mt-[5%] mx-2 mb-2">
              <Carousel responsive={carouselResponsivity} infinite={true} autoPlay={true} autoPlaySpeed={5000} swipeable={false}>
                {projects.map((project, i) => {
                  return <Project key={i} className="project-sample project-python w-full" name={project.name} description={project.description} language={project.language} codeString={project.codeString} linkUrl={project.linkUrl} linkDescription={project.linkDescription} chips={project.chips} />
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="about-page md:h-screen flex flex-col justify-center" id="about-me">
        <div ref={refAbout} className={inViewAbout ? "animate-none md:animate-[upDown_1s_ease-out]" : "visible md:invisible"}>
          <div className="about-section page-section mr-[5%] ml-[5%]">
            <p className="text-3xl md:text-5xl font-bold mr-[10%] ml-[10%] mt-[70px] md:mt-0">About me</p>
            <div className="about-content mt-[5%] flex flex-col items-center">
              <div className="p-6 w-full md:w-2/6 bg-gray-200 dark:bg-slate-950 flex flex-col justify-center items-center border border-gray-200 dark:border-gray-900 rounded-lg shadow">
                <img src={process.env.PUBLIC_URL + "/me.png"} width="auto" height="200" alt="Vinicius Mayrink" />
                <h5 className="mb-1 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vinicius Mayrink</h5>
                <p className="text-gray-800 dark:text-gray-500">Software/Back-end Engineer</p>
                <div className="mt-4 flex flex-wrap justify-center">
                  {mySkills.map((skill, i) => {
                    return <div key={i} className="inline-block relative px-2 py-1 mr-2 mb-2 font-sans text-xs font-bold text-gray-200 dark:text-white uppercase bg-gray-500 dark:bg-gray-900 rounded-md select-none whitespace-nowrap">
                      <span className="">{skill}</span>
                    </div>
                  })}
                </div>
              </div>
              <div className="about-description h-16 mt-[4%] mr-[10%] ml-[10%] text-base md:text-xl text-gray-800 dark:text-gray-400 pt-8 md:pt-0">
                <p>I love creating REST APIs in Python, Node.js, Java, and PHP. I use principles like SOLID, clean architecture, and Design Patterns as premises for creating stable, scalable, and distributed applications. I believe that <span className="text-blue-700 dark:text-blue-400 font-semibold">DevOps</span>, <span className="text-blue-700 dark:text-blue-400 font-semibold">DevSecOps</span>, and <span className="text-blue-700 dark:text-blue-400 font-semibold">CI/CD</span> practices are essential for applications to be developed collaboratively and in an organized manner, significantly reducing potential problems and bugs even before they reach production environments</p>
              </div>
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

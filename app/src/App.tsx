import {
  Certification,
  DarkModeSwitch,
  LanguageSwitch,
  Project,
} from "@/components";
import { FaEnvelope, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiVite } from "react-icons/si";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation, Trans } from "react-i18next";
import { projects } from "@/data";

function App() {
  const { t } = useTranslation();

  const certificatesCarouselResponsivity = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const projectsCarouselResponsivity = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const mySkills = [
    "docker",
    "api",
    "rest",
    "python",
    "integrations",
    "go",
    "backend",
    "ai/ml",
    "ci/cd",
    "git",
    "pipelines",
  ];

  const certificates = [
    {
      name: t("certificates.technical.cefet"),
      description: t("certificates.types.technical"),
      img: "cefet-logo.png",
      imgDark: "cefet-logo-white.png",
      url: "https://www.cefetmg.br",
      tags: [
        "computer networks",
        "security",
        "programming",
        "computer architecture",
        "oop",
        "algorithms",
      ],
    },
    {
      name: t("certificates.graduation.puc"),
      description: t("certificates.types.graduation"),
      img: "pucmg-logo.png",
      imgDark: "pucmg-logo-white.png",
      url: "https://www.pucminas.br/destaques/Paginas/default.aspx",
      tags: [
        "system analysis",
        "software engineering",
        "software projects",
        "algorithms",
        "buisiness inteligence",
        "data science",
      ],
    },
    {
      name: "IBM DevOps and Software Engineering",
      description: t("certificates.types.course"),
      img: "ibm-logo.png",
      imgDark: "ibm-logo-white.png",
      url: "https://www.coursera.org/account/accomplishments/specialization/66L5N4AT8M8M",
      tags: [
        "software engineering",
        "devops",
        "ci/cd",
        "microservices",
        "git",
        "docker",
        "testing",
      ],
    },
    {
      name: "CloudAcademy DevSecOps, DevOps and Software Engineering",
      description: t("certificates.types.course"),
      img: "cloudacademy-logo.png",
      imgDark: "cloudacademy-logo-dark.png",
      url: "https://certificates.cloudacademy.com/aad6d2adc60c57b122cbe716135f4c39815347c8.pdf",
      tags: [
        "software engineering",
        "devsecops",
        "kubernetes",
        "docker",
        "sonarqube",
      ],
    },
    {
      name: "IBM Application Development using Microservices and Serverless",
      description: t("certificates.types.course"),
      img: "ibm-logo.png",
      imgDark: "ibm-logo-white.png",
      url: "https://www.coursera.org/account/accomplishments/verify/UAB7NFB4VKEJ",
      tags: [
        "software engineering",
        "microservices",
        "docker",
        "api",
        "aws lambda",
        "testing",
      ],
    },
    {
      name: "Cloud Academy Building and Deploying a Cloud Native Application",
      description: t("certificates.types.course"),
      img: "cloudacademy-logo.png",
      imgDark: "cloudacademy-logo-dark.png",
      url: "https://certificates.cloudacademy.com/0b1276b17c1933574ccec3a3cf1fefb3021796a2.pdf",
      tags: [
        "software engineering",
        "microservices",
        "devops",
        "docker",
        "linux",
        "kubernetes",
      ],
    },
    {
      name: "IBM Continuous Integration and Continuous Delivery (CI/CD)",
      description: t("certificates.types.course"),
      img: "ibm-logo.png",
      imgDark: "ibm-logo-white.png",
      url: "https://www.coursera.org/account/accomplishments/verify/SHL6AZNPP6JM",
      tags: [
        "software engineering",
        "ci/cd",
        "docker",
        "terraform",
        "jenkins",
        "GitHub Actions",
        "Artifactory",
      ],
    },

    {
      name: "Mathematics for Machine Learning and Data Science",
      description: t("certificates.types.course"),
      img: "deeplearningai-logo.png",
      imgDark: "deeplearningai-logo-white.png",
      url: "https://www.coursera.org/account/accomplishments/specialization/4UJ8AS7XCHJV",
      tags: [
        "machine learning",
        "calculus",
        "data science",
        "statistics",
        "probabilities",
        "linear algebra",
      ],
    },
    {
      name: "IBM Application Security for Developers and DevOps Professionals",
      description: t("certificates.types.course"),
      img: "ibm-logo.png",
      imgDark: "ibm-logo-white.png",
      url: "https://www.coursera.org/account/accomplishments/verify/S22XF29249EC",
      tags: ["software engineering", "owasp", "grafana", "monitoring"],
    },
    {
      name: "Cloud Academy Operations with AWS - Level 3",
      description: t("certificates.types.course"),
      img: "cloudacademy-logo.png",
      imgDark: "cloudacademy-logo-dark.png",
      url: "https://certificates.cloudacademy.com/28395c94b90526d5a05d7de61f5dc42509da5a7e.pdf",
      tags: [
        "software engineering",
        "aws",
        "cloud",
        "aws codepipeline",
        "aws codebuild",
      ],
    },
    {
      name: "IBM Monitoring and Observability for Development and DevOps",
      description: t("certificates.types.course"),
      img: "ibm-logo.png",
      imgDark: "ibm-logo-white.png",
      url: "https://www.coursera.org/account/accomplishments/verify/SVKX7AQPSXE2",
      tags: [
        "software engineering",
        "devops",
        "grafana",
        "monitoring",
        "prometheus",
      ],
    },
  ];

  return (
    <div className="App relative bg-white dark:bg-slate-900 text-black dark:text-white">
      <div className="main-page h-screen flex flex-col" id="home">
        <div className="header-section bg-white dark:bg-slate-900 z-[1001] fixed top-0 right-0 left-0 pb-2 pr-[15%] pl-[15%]">
          <nav>
            <div className="flex flex-wrap items-center justify-between mx-auto pt-4">
              <span className="self-center text-4xl font-semibold whitespace-nowrap">
                ~
              </span>
              <div
                className="hidden w-full lg:block md:w-auto"
                id="navbar-default"
              >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                  <li>
                    <a
                      href="#home"
                      className="block py-2 px-3 text-slate-700 dark:text-slate-200 rounded hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-900 md:p-0 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-500 hover:scale-110"
                      aria-current="page"
                    >
                      <Trans i18nKey="header.home" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about-me"
                      className="block py-2 px-3 text-slate-700 dark:text-slate-200 rounded hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-900 md:p-0 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-500 hover:scale-110"
                    >
                      <Trans i18nKey="header.about" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="block py-2 px-3 text-slate-700 dark:text-slate-200 rounded hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-900 md:p-0 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-500 hover:scale-110"
                    >
                      <Trans i18nKey="header.projects" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#methodology"
                      className="block py-2 px-3 text-slate-700 dark:text-slate-200 rounded hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-900 md:p-0 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-500 hover:scale-110"
                    >
                      <Trans i18nKey="header.methodology" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block py-2 px-3 text-slate-700 dark:text-slate-200 rounded hover:bg-slate-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-900 md:p-0 md:dark:hover:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent transition duration-500 hover:scale-110"
                    >
                      <Trans i18nKey="header.contact" />
                    </a>
                  </li>
                  <li>
                    <DarkModeSwitch />
                  </li>
                  <li>
                    <LanguageSwitch />
                  </li>
                </ul>
              </div>
              <div className="lg:hidden flex">
                <DarkModeSwitch className="mx-3" />
                <LanguageSwitch />
              </div>
            </div>
          </nav>
        </div>
        <div className="content-section flex flex-col grow justify-center ml-8 pt-[100px] md:pt-0 mr-5 md:mr-[15%] ml-5 md:ml-[20%]">
          <div className="title-section text-right animate-[slideLeft_1s_ease-out]">
            <p className="main-sentence text-4xl md:text-7xl font-bold">
              <Trans i18nKey="main_sentence.title" />
            </p>
            <p className="description text-slate-800 dark:text-slate-300 text-2xl md:text-4xl mt-4">
              <Trans i18nKey="main_sentence.description" />
            </p>
          </div>
        </div>
        <div className="description-section mt-8 grow justify-center pr-5 md:pr-[20%] ml-5 md:ml-[15%] animate-[slideRight_1s_ease-out]">
          <div className="description-text text-base md:text-xl text-slate-800 dark:text-slate-400 pt-8 md:pt-0">
            <p>
              <Trans
                i18nKey="description.text"
                components={{
                  underline: <span className="underline" />,
                  highlight: (
                    <span className="text-blue-700 dark:text-blue-400 font-semibold" />
                  ),
                  strong: <strong />,
                }}
              />
            </p>
          </div>
          <a href="#about-me">
            <button className="mt-8 bg-blue-500 dark:bg-blue-700 hover:bg-blue-400 dark:hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 dark:border-blue-900 hover:border-blue-500 dark:hover:border-blue-700 rounded transition duration-500 hover:scale-110">
              <Trans i18nKey="description.button" />
            </button>
          </a>
        </div>
      </div>
      <div
        className="about-page md:h-screen flex flex-col justify-center"
        id="about-me"
      >
        <div className="about-section page-section mr-[5%] ml-[5%]">
          <p className="text-3xl md:text-5xl font-bold mr-[10%] ml-[10%] mt-[70px] md:mt-0">
            <a href="#about-me" className="title group">
              <span className="title-text dark:text-white dark:group-hover:text-white md:group-hover:text-slate-600 dark:md:group-hover:text-slate-400">
                <Trans i18nKey="about.title" />
              </span>
              <span className="hashtag text-transparent group-hover:text-transparent md:group-hover:text-slate-300 dark:md:group-hover:text-slate-700">
                {" "}
                #
              </span>
            </a>
          </p>
          <div className="about-content mt-[1%] flex flex-col md:flex-row items-center">
            <div className="about-card w-full md:w-2/5 p-6 bg-slate-200 dark:bg-slate-950 flex flex-col justify-center items-center border border-slate-200 dark:border-slate-900 rounded-lg shadow">
              <img
                src="me.png"
                width="auto"
                height="200"
                alt="Vinicius Mayrink"
              />
              <h5 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Vinicius Mayrink
              </h5>
              <p className="text-slate-800 dark:text-slate-500">
                <Trans i18nKey="about.position" />
              </p>
              <div className="mt-3 flex flex-wrap justify-center">
                {mySkills.map((skill, i) => {
                  return (
                    <div
                      key={i}
                      className="inline-block relative px-2 py-1 mr-2 mb-2 font-sans text-xs font-bold text-slate-200 dark:text-white uppercase bg-slate-500 dark:bg-slate-900 rounded-md select-none whitespace-nowrap"
                    >
                      <span className="">{skill}</span>
                    </div>
                  );
                })}
              </div>
              <div className="about-actions justify-center mt-3">
                <a
                  href="CV_ViniciusMayrink_en.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="mr-4 ring ring-slate-400 dark:ring-slate-700 bg-slate-600 dark:bg-slate-800 hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-100 dark:text-slate-300 font-bold py-1 px-3 rounded transition duration-500 hover:scale-110">
                    <Trans i18nKey="about.actions.resume-english" />
                  </button>
                </a>
                <a
                  href="CV_ViniciusMayrink_ptbr.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="mr-4 ring ring-slate-400 dark:ring-slate-700 bg-slate-600 dark:bg-slate-800 hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-100 dark:text-slate-300 font-bold py-1 px-3 rounded transition duration-500 hover:scale-110">
                    <Trans i18nKey="about.actions.resume-portuguese" />
                  </button>
                </a>
              </div>
            </div>
            <div className="about-description w-5/6 mr-[10%] ml-[10%] md:mr-[2%] md:ml-[2%] text-base md:text-xl text-slate-800 dark:text-slate-400 pt-8 md:pt-0">
              <p>
                <Trans
                  i18nKey="about.paragraph-1"
                  components={{
                    underline: <span className="underline" />,
                    strong: <strong />,
                  }}
                />
              </p>
              <br />
              <p>
                <Trans
                  i18nKey="about.paragraph-2"
                  components={{
                    highlight: (
                      <span className="text-blue-700 dark:text-blue-400 font-semibold" />
                    ),
                    strong: <strong />,
                  }}
                />
              </p>
              <br />
              <p>
                <Trans
                  i18nKey="about.paragraph-3"
                  components={{
                    highlight: (
                      <span className="text-blue-700 dark:text-blue-400 font-semibold" />
                    ),
                    strong: <strong />,
                  }}
                />
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="mr-[10%] ml-[10%] md:mr-0 md:ml-0 text-xl md:text-3xl font-bold text-center mb-4">
              <Trans i18nKey="about.certifications.title" />
            </p>
            <Carousel
              responsive={certificatesCarouselResponsivity}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={6500}
              swipeable={false}
            >
              {certificates.map((certificate, i) => {
                return (
                  <Certification
                    key={i}
                    name={certificate.name}
                    description={certificate.description}
                    url={certificate.url}
                    tags={certificate.tags}
                    img={certificate.img}
                    imgDark={certificate.imgDark}
                  />
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <div
        className="projects-page md:h-screen flex flex-col justify-center"
        id="projects"
      >
        <div className="projects-section page-section mr-[5%] ml-[5%]">
          <p className="text-3xl md:text-5xl font-bold mr-[10%] ml-[10%] mt-[70px] md:mt-0">
            <a href="#projects" className="title group">
              <span className="title-text dark:text-white dark:group-hover:text-white md:group-hover:text-slate-600 dark:md:group-hover:text-slate-400">
                <Trans i18nKey="projects.title" />
              </span>
              <span className="hashtag text-transparent group-hover:text-transparent md:group-hover:text-slate-300 dark:md:group-hover:text-slate-700">
                {" "}
                #
              </span>
            </a>
          </p>
          <div className="project-samples mt-[2%] mx-2 mb-2">
            <Carousel
              responsive={projectsCarouselResponsivity}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              swipeable={false}
            >
              {projects.map((project, i) => {
                return (
                  <Project
                    key={i}
                    name={t(project.name)}
                    description={t(project.description)}
                    language={project.language}
                    codeString={project.codeString}
                    linkUrl={project.linkUrl}
                    linkDescription={t(project.linkDescription)}
                    tags={project.tags}
                  />
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <div
        className="methodology-page md:h-screen flex flex-col justify-center"
        id="methodology"
      >
        <div className="methodology-section page-section mr-[5%] ml-[5%]">
          <p className="text-3xl md:text-5xl font-bold mr-[10%] ml-[10%] mt-[70px] md:mt-0">
            <a href="#methodology" className="title group">
              <span className="title-text dark:text-white dark:group-hover:text-white md:group-hover:text-slate-600 dark:md:group-hover:text-slate-400">
                <Trans i18nKey="methodology.title" />
              </span>
              <span className="hashtag text-transparent group-hover:text-transparent md:group-hover:text-slate-300 dark:md:group-hover:text-slate-700">
                {" "}
                #
              </span>
            </a>
          </p>
          <div className="methodology-samples mt-[2%] mx-2 mb-2 flex flex-col items-center">
            <div className="methodology-card p-8 mx-2 bg-slate-200 dark:bg-slate-950 border border-slate-200 dark:border-slate-900 rounded-lg shadow w-full overflow-auto">
              <div className="methodology-image min-w-[800px] flex flex-col items-center">
                <img
                  className="hidden dark:block"
                  src="code-methodology.png"
                  alt="My Work Methodology"
                />
                <img
                  className="block dark:hidden"
                  src="code-methodology-white.png"
                  alt="My Work Methodology"
                />
              </div>
            </div>
            <div className="methodoloy-description mt-6 text-base md:text-xl text-slate-800 dark:text-slate-400">
              <p>
                <Trans
                  i18nKey="methodology.paragraph-1"
                  components={{
                    underline: <span className="underline" />,
                    highlight: (
                      <span className="text-blue-700 dark:text-blue-400 font-semibold" />
                    ),
                    strong: <strong />,
                  }}
                />
              </p>
              <br />
              <p>
                <Trans
                  i18nKey="methodology.paragraph-2"
                  components={{
                    underline: <span className="underline" />,
                    highlight: (
                      <span className="text-blue-700 dark:text-blue-400 font-semibold" />
                    ),
                    strong: <strong />,
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="contact-page h-screen flex flex-col justify-end"
        id="contact"
      >
        <div className="contact-section page-section mr-[5%] ml-[5%] h-2/5 flex flex-col justify-self-center items-center">
          <p className="text-3xl md:text-5xl font-bold mr-[10%] ml-[10%] mt-[70px] md:mt-0">
            <Trans i18nKey="contact.title" />
          </p>
          <div className="platforms mt-5 flex">
            <a
              href="https://www.linkedin.com/in/vncsmyrnk"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                className="mx-2 md:mx-5"
                color="#334155"
                size="4rem"
              />
            </a>
            <a
              href="mailto:vmayrink12@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope
                className="mx-2 md:mx-5"
                color="#334155"
                size="4rem"
              />
            </a>
            <a
              href="https://github.com/vncsmyrnk"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="mx-2 md:mx-5" color="#334155" size="4rem" />
            </a>
            <a href="https://wa.me/5531984805330" target="_blank">
              <IoLogoWhatsapp
                className="mx-2 md:mx-5"
                color="#334155"
                size="4rem"
              />
            </a>
          </div>
        </div>
        <div className="footer-section page-section w-full bg-slate-300 dark:bg-slate-950 mt-[5%] flex flex-col h-1/6 items-center justify-center">
          <p className="dark:text-slate-700">
            <Trans i18nKey="footer.website-tools" />
          </p>
          <div className="footer-tools flex mt-2">
            <a href="https://react.dev" target="_blank">
              <FaReact className="mx-2" color="#334155" size="2rem" />
            </a>
            <a href="https://vitejs.dev" target="_blank">
              <SiVite className="mx-2" color="#334155" size="2rem" />
            </a>
            <a href="https://github.com/vncsmyrnk/portfolio" target="_blank">
              <FaGithub className="mx-2" color="#334155" size="2rem" />
            </a>
          </div>
          <p className="text-slate-500 dark:text-slate-800 mt-3 text-sm">
            &copy; {new Date().getFullYear()} Vinicius Mayrink
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

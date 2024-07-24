
import './App.css';
import './generic.css'
import { Link, Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <div className='left-panel full-height'>
        <div className='left-panel-inside full-height'>
          <div className='div-title flex-col soft-white'>
            <h1 id='my-name'>ADRIÁN CARBONELL</h1>
            <h2>SOFTWARE ENGINEER</h2>
          </div>
          <ul className="flex-col soft-white">
            <Link
              activeClass="active-nav" 
              to="experience" 
              spy={true}
              offset={-20} 
              smooth={true} 
              duration={500}
              
            >
              <li class="nav-item" >
                EXPERIENCE
              </li>
            </Link>
            <Link
              activeClass="active-nav" 
              to="projects" 
              spy={true} 
              smooth={true}
              duration={500}
            >
              <li>
                PROJECTS
              </li>
            
            </Link>
            
            <Link
              activeClass="active-nav" 
              to="education" 
              spy={true}
              offset={-20}  
              smooth={true} 
              duration={500} 
            >
              <li>
                EDUCATION
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className='left-panel-placeholder full-height'>

      </div>
      <div className='right-panel'>
        <div className='right-panel-inside flex-col'>
          <div className='quote flex-col'>
            <p>‘‘Luck is what happens when preparation meets opportunity.’’</p>
            <p>- Seneca</p>
          </div>
          <div className='paragraph dark-text'>
            <p>
              Welcome to my portfolio! I am a passionate software engineer dedicated to exploring the vast potential of deep learning and mastering the intricacies of backend development. My journey in technology is driven by a relentless pursuit of excellence and a commitment to continuous professional growth.
            </p>
            <p>
              Here, you’ll find a showcase of my work, highlighting my technical expertise, personal projects, and the strides I’ve made in the world of software engineering. Thank you for visiting, and I look forward to connecting with fellow enthusiasts and collaborators in this exciting field.
            </p>
          </div>
          <Element name="experience">
          <div className='experience-section flex-col'>
          
            <h2 className='oswald title soft-white'>EXPERIENCE</h2>
            <div className='job soft-white-2'>
              <div className='job-left'>
                <p className='sub-title'>Zeekr Tech Europe</p>
                <p className='sub-title'>Software Engineer</p>
                <br/>
                <p>Sept 2023 - Today</p>
              </div>
              <p className='paragraph job-right'>
              I deployed a full-scale production application, evolving it from a prototype with a team of three developers. I developed full-stack applications using Kotlin and Java for the frontend, Golang for the backend, and managed the infrastructure with Terraform. Additionally, I integrated LLM solutions into production apps and gained experience with Azure OpenAI services. Through this project, I learned to configure Azure Cloud Services using Terraform and integrate them into applications. I have worked with both large and small agile teams, ranging from 20 to 3 members, always prioritizing an open-to-collaboration environment.
              </p>
            </div>
            <div className='job soft-white-2'>
              <div className='job-left'>
                <p className='sub-title'>MicrocementPRO</p>
                <p className='sub-title'>Full-Stack Developer</p>
                <br/>
                <p>June 2023 - Sept 2023</p>
              </div>
              <p className='paragraph job-right'>
              I built a website application independently for a client, using React for the frontend and deploying a separate backend with a PostgreSQL database. I maintained constant communication with the client to gather feedback and ensure their satisfaction. Additionally, I collaborated with an SEO expert to maximize exposure and help the client expand their business outside the UK.
              </p>
            </div>
            <div className='job soft-white-2'>
              <div className='job-left'>
                <p className='sub-title'>Unit4</p>
                <p className='sub-title'>Software Engineer Intern</p>
                <br/>
                <p>July 2022 - Dec 2022</p>
              </div>
              <p className='paragraph job-right'>
              I built a website application using .NET and Azure DevOps while working in an international team that emphasized Agile methodologies and peer programming. We followed Test-Driven Development (TDD) and used xUnit for testing the application.
              </p>
            </div>
          </div>
          </Element>
          <Element name="projects">
          <div className='experience-section flex-col'>
            <h2 className='oswald title soft-white'>EXPERIENCE</h2>
            <div className='job soft-white-2'>
              <div className='job-left'>
                <p className='sub-title'>Zeekr Tech Europe</p>
                <p className='sub-title'>Software Engineer</p>
                <br/>
                <p>Sept 2023 - Today</p>
              </div>
              <p className='paragraph job-right'>
              I deployed a full-scale production application, evolving it from a prototype with a team of three developers. I developed full-stack applications using Kotlin and Java for the frontend, Golang for the backend, and managed the infrastructure with Terraform. Additionally, I integrated LLM solutions into production apps and gained experience with Azure OpenAI services. Through this project, I learned to configure Azure Cloud Services using Terraform and integrate them into applications. I have worked with both large and small agile teams, ranging from 20 to 3 members, always prioritizing an open-to-collaboration environment.
              </p>
            </div>
            <div className='job soft-white-2'>
              <div className='job-left'>
                <p className='sub-title'>MicrocementPRO</p>
                <p className='sub-title'>Full-Stack Developer</p>
                <br/>
                <p>June 2023 - Sept 2023</p>
              </div>
              <p className='paragraph job-right'>
              I built a website application independently for a client, using React for the frontend and deploying a separate backend with a PostgreSQL database. I maintained constant communication with the client to gather feedback and ensure their satisfaction. Additionally, I collaborated with an SEO expert to maximize exposure and help the client expand their business outside the UK.
              </p>
            </div>
            <div className='job soft-white-2'>
              <div className='job-left'>
                <p className='sub-title'>Unit4</p>
                <p className='sub-title'>Software Engineer Intern</p>
                <br/>
                <p>July 2022 - Dec 2022</p>
              </div>
              <p className='paragraph job-right'>
              I built a website application using .NET and Azure DevOps while working in an international team that emphasized Agile methodologies and peer programming. We followed Test-Driven Development (TDD) and used xUnit for testing the application.
              </p>
            </div>
          </div>
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App;

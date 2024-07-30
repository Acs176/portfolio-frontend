
import './App.css';
import Job from './components/Job';
import './generic.css'
import { Link, Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import useVisibility from './useVisibility';
import { useEffect, useRef, useState } from 'react';
import useStickiness from './useStickiness';

function App() {
  const extraRef = useRef();
  const [isProjectsVisible, projRef] = useVisibility();
  const [isExperienceVisible, expRef] = useVisibility();
  const [isSticky] = useStickiness(expRef, projRef);
  const [isProjSticky] = useStickiness(projRef, extraRef);
  return (
    <div className="App">
      <div className='left-panel'>
        <div className='left-panel-inside'>
          <div className='div-title flex-col soft-white'>
            <h1 id='my-name'>ADRIÁN CARBONELL</h1>
            <h2>SOFTWARE ENGINEER</h2>
          </div>
          <ul className="dark-text-2">
            <Link
              activeClass="nav-item active-nav" 
              to="experience" 
              spy={true}
              offset={-20} 
              smooth={true} 
              duration={500}
              className="nav-item"
            >
              <li>
                EXPERIENCE
              </li>
            </Link>
            <Link
              activeClass="active-nav" 
              to="projects" 
              spy={true} 
              smooth={true}
              duration={500}
              className="nav-item"
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
              className="nav-item" 
            >
              <li>
                EDUCATION
              </li>
            </Link>
          </ul>
          <div className='repeated flex-col'>
            <div className='quote flex-col soft-white-3'>
              <p>‘‘Luck is what happens when preparation meets opportunity.’’</p>
              <p>- Seneca</p>
            </div>
            <div className='paragraph soft-white-3'>
              <p>
                I am a passionate software engineer dedicated to deep learning and application development. My journey in technology is driven by a pursuit of excellence and a commitment to continuous professional growth.
              </p>
            
            </div>
            
          </div>
          <Link
          activeClass="" 
          to="content" 
          spy={true}
          offset={-50}  
          smooth={true} 
          duration={500}
          className="arrow-down" 
          >
          <FontAwesomeIcon size="xl" icon={faChevronDown} />
          </Link>
          
        </div>
      </div>
      <div className='left-panel-placeholder full-height'>

      </div>
      <div className='right-panel'>
        <div className='right-panel-inside flex-col'>
          
          <div className='quote flex-col repeated-right'>
            
            <p>‘‘Luck is what happens when preparation meets opportunity.’’</p>
            <p>- Seneca</p>
          </div>
          <div className='paragraph dark-text repeated-right'>
            <p>
              Welcome to my portfolio! I am a passionate software engineer dedicated to exploring the vast potential of deep learning and mastering the intricacies of backend development. My journey in technology is driven by a relentless pursuit of excellence and a commitment to continuous professional growth.
            </p>
            <p>
              Here, you’ll find a showcase of my work, highlighting my technical expertise, personal projects, and the strides I’ve made in the world of software engineering. Thank you for visiting, and I look forward to connecting with fellow enthusiasts and collaborators in this exciting field.
            </p>
          </div>
          <Element name="experience">
          <Element name="content"></Element>
          <div className='experience-section flex-col'>
            <div className={isSticky ? 'sticky' : ''}>
              <h2 ref={expRef} className = {isExperienceVisible ? 'highlight oswald title' : 'oswald title'} >EXPERIENCE</h2>
            </div>
           
            <Job
              company={"Zeekr Tech Europe"}
              position={"Software Engineer"}
              duration={"Sept 2023 - Today"}
              description={"I led the development of a full-scale production application from a prototype, working with a team of three developers. I used Kotlin and Java for the frontend, Golang for the backend, and managed infrastructure with Terraform. I integrated LLM solutions and Azure OpenAI services into production apps. I configured Azure Cloud Services using Terraform and integrated them into applications."}
            />
            <Job
              company={"Microcement PRO"}
              position={"Full-Stack Developer"}
              duration={"June 2023 - Sept 2023"}
              description={"I built a website application independently for a client, using React for the frontend and deploying a separate backend with a PostgreSQL database. I maintained constant communication with the client to gather feedback and ensure their satisfaction. Additionally, I collaborated with an SEO expert to maximize exposure and help the client expand their business outside the UK."}
            />
            <Job
              company={"Unit4"}
              position={"Software Engineer Intern"}
              duration={"July 2022 - Dec 2022"}
              description={"I built a website application using .NET and Azure DevOps while working in an international team that emphasized Agile methodologies and peer programming. We followed Test-Driven Development (TDD) and used xUnit for testing the application."}
            />
          </div>
          </Element>
          <Element name="projects">
          <div className='experience-section flex-col'>
            <div className={isProjSticky ? 'sticky' : ''}>
            <h2 ref={projRef} className={isProjectsVisible ? 'highlight oswald title' : 'oswald title'}>PROJECTS</h2>
            </div>
            
            <div className='project flex-col soft-white-2'>
              <p className='sub-title'>
              AI System to aid Breast Cancer detection
              </p>
              <div className='project-content'>
                <div className='img-div'>
                  <img src="imgs/aisystem.png" alt="ai system screenshot"></img>
                </div>
                <p className='paragraph'>Various known vision models were trained using Transfer Learning for the
task of image classification. A custom model was developed and trained, making it perform better than some well
known models. A dataset was treated and curated for the training. After obtaining the results, a UI was developed to
allow professionals to upload images and get classification from the best performing models.</p>
              </div>
            </div>
            <div className='project flex-col soft-white-2'>
              <p className='sub-title'>
              CNNs through colorrectal histology data
              </p>
              <div className='project-content'>
                <div className='img-div'>
                  <img ref={extraRef} src="imgs/cnn.png" alt="ai system screenshot"></img>
                </div>
                <p className='paragraph'>In this study, I explored the use of CNNs for analyzing colorectal histology
images. The study was focused on understanding different structures and components of CNNs and how they can be
used to extract important features from the tissue samples.</p>
                
              </div>
              </div>
          </div>
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App;


import './App.css';
import Job from './components/Job';
import './generic.css'
import { Element, Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import useVisibility from './useVisibility';
import { useEffect, useRef, useState } from 'react';
import useStickiness from './useStickiness';
import quotes from "./data/quotes.json"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

function App() {
  const extraRef = useRef();
  const [isProjectsVisible, projRef] = useVisibility();
  const [isExperienceVisible, expRef] = useVisibility();
  const [isEducationVisible, eduRef] = useVisibility();
  const [isSticky] = useStickiness(expRef, projRef);
  const [isProjSticky] = useStickiness(projRef, eduRef);
  const [isEduSticky] = useStickiness(eduRef, extraRef);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const rightPanelRef = useRef();
  const leftPanelRef = useRef();
  const staggerSpeed = 1;
  const animationDuration = 1.5;

  gsap.registerPlugin(ScrollTrigger);

  function genRandNum(min, max) {
    const rand = Math.floor(min + Math.random() * (max - min));
    return rand
  }

  useGSAP(() => {
    gsap.from('.fade-in', {
      x: 200,
      duration: animationDuration,
      stagger: {
        each: staggerSpeed
      }
    });
    gsap.from('.fade-in', {
      opacity: 0,
      ease: "power1.in",
      duration: animationDuration,
      stagger: {
        each: staggerSpeed
      }
    })

    const elements = document.querySelectorAll(".animate-on-scroll");

    elements.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        ease: "power1.in",
        duration: animationDuration,
        scrollTrigger: {
          trigger: el, // Trigger for each individual element
          start: "top 80%", // Start when the element is in the 80% of the viewport
          toggleActions: "play none none none", // Play animation when in view
        },
      });
      gsap.from(el, {
        x: 200,
        duration: animationDuration,
        scrollTrigger: {
          trigger: el, // Trigger for each individual element
          start: "top 80%", // Start when the element is in the 80% of the viewport
          toggleActions: "play none none none", // Play animation when in view
        },
      });
    });
    
  },{scope: rightPanelRef});

  useGSAP(() => {
    gsap.from('.fade-in', {
      x: -200,
      duration: animationDuration,
      stagger: {
        each: staggerSpeed
      }
    });
    gsap.from('.fade-in', {
      opacity: 0,
      ease: "power1.in",
      duration: animationDuration,
      stagger: {
        each: staggerSpeed
      }
    })
    gsap.from('.link-container', {
      x: -200,
      duration: animationDuration,
      opacity: 0,
      ease: "power1.out",
      delay: 1
    })
    gsap.from('.bounce', {
      x: 200,
      opacity: 0,
      duration: animationDuration,
      ease: "bounce.out",
      delay: 2
    })
    gsap.from('.fade-left', {
      x: 200,
      duration: animationDuration,
      delay: 3
    });
    gsap.from('.fade-left', {
      opacity: 0,
      ease: "power1.in",
      duration: animationDuration,
      delay: 3
    })

  },{scope: leftPanelRef});

  

  useEffect(() => {
    const interval = setInterval(() => {
      // Wait for fade-out animation to finish before changing text
      setIsFading(true);
      setTimeout(() => { 
        setQuoteIndex(genRandNum(0, quotes.length));
        // change quote, wait for fade in to finish
        setTimeout(() => {
          setIsFading(false);
        }, 1500)
      }, 1500);

      
    }, 10000);
  
    return () => clearInterval(interval); // prevent memory leaks
  }, [])

  return (
    <div className="App">
      <div className='left-panel'>
        <div ref={leftPanelRef} className='left-panel-inside'>
          <div className='div-title flex-col soft-white'>
            <h1 id='my-name' className='fade-in'
            >
              ADRIÁN CARBONELL
            </h1>
            <h2 
            className='fade-in'>
              SOFTWARE ENGINEER
            </h2>
          </div>
          <ul 
          className="dark-text-2 fade-in"
          >
            <Link
              activeClass="active-nav" 
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
          <div 
          className="link-container"
          >
          <a href="https://www.linkedin.com/in/adr-dev" target="_blank">
            <img src="imgs/linkedin.png" alt="LinkedIn"/>
          </a>
          <a href="https://github.com/Acs176" target="_blank">
            <img src="imgs/github.png" alt="GitHub"/>
          </a>
        </div>
          <div className='repeated flex-col'>
            <div className='quote-wrapper flex-col soft-white-3 '>
              <div className="quote-placeholder">
                <p>‘‘{quotes[4].quote}’’</p>
                <p>- {quotes[4].author}</p>
              </div>
              <div className={`quote bounce flex-col ${isFading ? 'fading' : ''}`}>
                <p>‘‘ {quotes[quoteIndex].quote} ’’</p>
                <p>- {quotes[quoteIndex].author}</p>
              </div>
            </div>
            
            <div className='paragraph soft-white-3 fade-left'>
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
        <div ref={rightPanelRef} className='right-panel-inside flex-col'>
          <div className='quote-wrapper repeated-right'>
              <div className="quote-placeholder">
                <p>‘‘ {quotes[4].quote} ’’</p>
                <p>- {quotes[4].author}</p>
              </div>
            <div 
            className={`quote flex-col ${isFading ? 'fading' : ''} fade-in`}
            >
              
              <p>‘‘ {quotes[quoteIndex].quote} ’’</p>
              <p>- {quotes[quoteIndex].author}</p>
            </div>
          </div>
          <div
          className='paragraph dark-text repeated-right fade-in'
          >
            <p>
              Welcome to my portfolio! I am a passionate software engineer dedicated to exploring the vast potential of deep learning and mastering the intricacies of backend development. My journey in technology is driven by a relentless pursuit of excellence and a commitment to continuous professional growth.
            </p>
            <p>
              Here, you’ll find a showcase of my work, highlighting my technical expertise, personal projects, and the strides I’ve made in the world of software engineering. Thank you for visiting, and I look forward to connecting with fellow enthusiasts and collaborators in this exciting field.
            </p>
          </div>
          <Element name="experience">
          <Element name="content"></Element>
          <div 
          className='experience-section flex-col fade-in'
          >
            <div className={isSticky ? 'sticky' : ''}>
              <h2 ref={expRef} className = {isExperienceVisible ? 'highlight oswald title' : 'oswald title'} >EXPERIENCE</h2>
            </div>
           <LinkRouter to="/zeekr">
            <Job
              company={"Zeekr Tech Europe"}
              position={"Software Engineer"}
              duration={"Sept 2023 - Today"}
              description={"I led the development of a full-scale production application from a prototype, working with a team of three developers. I used Kotlin and Java for the frontend, Golang for the backend, and managed infrastructure with Terraform. I integrated LLM solutions and Azure OpenAI services into production apps. I configured Azure Cloud Services using Terraform and integrated them into applications."}
            />
            </LinkRouter>
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
          <div 
          className='experience-section flex-col animate-on-scroll'
          >
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

          <Element name="education">
          <div 
          className='education-section flex-col animate-on-scroll'
          >
            <div className={isEduSticky ? 'sticky' : ''}>
            <h2 ref={eduRef} className={isEducationVisible ? 'highlight oswald title' : 'oswald title'}>EDUCATION</h2>
            </div>
            
            <div className='study flex-col soft-white-2'>
              <p className='sub-title'>
              B.Sc. Computer Science - Universidad de Alicante
              </p>
              <div className='study-content'>
                <p className='paragraph'>Sept 2019 - June 2023</p>
              </div>
            </div>
            <div className='study flex-col soft-white-2'>
              <p className='sub-title'>
              (Erasmus+) Software Engineering - University of Skövde
              </p>
              <div className='study-content'>
                <p className='paragraph'>Sept 2021 - Jan 2022.</p>
                
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

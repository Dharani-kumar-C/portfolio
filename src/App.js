//App.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle,faHtml5,faCss3,faJs,faReact, faSquareWhatsapp
  
 } from '@fortawesome/free-brands-svg-icons';
import './App.css'

const App = () => {
    

    return (
        <div className="portfolio-container">
            <header>
                <div className="profile-photo"></div>
                <div className="header-content">
                    <h1> Hello , I am Dharani kumar C </h1>
                    <h2>as Software developer</h2>
                </div>
            </header>
            <div className="content">
                <section className="about">
                    <h1>About Me</h1>
                    <p>
                        Hello! I'm Dharani kumar C, </p>
                        <p> A passionate 
                        web developer with a strong
                        foundation in React and JavaScript.
                        I love building engaging and interactive
                        web applications.Let's create something 
                        amazing together!
                    </p>
                </section>
                <section className="projects">
                    <h1>Projects</h1>
                    <div className="project-tiles">
                        <h2>E-commerce Website</h2>
                        <p>
                        Creating an E-commerce website using JavaScript, HTML, and CSS involves building a dynamic and visually appealing platform for online shopping. JavaScript will be utilized for interactive features, HTML for structuring content, and CSS for styling the layout. Additionally, APIs (Application Programming Interfaces) will be integrated to enable functionalities like payment gateways, product catalog updates, and user authentication. This combination of technologies ensures a seamless and responsive user experience, making the E-commerce website both user-friendly and capable of connecting with external services for enhanced functionality.
                        </p>
                        <h2>popup modal box</h2>
                        <p>
                        Developed a popup modal box feature using HTML, CSS, and JavaScript to enhance user experience on a website .
                        </p>
                            
                        
                    </div>
                </section>
                <section className="skillset">
                    <h1>Skillset</h1>
                    <div className="palettes">
                        <div>
                            <ul>
                              <p>
                              <FontAwesomeIcon icon={faHtml5} size="2x"  />
                              <p>HTML</p>
                              </p>
                              <p>
                              <FontAwesomeIcon icon={faCss3} size="2x"  />
                               <p>CSS</p> 
                                </p>
                              <p>
                              <FontAwesomeIcon icon={faJs} size="2x"  />
                              <p>JavaScript</p>
                              </p>
                              <p>
                              <FontAwesomeIcon icon={faReact} size="2x"  />
                              <p>React</p>
                              </p>
        
                            </ul>

                        </div>
                    </div>
                </section>
                
                <section className="contact">
      <div className="header">
        <h1>Contact</h1>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faSquareWhatsapp} size="2x" />
          <p>9597766122</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faGoogle} size="2x" />
          <p>kumardharani863@gmail.com</p>
        </div>
      </div>
      <div className="social-icons">
        <div className="social-item">
          <a href="https://www.linkedin.com/in/dharani-kumar-c-09a607203" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <p>LinkedIn</p>
        </div>
        <div className="social-item">
          <a href="https://github.com/Dharani-kumar-C" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <p>GitHub</p>
        </div>
      </div>
    </section>
            </div>
        </div>
    );
};



export default App;


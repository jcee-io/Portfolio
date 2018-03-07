import React, { Component } from 'react';
import Featured from '../projects/projects';
import FE from '../projects/FEprojects';
import BE from '../projects/BEprojects';
import FS from '../projects/FSprojects';
import DV from '../projects/DVprojects';
import Tools from '../projects/tools';

import $ from 'jquery';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">jCruzz</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#intro">Intro</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/jcruzz">Github</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/jcruzz/">LinkedIn</a>
        </li>
      </ul>
    </div>
  </nav>
);

const Intro = () => (
  <div id="intro">
    <p id="header-1">Hello, I'm Justin.</p>
    <p id="header-2">
    I'm a software engineer based in the San Francisco Bay Area.
    </p>
  </div>
);

const About = () => (
  <div id="about">
    <div>
      <h1>About Me</h1>
      <p>
        I see myself as an inventor that uses the world of coding as my sandbox. There are many forms
        of technology I would like to explore, reach my full potential, and fulfill my passion in 
        making new things and immersing myself in technology.
        <br/><br/>
        I am experienced in developing full-stack applications, creating microservices, and designing tools
        to enhance development. My projects are divided into four categories, Frontend, Backend, Full-Stack,
        Data Visualization, and Tools. I invite <strong>you</strong>, the viewer, to take a look at my projects. 
      </p>
    </div>
  </div>
);
const ProjectEntry = props => {
  let name = props.name.replace(/ /g,'-');
  name = name.replace(/./g,'-');

  let background = props.thumbnail ? `url('${props.thumbnail}')` : 'url(\'https://i.imgur.com/Ey20XRP.png\')';

  $('head').append(`
    <style>
      #outer-${name} {
        background: ${background};
        background-size: 100% 100%;
      }


      #${name} {
        background: lightgrey;
        z-index: 1;
        width: 100%;
        height: 100%;
        font-size: 30px;
        padding-top: 75px;
        transition: color 0.3s, opacity 0.5s;
      }


      #${name}:hover {
        opacity: 0.2;
        color: transparent;
      }
    </style>
  `);

  return (
    <div id={`outer-${name}`}className="project-entry">
      <div id={name}>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

const Projects = props => (
  <div id="projects">
    <h1>Projects</h1>
    <div id="project-desc-filter-buttons">
      <button className="desc btn btn-outline-light active">Gallery View</button>
      <button className="desc btn btn-outline-light">Descriptive View</button>
    </div>
    <div id="project-filter-buttons">
      <button onClick={props.handler} className="filter btn btn-outline-light active">Featured</button>
      <button onClick={props.handler} className="filter btn btn-outline-light">Frontend</button>
      <button onClick={props.handler} className="filter btn btn-outline-light">Backend</button>
      <button onClick={props.handler} className="filter btn btn-outline-light">Full Stack</button>
      <button onClick={props.handler} className="filter btn btn-outline-light">Data Visualization</button>
      <button onClick={props.handler} className="filter btn btn-outline-light">Tools</button>
    </div>
    <div id="project-list">
      {props.projects.map(project => 
        <div className="project-entry-outer">
          <ProjectEntry {...project}/>
          <div id="project-buttons">
            <a href={project.github || '#'} className="btn btn-outline-secondary">Github</a>
            {project.liveLink ? 
              <a href={project.liveLink} className="btn btn-outline-secondary">Live Link</a> : null
            }
          </div>
        </div>
      )}
    </div>
  </div>
);

const Contact = () => (
  <div id="contact">
    <h1>Contact Me</h1>
    <form className="form-group" action="/form" method="POST">
      <label>Name: <br/><input className="form-control"/></label>
      <br/>
      <label>Email: <br /><input className="form-control"/></label>
      <br/>
      <label>Message: <br/><textarea className="form-control"/></label>
      <br/>
      <input className="btn btn-default btn-lg" type="submit"/>
    </form>
  </div>
);

class App extends Component {
  constructor() {
    super();

    this.state = {
      filter: 'featured',
      projects: Featured
    };
  }

  handleFilter(event) {
    const node = event.target;
    const filter = event.target.textContent;
    let projects;


    $('.filter').each(function() {
      $(this).removeClass('active');
    });
    
    $(node).addClass('active');

    if(filter === 'Featured') {
      projects = Featured;
    } else if (filter === 'Frontend') {
      projects = FE;
    } else if (filter === 'Backend') {
      projects = BE;
    } else if (filter === 'Full Stack') {
      projects = FS;
    } else if (filter === 'Data Visualization') {
      projects = DV;
    } else if (filter === 'Tools') {
      projects = Tools;
    } 

    this.setState({ projects });
  }

  render() {
    return (
      <div>
        <Header />
        <Intro />
        <About />
        <Projects projects={this.state.projects} handler={this.handleFilter.bind(this)} />
        <Contact />
      </div>
    );
  }
}
export default App;
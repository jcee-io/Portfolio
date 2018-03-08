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
          <a className="nav-link" target="blank_" href="https://github.com/jcruzz">Github</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="blank_" href="https://www.linkedin.com/in/jcruzz/">LinkedIn</a>
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
        making new things and immersing myself in technology. I've developed full-stack applications, creating microservices, and designing tools
        to enhance development. 
      </p>
    </div>
  </div>
);
const ProjectEntry = props => {
  let name = props.name.replace(/\s+/g,'-');
  name = name.replace(/\./g,'-');

  let background = props.thumbnail ? `url('${props.thumbnail}')` : 'url(\'https://i.imgur.com/Ey20XRP.png\')';

  $('head').append(`
    <style>
      #${name} {
        background: ${background};
        background-size: 100% 100%;
        width: 400px;
        height: 200px;
      }
    </style>
  `);

  return (
    <div className="project-entry">
      <h3>{props.name}</h3>
      <div id={`${name}`} >
      </div>
        <div id="project-buttons">
          <a href={props.github || '#'} target="blank_" className="btn btn-outline-secondary">Github</a>
          {props.liveLink ? 
            <a href={props.liveLink} target="blank_" className="btn btn-outline-secondary">Live Link</a> : null
          }
        </div>
    </div>
  );
}

const Projects = props => (
  <div id="projects">
    <h1>Projects</h1>
    <div id="project-desc-filter-buttons">
      <button onClick={props.viewHandler} className="desc btn btn-outline-light active">Gallery View</button>
      <button onClick={props.viewHandler} className="desc btn btn-outline-light">Descriptive View</button>
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
        </div>
      )}
    </div>
  </div>
);

const Contact = () => (
  <div id="contact">
    <h1>Contact Me</h1>
    <h2>Email: just.v.cruz@gmail.com</h2>
    <h2>Other Sites: <a target="blank_" href="https://www.linkedin.com/in/jcruzz/">LinkedIn</a> | <a target="blank_" href="https://github.com/jcruzz">Github</a></h2>
    <p style={{margin: '10% 20% 0 20%'}}>Created By Justin Cruz @ 2018. This website and all projects shown are open source. Feel free to contribute at your convenience.</p>
  </div>
);

class App extends Component {
  constructor() {
    super();

    this.state = {
      view: 'gallery',
      projects: Featured
    };
  }

  handleView(event) {
    const node = event.target;
    const view = event.target.textContent;

    $('.desc').each(function() {
      $(this).removeClass('active');
    });
    
    $(node).addClass('active');

    this.setState({ view });
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
        <Projects projects={this.state.projects} viewHandler={this.handleView.bind(this)} handler={this.handleFilter.bind(this)} />
        <Contact />
      </div>
    );
  }
}
export default App;
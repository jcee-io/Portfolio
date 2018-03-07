import React, { Component } from 'react';
import projectList from '../projects';
import $ from 'jquery';

const Header = () => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">jCruzz</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact Me</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
      </ul>
    </div>
  </nav>
);

const Intro = () => (
  <div id="intro" className="container">
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

  $('head').append(`
    <style>
      #${name} {
        transition: background 1s;
      }

      #${name}:hover {
        background: green;
      }
    </style>
  `);

  return (
      <div id={name} className="project-entry jumbotron">
        <h2>{props.name}</h2>
      </div>
  );
}

const Projects = () => (
  <div id="projects">
    <h1>Projects</h1>
    <div>
      {projectList.map(project => 
        <ProjectEntry
          name={project.name}
        />
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

const App = () => (
  <div>
    <Header />
    <Intro />
    <About />
    <Projects />
    <Contact />
  </div>
);

export default App;
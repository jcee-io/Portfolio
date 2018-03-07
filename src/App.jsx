import React, { Component } from 'react';
import projectList from '../projects';
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
        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus a tellus scelerisque feugiat. In ut aliquet nunc, at ullamcorper nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus diam nisl, ultricies nec tortor tincidunt, dignissim tempus lacus. Praesent ultricies mauris quis nibh sollicitudin rutrum. Cras mattis finibus rutrum. Donec eleifend purus at mauris blandit, vel sollicitudin urna viverra. Nunc ornare, turpis non dignissim iaculis, quam augue bibendum lorem, ut maximus nibh diam vel elit. Morbi eu sem quis ligula blandit tempor. Pellentesque in lectus a nunc lacinia laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce sed ante vestibulum, pulvinar massa quis, suscipit magna. Pellentesque vitae tristique ante.
      </p>
    </div>
  </div>
);
const ProjectEntry = props => (
  <div className="project-entry jumbotron">
    <h2>{props.name}</h2>
    <p>image</p>
    <p>{props.description}</p>
  </div>
);

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
    <form action="/form" method="POST">
      <label>Name: <br/><input /></label>
      <br/>
      <label>Email: <br /><input /></label>
      <br/>
      <label>Message: <br/><textarea /></label>
      <br/>
      <input type="submit"/>
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
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import { mainProjects, extraProjects } from '../projects';
import Demarcator from './demarcator';

const images = {
  // eslint-disable-next-line global-require
  illume: require('../images/illume.jpg'),
  // eslint-disable-next-line global-require
  docgenie: require('../images/docgenie.png'),
};

const Projects = () => (
  <div className="projects-container">
    <Header />
    <section className="projects">
      <Demarcator text="My Projects" />
      <ul className="main-projects">
        {mainProjects.map(({ title, website, description, technologies, github }) => (
          <li key={title}>
            <div className="wide-card">
              <img className="image-section" src={images[title].default} alt="" />
              <div className="details-section">
                <div className="title-section">
                  <h3>{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
                  <div className="links">
                    <a href={website} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="icon" />
                    </a>
                    <a href={github} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
                  </div>
                </div>
                <div className="description">{description}</div>
                <div className="tech-ul">
                  {technologies.map((tech) => (
                    <div className="tech-li" key={tech}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Demarcator text="More" />

      <ul className="extra-projects">
        {extraProjects.map(({ title, website, description, technologies, github }) => (
          <li key={title}>
            <div className="small-card">
              <div className="details-section">
                <div className="title-section">
                  <h3>{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
                  <div className="links">
                    <a href={website} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="icon" />
                    </a>
                    <a href={github} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
                  </div>
                </div>
                <div className="description">{description}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Projects;

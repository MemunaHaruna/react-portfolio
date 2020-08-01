/* eslint-disable import/no-dynamic-require */
import React from 'react';
import Header from './Header';
import { mainProjects, extraProjects } from '../projects';
import Demarcator from './demarcator';

const images = {
  // eslint-disable-next-line global-require
  illume: require('../images/illume.png'),
  // eslint-disable-next-line global-require
  docgenie: require('../images/docgenie.png'),
};

const Projects = () => (
  <div className="projects-container">
    <Header />
    <section className="projects">
      <Demarcator text="My Projects" />
      <ul className="main-projects">
        {mainProjects.map(({ title, url, description, technologies }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noreferrer">
              <div className="wide-card">
                <img className="image-section" src={images[title].default} alt="" />
                <div className="details-section">
                  <h3>{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
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
            </a>
          </li>
        ))}
      </ul>

      <Demarcator text="More" />

      <ul className="extra-projects">
        {extraProjects.map(({ title, url, description, technologies }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noreferrer">
              <div className="small-card">
                <div className="details-section">
                  <h5>{title.charAt(0).toUpperCase() + title.slice(1)}</h5>
                  <div className="description">{description}</div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Projects;

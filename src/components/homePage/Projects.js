// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from "react-bootstrap/Badge";
import Img from "react-cool-img";

const myProjects = [
  {
    image: "/images/technovani.png",
    title: "Website: TechnoVani",
    description:
      "This website is made on Laravel framework on PHP language with the help of phpmyadmin (MySQL) database.",
    source: "",
    demoLink: "https://technovani.com/",
	badge: "PHP, MySQL",
    liveweb: "",
	
  },
  {
    image: "/images/nib.png",
    title: "Website: NIB",
    description:
      "This website is made on Laravel framework on PHP language. It is made to secure database for insurance. Used MySQL for Database",
    source: "",
    demoLink: "https://newportal.notioninsurance.com/",
	badge: "PHP, JavaScript ",    
	 
  },
  {
    image: "/images/foodshala.png",
    title: "FoodShala",
    description:
      "This project is designed using Laravel, PHP, phpMyAdmin, MySQL, HTML and CSS. It is a prototype for a real-life system, that will be used by real users.",
    source: "https://github.com/richasinghthakur40/Foodshala/",
    demoLink: "https://richasinghthakur40.github.io/Foodshala/",
    badge: "Laravel, PHP ",
  },
  {
    image: "/images/portfolio.png",
    title: "Portfolio",
    description:
      "This is a personal portfolio that is made to make resources organized at one place. If you really like it, leave a message, will be Happy to hear from you",
    source: "https://github.com/richasinghthakur40.github.io/",
    badge: "ReactJS",
    demoLink: "https://richasinghthakur40.github.io/",
	// demoLink: "https://headphoonestore.netlify.app/",
	liveweb: "",
  },
  {
    image: "/images/endecryptor.png",
    title: "En-Decryptor",
    description:
      "This project is developed using C++ and is able to encrypt any raw file of any format. This project implements various algorithms to encrypt the file according to the users convenience as well.",
    source: "",
    demoLink: "https://github.com/richasinghthakur40/En-Decryptor",
    badge: "C++",
    liveweb: "",
  },
];

const Projects = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects" id="projects">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Pro</span>jects
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project, index) => {
              return (
                <Col md={4} className="mb-5" key={index + 1}>
                  <Badge className="lmckdncd" pill variant="warning">
                    {project.badge}
                  </Badge>
                  {project.liveweb && (
                    <Badge className="jdnkcjd" pill variant="danger">
                      <a
                        href={project.liveweb}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Youtube
                      </a>
                    </Badge>
                  )}
                  <div className="project-card">
                    <div className="img-section">
                      <Img
                        placeholder="/images/loading.gif"
                        src={project.image}
                        error="/images/download.png"
                        alt="React Cool Img"
                      />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.description}</p>
                      <div className="d-flex justify-content-between mr-4">
                        <a
                          href={project.source}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                        <a
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;

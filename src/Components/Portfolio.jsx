import React from "react";

const projectList = [
  {
    title: "react.js",
    description:
      "A compilation of my beginner web applications that uses concepts like Error Handling and Redux.",
    url: "https://github.com/Pragalya03/REACT/tree/main/REACT_Daywise_Documents",
  },
  {
    title: "My Resume",
    description:
      "My Resume created and deployed using GitHub Pages.",
    url: "https://pragalya03.github.io/Resume/",
  },
  {
    title: "An Online Movie Ticket Booking Application ",
    description:
      "A web application that helps users book movie tickets online that uses React.js and basic CRUD operations.",
    url: "https://github.com/Pragalya03/REACT/tree/main/ticketbooknig",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

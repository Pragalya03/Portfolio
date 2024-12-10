import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I am an enthusiastic computer science engineering student passionate about innovation and problem-solving. I’m always eager to learn, explore new technologies, and seek opportunities to grow, contribute, and make a meaningful impact in the tech world.";

const skillsList = [
  "C++",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
];

const detailOrQuote =
  "Always eager to explore the latest technologies and trends, this individual thrives on tackling complex challenges, whether it's coding efficient algorithms, building intuitive user interfaces, or designing robust systems.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

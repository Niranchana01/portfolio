/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/about.jpg";
import avatar from "../images/avatar.avif";
const imageAltText = "Niranchana Shree's photo";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Visionmate for the visually impaired",
    description:
      "Made a smart stick for the visually impaired people to help them navigate through the world with ease. It is an IOT based project using Arduino and ultrasonic sensors.",
    url: "",
  },
  {
    title: "Salon Website",
    description:
      "As a beginner to web development, I created a salon website using HTML and CSS. It is a static website with a few pages. Github pages is used to deploy the website.",
    url: "https://niranchana01.github.io/salonweb/index.html",
  },
  {
    title: "Resume Website",
    description:
      "Created a resume website using HTML and CSS. It is a static website with a few pages.",
    url: "https://niranchanaportfolio.netlify.app/",
  },
  {
    title: "Word Game",
    description:
      "Developed a console based word game using Python. It is a simple game where the user has to guess the word with the help of hints. Just a fun project to learn Python.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
        <img className="background" src={image} alt={imageAltText} />
        </div>
        <div id="avatar">
        <img src={avatar} style={{ height: "300px", width: "300px" }} alt={imageAltText} />
        </div>
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

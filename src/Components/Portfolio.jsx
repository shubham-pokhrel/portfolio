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
import image from "../images/mlsa-banner.png";

const imageAltText = "banner recognizing Microsoft Learn Student Ambassadors";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Tic-Tac-Toe Game",
    description:
      "This project is a fun and interactive implementation of the classic Tic-Tac-Toe game using C programming language and graphics.h library. It includes a user-friendly interface, timer, and winning text.",
    url: "https://github.com/shubham-pokhrel/Tic-Tac-Toe.git",
  },
  {
    title: "Trinetra - Your self guide",
    description:
      "Our app utilizes power of mobile camera to improve your tour experience. A tourist can scan monuments or artifacts and can see its information in Augmented Reality",
    url: "https://github.com/trinetra-deltathon/flutterApp.git",
  },
  {
    title: "Prayogshala Anveshan",
    description:
      "Revolutionize Learning: Explore Labs Anywhere, Anytime. Empowering Students and Researchers with Augmented Reality Experiments and Personalized Progress Tracking.",
    url: "https://github.com/Rajendra3213/Prayogsala_Anveshan.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
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

import React from "react";
import education from "../images/education.jpg";

const Education = () => {
    return (
        <div className="education">
            <section className="padding" id="education">
            <img className="background" src={education} alt="Education" />
        <h1>Experience</h1>
        <div className="education__container">
            <div className="education__container--left">
            <h2>Alpha Ambassador- Microsoft Learn Student Ambassadors</h2>
            <h3>Nov 2023-present</h3>
            </div>
        </div>
        <h1>Education</h1>
        <div className="education__container">
            <div className="education__container--left">
            <h2>Kamaraj College of Engineering and Technology, Virudhunagar</h2>
            <h3>Bachelor of Computer Science and Engineering</h3>
            <h3>2021 - 2025</h3>
            </div>
        </div>
        </section>
        </div>
    );
    };

export default Education;
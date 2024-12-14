import React from 'react';

const Projects = () => {
     const projects = [
        { img: "./img/Bokk2.png" },
        { img: "../img/roya2.png" },
        {img:""}
    ];
    return (
         <section className="project" id="project">
            <h2 className="title">Project</h2>
            <div className="contint">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-img">
                            <img src={project.img} alt={`Project ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Projects;

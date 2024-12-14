import React from 'react';

const Skills = () => {
    const skills = [
        {
            icon: "fa-html5",
            title: "HTML5",
            description: "I have skills in HTML5, which enables me to design and develop web pages that adhere to modern standards with a strong and organized structure."
        },
        {
            icon: "fa-css3",
            title: "CSS3",
            description: "I have skills in CSS3, allowing me to style and design visually appealing and responsive web pages while adhering to modern web design standards."
        },
        {
            icon: "fa-bootstrap",
            title: "Bootstrap",
            description: "I have a solid skill set in Bootstrap, allowing me to create responsive and well-structured websites."
        }
    ];
    return(
     <section className="skills" id="skills">
            <h2 className="title">Skills</h2>
            <div className="contint">
                {skills.map((skill, index) => (
                    <div className="card" key={index}>
                        <div className="icon">
                            <i className={`fa-brands ${skill.icon}`}></i>
                        </div>
                        <div className="info">
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>



        </section>
        
    )
}
export default Skills;

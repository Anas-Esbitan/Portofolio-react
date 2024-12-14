import React from 'react';

const Services = () => {
     const services = [
        {
            icon: "fa-network-wired",
            title: "Frontend Developer",
            description: "I have skills in HTML5 and CSS3, which enable me to develop web pages with a strong structure and flexible, attractive designs that adhere to modern design standards."
        },
        {
            icon: "fa-bootstrap",
            title: "Bootstrap",
            description: "I can effectively use Bootstrap’s grid system and components to build functional and visually appealing layouts."
        },
        {
            icon: "fa-adversal",
            title: "Pre-Sales",
            description: "I have skills in presale networking, which enable me to provide technical support and solutions to clients before the sales process."
        }
    ];
    return (
          <section className="services" id="services">
            <h2 className="title">Services</h2>
            <div className="contint">
                {services.map((service, index) => (
                    <div className="card" key={index}>
                        <div className="icon">
                            <i className={`fa-solid ${service.icon}`}></i>
                        </div>
                        <div className="info">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Services;

import React from 'react';

const Testimonials = () => {
     const testimonials = [
        {
            img: "/IMG/person-icon.avif",
            text: "Anas's expertise in networking was evident during our project. He provided valuable insights and helped us navigate complex challenges with ease."
        },
        {
            img: "/IMG/person-icon.avif",
            text: "I had the pleasure of working with Anas on a network installation project. His knowledge of presale networking was instrumental."
        },
        {
            img: "/IMG/person-icon.avif",
            text: "Working with Anas has been a fantastic experience. His knowledge in networking was crucial to the success of our project."
        }
    ];

    return (
         <section className="testimonials" id="testimonials">
            <h2 className="title">Testimonials</h2>
            <div className="contint">
                {testimonials.map((testimonial, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-img">
                            <img src={testimonial.img} alt={`Testimonial ${index + 1}`} />
                        </div>
                        <div className="project-info">
                            <strong className="project-titil1">
                                <h4>{testimonial.text}</h4>
                            </strong>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Testimonials;

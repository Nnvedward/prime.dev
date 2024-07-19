import React from "react";
import ResumeCard from "../../shared/resumeCard/ResumeCard";
import { Link } from "react-router-dom";
import Button from "../../shared/button/Button";
import "./Resume.css";
import pdf from "../../static/EdUgwu.pdf";

const Resume = () => {
  const experiences = [
    {
      company: "Freexit Technologies",
      position: "Frontend Engineer(Part Time)",
      started: "Feb 2023",
      ended: null,
      description: null,
      achievements: [
        "Spearheaded the frontend development team in architecting and implementing a cutting-edge logistics software platform.",
        "Leveraged Next.js to create a highly responsive and user-friendly interface for our logistics service, ensuring an exceptional user experience.",
        "Implemented robust security measures to safeguard customer data and financial transactions, ensuring the safety and trust of our users.",
        "Led efforts to enhance the platform's scalability, performance, and reliability to meet the demands of a growing user base.",
        "Fostered a culture of innovation, encouraging team members to explore and implement new technologies and features that enhance the service.",
      ],
    },
    {
      company: "Prexcribe",
      position: "Lead Frontend Engineer(Part Time)",
      started: "Jul 2022",
      ended: null,
      description: null,
      achievements: [
        "Made recommendations for new technology integration based on suitability and alignment to business goals.",
        "Designed and optimized responsive user interfaces, enabling seamless access to critical patient data and clinical decision support on various devices.",
        "Collaborated with backend developers to establish efficient data communication and integration, enabling real-time access to patient records and clinical insights.",
        "Teamed on user-centric design strategy in translation of UX and business requirements into coded solutions.",
        "Implemented stringent security measures to ensure compliance with healthcare data regulations, safeguarding patient information and privacy.",
      ],
    },
    {
      company: "BlueTag Technologies Limited",
      position: "Software Developer(Full Time)",
      started: "Jan 2020",
      ended: "Nov 2022",
      description: null,
      achievements: [
        "Updated old code bases to modern development standards, improving functionality by 20%.",
        "Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.",
        "Integrated constructive programs into cohesive product.",
        "Designed intuitive graphical user interfaces to improve user experience.",
        "Integrated software components into fully functional software system.",
      ],
    },
    {
      company: "Kellispay",
      position: "Frontend Developer (Contract)",
      started: "Jan 2022",
      ended: "Jun 2022",
      description: null,
      achievements: [
        "Planned and developed interfaces that simplified overall management and ease usage.",
        "Optimized website and increased speed by 15%.",
        "Built and deployed scalable mobile responsive User Interfaces for maximized User experience.",
        "Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs and enhancements",
      ],
    },
    {
      company: "Davayte",
      position: "Frontend Engineer (Contract)",
      started: "Jan 2019",
      ended: "Dec 2019",
      description: null,
      achievements: [
        "Worked cooperatively with client services, sales and design team in deadline-driven environment.",
        "Designed and updated layouts to meet usability and performance requirements, increasing app speed by 10%.",
        "Coded using HTML, CSS and JavaScript to develop features for both mobile and desktop platforms.",
        "Improved tools to boost user interaction and deliver design versatility.",
      ],
    },
    {
      company: "Nigerian Breweries PLC",
      position: "Software Developer (IT)",
      started: "Apr 2018",
      ended: "Sept 2018",
      description: null,
      achievements: [
        "Built and deployed scalable mobile responsive User Interfaces for maximized User experience.",
        "Assisted with search engine optimization (SEO) strategies and techniques.",
        "Worked with version control systems such as Git and SVN.",
        "Wrote well designed, testable and efficient code.",
        "Participated in code reviews to ensure best practices.",
      ],
    },
  ];

  return (
    <div className="resume">
      <div className="resume_container">
        <div className="top_row">
          <h1>Edward Ugwu</h1>
          <div className="buttons">
            <a href="https://www.linkedin.com/in/nnvemeka/">
              <small>
                <i className="fab fa-linkedin"></i> <span>LinkedIn</span>
              </small>
            </a>
            <a href={pdf} download>
              <small>
                <i className="fas fa-download"></i> <span>Download </span>
              </small>
            </a>
          </div>
        </div>
        <p>Frontend Engineer</p>
        <div className="summary">
          <p>
            An experienced front-end engineer with demonstrated expertise in
            React, Next, Angular, JavaScript and Typescript, I specialize in
            developing responsive websites and web applications that provide a
            beautiful, intuitive user experience and drive maximum engagement
            and conversions. I have a keen eye for detail and have successfully
            applied my skills to the financial, e-commerce, and health care
            industries. With a passion for creating top-notch user experiences,
            I take immense pride in my work, continually pursuing excellence
            while closely aligning with product objectives.
          </p>
        </div>
        <div className="divider">
          <p>Tools & Technologies</p>
          <span></span>
        </div>
        <div className="skills">
          <p>
            React, Next, Angular, JavaScript, Typescript, CSS, Sass/SCSS, Styled
            components, Tailwind CSS, Bootstrap, Material UI, Chakra UI, Fetch
            API, Axios, GraphQL, React query, Framer motion, GSAP(Greensock),
            Git.
          </p>
        </div>
        <div className="divider">
          <p>Experiences</p>
          <span></span>
        </div>
        <div>
          {experiences.map((experience, index) => (
            <ResumeCard {...experience} key={index} id={index} />
          ))}
        </div>
        <div className="divider">
          <p>Projects</p>
          <span></span>
        </div>
        <div className="exp_container">
          <section className="experience">
            <article className="description">
              <p className="nospan">
                Links to my works can be found on{" "}
                <Link to="/project"> Projects</Link>
              </p>
            </article>
          </section>
        </div>
      </div>
      <Button
        previous={{ url: "/article", text: "Article" }}
        next={{ url: "/", text: "Home" }}
      />
    </div>
  );
};

export default Resume;

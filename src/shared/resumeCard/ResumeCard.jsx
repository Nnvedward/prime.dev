import React from "react";
import '../../components/resume/Resume.css'

const ResumeCard = ({
    company,
    position,
    started,
    ended,
    description,
    achievements
}) => (
    <div className="exp_container">
        <section className="experience" >
            <p className="title">
                {company} - <i>{position}</i>
                <span>
                    <br />
                    {started} - {ended === null ? 'present' : ended}
                </span>
            </p>
            <article className="description">
                <p>{description}</p>
                {achievements.map((achievement, index) => (
                    <p key={index}><span>■</span>{achievement}</p>
                ))}
            </article>
        </section>
    </div>
)

export default ResumeCard
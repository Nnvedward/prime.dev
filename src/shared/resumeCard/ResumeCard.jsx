import React from "react";

const ResumeCard = ({
    company,
    position,
    started,
    ended,
    description,
    achievements
}) => (
    <div>
        <div>
            <section className="" >
                <p>
                    {company} - <i>{position}</i>
                </p>
                <p>
                    {started} - {ended === null ? 'present' : ended}
                </p>
                <article>
                    <p>{description}</p>
                    {achievements.map((achievement, index) => (
                        <p key={index}><span>■</span>{achievement}</p>
                    ))}
                </article>
            </section>
        </div>
    </div>
)

export default ResumeCard
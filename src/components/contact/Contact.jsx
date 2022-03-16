import React from "react";
import Form from "../../shared/form/Form";
import Button from "../../shared/button/Button";
import './Contact.css'

const Contact = () => (
    <div>
        <Form />
        <Button
            previous={{ url: "/project", text: 'Project' }}
            next={{ url: "/resume", text: 'Resume' }}
        />
    </div>
)

export default Contact
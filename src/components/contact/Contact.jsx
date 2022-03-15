import React from "react";
import Form from "../../shared/form/Form";
import Button from "../../shared/button/Button";

const Contact = () => (
    <div>
        <h1>contact page</h1>
        <Form />
        <Button
        previous={{url: "/project", text: 'Project'}}
        next={{url: "/resume", text: 'Resume'}}
        />
    </div>
)

export default Contact
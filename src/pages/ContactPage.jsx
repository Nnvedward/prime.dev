import React from "react";
import Contact from "../components/contact/Contact";
import Layout from "../layout/Layout";

const ContactPage = () => (
    <div>
        <Layout active="contact" title="Contact">
            <Contact />
        </Layout>
    </div>
)

export default ContactPage
import React from "react";
import Biography from '../shared/biography/Biography'
import Header from "../shared/header/Header";
import SocialMedia from '../shared/socialMedia/SocialMedia'
import './Layout.css'

const Layout = ({ children, title, active, home, article }) => {
    return (
        <React.Fragment>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <link
                rel="stylesheet"
                href="https://kit.fontawesome.com/d10bea2126.js" crossOrigin="anonymous"
            />

            {!article }

            <div
                className={`layout ${article && "layout_article"}`}
                id={home ? "layout_full" : ""}
            >
                <div className="mobile_container">
                    <Header />
                    <div id="mobile">{home ? <Biography /> : children}</div>
                    <SocialMedia />
                </div>

                <div className="container">
                    <div className="fixed">
                        <Biography active={active} />
                    </div>

                    <div className="main">
                        <div className="pages_container">{children}</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout
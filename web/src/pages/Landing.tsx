import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../styles/pages/landing.css";
import logoImg from "../images/Logo.svg";

const Landing: React.FC = () => {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy" />

                <main>
                    <h1>Donate a book and make someone happy!</h1>
                    <p>Find book donation places where you can donate or win books.</p>
                </main>

                <div className="location">
                    <strong>Stockholm</strong>
                    <span>Sweden</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>
            </div>
        </div>
    );
};

export default Landing;







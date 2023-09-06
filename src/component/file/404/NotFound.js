import React, { useEffect } from 'react';
import Parallax from 'parallax-js'; // Import Parallax library if you haven't
import './NotFound.scss';
import {NavLink} from "react-router-dom"; // Import your CSS styles

const YourComponent = () => {
    useEffect(() => {
        const scene = document.getElementById('scene');
        new Parallax(scene);
    }, []);

    return (
        <div className="not-found">
            {/* About section */}
            <div className="about">
                <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank" rel='noreferrer'>
                    <span className="icon"></span>
                </a>
                {/* Add other social links... */}
            </div>

            {/* Parallax scene section */}
            <section className="wrapper">
                <div className="container">
                    <div id="scene" className="scene" data-hover-only="false">
                        <div className="circle" data-depth="1.2"></div>
                        <div className="one" data-depth="0.9">
                            <div className="content">
                                <span className="piece"></span>
                                <span className="piece"></span>
                                <span className="piece"></span>
                            </div>
                        </div>
                        {/* Add other parallax elements... */}
                        <p className="p404" data-depth="0.50">404</p>
                        <p className="p404" data-depth="0.10">404</p>
                    </div>

                    {/* NotFound section */}
                    <div className="text">
                        <article>
                            <p>Uh oh! Looks like you got lost. <br />Go back to the homepage if you dare!</p>
                            <button><NavLink to="/">Home</NavLink></button>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default YourComponent;

import React from 'react';
import './home.scss'
import {NavLink, Outlet} from "react-router-dom";



const Home = () => {
    return (
        <div className="home">
            <div className="sidebar">
<div className="logo">
<img src='/media/img.png' alt={"Logo"}/>

</div>
                <div className="nav-links">
                        <NavLink className="nav-link" to="/dashboard"><img src="/media/dashboard.svg" alt="Dashboard"/> Dashboard</NavLink>
                        <NavLink className="nav-link" to="/aaa"><img src="/media/dashboard.svg" alt="Dashboard"/>Order</NavLink>
                        <NavLink className="nav-link" to="/bbb"><img src="/media/dashboard.svg" alt="Dashboard"/> Dashboard</NavLink>
                        <NavLink className="nav-link" to="/bbb"><img src="/media/dashboard.svg" alt="Dashboard"/> Dashboard</NavLink>
                        <NavLink className="nav-link" to="/bbb"><img src="/media/dashboard.svg" alt="Dashboard"/> Dashboard</NavLink>
                        <NavLink className="nav-link" to="/bbb"><img src="/media/dashboard.svg" alt="Dashboard"/> Dashboard</NavLink>
                        <NavLink className="nav-link" to="/bbb"><img src="/media/dashboard.svg" alt="Dashboard"/> Dashboard</NavLink>
                </div>
                <div className="nav-links bottom">
                    <NavLink className="nav-link" to="/"><img src="/media/dashboard.svg" alt="Dashboard"/> Dashboard</NavLink>
                    <NavLink className="nav-link" to="/aaa"><img src="/media/dashboard.svg" alt="Dashboard"/>Order</NavLink>
                    <NavLink className="nav-link" to="/bbb"><img src="/media/dashboard.svg" alt="Dashboard"/> Dashboard</NavLink>
                </div>

            </div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    );
};

export default Home;
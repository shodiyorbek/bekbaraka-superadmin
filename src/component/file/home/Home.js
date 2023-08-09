import React, {useState} from 'react';
import './home.scss'
import {NavLink, Outlet} from "react-router-dom";
import {Button} from "antd";



const Home = () => {
    const [open,setOpen]=useState(true)
    const handleOpen = () =>{
        setOpen(!open)
    }
    return (
        <div className="home">

            <div className={open?'sidebar active':'sidebar'}>

<div className="logo">
<img src='/media/img.png' alt={"Logo"}/>

</div>
                <div className="nav-links">
                        <NavLink className="nav-link" to="/"><img src="/media/dashboard.svg" alt="Dashboard"/> Dashboard</NavLink>
                        <NavLink className="nav-link" to="/moderator"><img src="/media/moderator.svg" alt="Dashboard"/>Moderator</NavLink>
                        <NavLink className="nav-link" to="/supplier"><img src="/media/supplier.svg" alt="Dashboard"/>Supplier</NavLink>
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
            <button className={open?"button-open":"button-open active"} onClick={handleOpen}>
                <i className='bx bx-chevron-right'></i>
            </button>
        </div>
    );
};

export default Home;
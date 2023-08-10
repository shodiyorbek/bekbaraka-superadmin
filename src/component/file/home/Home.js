import React, {useState} from 'react';
import './home.scss'
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {Modal} from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';




const Home = () => {
    const [open,setOpen]=useState(true)
    const navigate = useNavigate()
    const { confirm } = Modal;
    const handleOpen = () =>{
        setOpen(!open)
    }
    const logout=()=>{
       showPromiseConfirm()
    }
    const showPromiseConfirm = () => {
        confirm({
            title: 'Rosdan ham chiqmoqchimisiz?',
            icon: <ExclamationCircleFilled />,
            content: 'When clicked the OK button, this dialog will be closed after 1 second',
            onOk() {
               navigate('/login')
            },
            onCancel() {},
        });
    };
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
                        <NavLink className="nav-link" to="/seller"><img src="/media/seller.svg" alt="Dashboard"/> Seller</NavLink>
                        <NavLink className="nav-link" to="/orders"><img src="/media/orders.svg" alt="Dashboard"/> Orders</NavLink>
                        <NavLink className="nav-link" to="/product"><img src="/media/products.svg" alt="Dashboard"/> Product</NavLink>
                        <NavLink className="nav-link" to="/payments"><img src="/media/payment.svg" alt="Dashboard"/> Payments</NavLink>
                </div>
                <div className="nav-links bottom">
                    <NavLink className="nav-link" to="/settings"><img src="/media/setting.svg" alt="Dashboard"/>Settings</NavLink>
                    <button style={{background:'none',cursor:'pointer',border:'none'}} className="nav-link" onClick={logout}><img src="/media/logout.svg" alt="Dashboard"/> Log out</button>
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
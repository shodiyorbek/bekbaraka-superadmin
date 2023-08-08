import React from 'react';
import './Dashboard.scss'
import { Badge} from "antd";
const Dashboard = () => {
    const card = [
        {
            id:1,
            title:'Shipped orders',
            amount:67,
            logo:'/truck.svg',
            style:{borderRadius: '15px',
    background: 'linear-gradient(135deg, #6BAAFC 0%, #305FEC 100%)',
    boxShadow:'0px 2px 10px 0px rgba(175, 137, 255, 0.15)'}

        },
        {
            id:2,
            title:'Panding orders',
            amount:10,
            logo:'/shop.svg',
            style: {borderRadius: '15px',
    background: 'linear-gradient(135deg, #EF5E7A 0%, #D35385 100%)',
    boxShadow: '0px 2px 10px 0px rgba(175, 137, 255, 0.15)'}
        },
        {
            id:3,
            title:'New orders',
            amount:35,
            logo: '/bag.svg',
            style: {borderRadius: '15px',
    background: 'linear-gradient(135deg, #D623FE 0%, #A530F2 100%)',
    boxShadow: '0px 2px 10px 0px rgba(175, 137, 255, 0.15)'}
        }
    ];
    return (
        <div className="container">
<div className="topNavbar">
    <div className="welcome">Welcome back, Janny Well</div>
    <div className="left">
        <div className="notfication">
            <a href="#">
                <Badge dot={true}>
                    <i   className='bx bx-bell'></i>
                </Badge>
            </a>
        </div>
        <div className="profile">
            <div className="profileImg">
                <img src="/media/img_1.png" alt="User"/>
            </div>
            <div className="profileInfo">
                <div className="profileUserName">
                    Janny Well
                </div>
                <div className="profileUserPosetion">
                    Supperadmin
                </div>
            </div>
        </div>
    </div>
</div>
<div className="statistic-cards">
    {card.map((card)=>(
        <div style={card.style} className="card">
           <div className="card-title">{card.title}</div>
            <div className="logo">
                <img src={'/media'+card.logo} alt="Logo"/>
            </div>
           <div className="card-amount">{card.amount}</div>
        </div>
    ))}
</div>
        </div>
    );
};

export default Dashboard;
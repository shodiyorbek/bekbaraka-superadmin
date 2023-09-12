import React, {useEffect, useState} from 'react';
import './Dashboard.scss'
import { Input, Pagination, Select, Spin, Table} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import axios from "../../axios/axios";
import jwt_decode from 'jwt-decode';
import {useNavigate} from "react-router-dom";

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
    const columns = [
        {
            title: '№',
            dataIndex: 'name',
            width: '5%',
        },
        {
            title: 'Product',
            dataIndex: 'Product',
            width: '20%',
        },
        {
            title: 'Payment ID',
            dataIndex: 'Payment ID',
        }, {
            title: 'Data',
            dataIndex: 'Data',
        },
        {
            title: 'Costumer Name',
            dataIndex: 'Costumer Name',
            width: '20%',
        },{
            title: 'Status',
            dataIndex: 'Status',

        },{
            title: 'Amount',
            dataIndex: 'Amount',

        },
    ];
    const [data, setData] = useState([]);
    const navigate=useNavigate();
    const [loading, setLoading] = useState(false);
    const [user,setUser]=useState({})
    const [isLoaded,setIsloaded]=useState(false)
    useEffect(() => {
        setIsloaded(false)
        const token = localStorage.getItem('access');
        const decoded = jwt_decode(token);
        const userId = decoded?.user_id;
        console.log(userId)

        axios.get(`/super/get_superuser/${userId}/`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('access')}`
            }
        }).then((res)=>{
            setUser(res.data)
            console.log(res)
            setIsloaded(true)
        }).catch((err)=>{
            setIsloaded(true)
if(err.response.status===401||err.response.status===403){
    localStorage.clear()
    window.location.href = '/login'
}
        })
    }, []);
    return (
        <Spin wrapperClassName={'spinner'} spinning={!isLoaded} size={"large"}>
        <div className="container">

            <div className="topNavbar">
                <div className="welcome">Welcome back, {user.first_name} </div>
                <div className="left">

                    <div onClick={()=>navigate('/settings')} className="profile">
                        <div className="profileImg">
                            <img src={user.photo} alt="User"/>
                        </div>
                        <div className="profileInfo">
                            <div className="profileUserName">
                                {user.first_name}
                            </div>
                            <div className="profileUserPosetion">
                                {user.role}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="statistic-cards">
                {card.map((card)=>(
                    <div key={card.id} style={card.style} className="card">
                        <div className="card-title">{card.title}</div>
                        <div className="logo">
                            <img src={'/media'+card.logo} alt="Logo"/>
                        </div>
                        <div className="card-amount">{card.amount}</div>
                    </div>
                ))}
            </div>
            <div className="search-section">
                <Input className={"search-input"} prefix={<SearchOutlined />} size={"large"} placeholder="Search" />
                <Select
                    size={"large"}

                    defaultValue="lucy"
                    style={{
                        width: 120,
                    }}

                    options={[
                        {
                            value: 'lucy',
                            label: 'Lucy',
                        },
                    ]}
                />
            </div>
            <div className="section-table">
                <Table
                    pagination={false}
                    columns={columns}
                    dataSource={data}
                    loading={loading}
                />
                {data.length<10?<></>: <Pagination className="pagination" simple defaultCurrent={2} total={0} />}
            </div>
        </div>
        </Spin>

    );
};

export default Dashboard;
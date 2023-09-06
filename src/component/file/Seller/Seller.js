import React, {useEffect, useState} from 'react';
import { Input, Pagination, Switch, Table} from "antd";
import './Seller.scss'
import { useNavigate} from "react-router-dom";
import classNames from 'classnames';
import {SearchOutlined} from "@ant-design/icons";
import axios from "../../axios/axios";
import {toast, ToastContainer} from "react-toastify";

const Seller = () => {
    const navigate=useNavigate();
    const [isCurrent,setCurrent]=useState(1)
    const [allAmount,setAllAmount]=useState()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const columns = [
        {
            title: '№',
            dataIndex: 'index',
            width: '5%',
            render: (_, __, rowIndex) => rowIndex + 1
        },
        {
            title: 'Name',
            dataIndex: 'first_name',

        },
        {
            title: 'Last name',
            dataIndex: 'last_name',
        }, {
            title: 'Gender',
            dataIndex: 'sex',
        },
        {
            title: 'Phone',
            dataIndex: 'phone_number',
        },{
            title: 'Photo',
            dataIndex: 'photo',
            render: (_, record) => (
                <img style={{width:60,height:60}} src={record.photo} alt="imaga" />
            ),

        },{
            title: 'Shop',
            dataIndex: '1',
            render: (_, record) => (
               <li>{record.market.name}</li>
            ),

        }, {
            title: 'Status',
            dataIndex: 'status',
            render: (_, record) => (
                <Switch
                    checked={record.status}
                    onChange={(checked) => handleStatusChange(record.id, checked)}
                />
            ),
            className: (record) => classNames('status-column', { 'status-false': !record.status })
        },
    ];
const  getSeller=(count)=>{
        axios.get(`/list/sellers?page_number=${count}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('access')}`
            }
        }).then((res)=>{
            setLoading(false)
            setAllAmount(res.data.count)
            console.log(res.data.results)
            setData(res.data.results)
        }).catch((error)=>{
            setLoading(false)
            if(error.response.status===401){
                localStorage.clear()
                window.location.href='/login'
            }
        })
    }
    useEffect(() => {
getSeller(1)
    }, []);
    const handleStatusChange = (id, checked) => {
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, status: checked } : item
        );
        axios.patch(`/seller/change/status/${id}`,{status:checked},{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('access')}`
            }
        }).then((res)=>{
            console.log(res)
            toast.info("Sotuvchi statusi o'zgartirildi", {
                position: toast.POSITION.TOP_RIGHT
            });

        }).catch((err)=>{
            if(err.response.status===401){
                localStorage.clear()
                navigate('/login')
            }
        })
        setData(updatedData);
    };



const onPagiantion = (e)=>{
    setCurrent(e)
    getSeller(e)
}

    return (
         <div className="container moderator">
            <ToastContainer/>
            <div className="up">
                <Input className={"search-input"} prefix={<SearchOutlined />} size={"large"} placeholder="Search" />


            </div>
            <div className="main">
                <Table
                    pagination={false}
                    columns={columns}
                    dataSource={data}
                    loading={loading}
                    rowClassName={(record) =>
                        classNames({ 'status-false': !record.status }) // Add 'status-false' class based on status
                    }

                />
                {(data.length >= 10||allAmount>=10)?<Pagination onChange={onPagiantion} className="pagination" simple defaultCurrent={1} current={isCurrent} total={allAmount} />:<></>}
            </div>
        </div>

    );
};

export default Seller;
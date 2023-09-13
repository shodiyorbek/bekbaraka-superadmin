import React, {useEffect, useState} from 'react';
import {Button, Input, Pagination, Switch, Table} from "antd";
import './Moderator.scss'
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import classNames from 'classnames';
import {SearchOutlined} from "@ant-design/icons";
import axios from "../../axios/axios";
import {toast, ToastContainer} from "react-toastify";

const Moderator = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const currentPathname = location.pathname;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage,setCurrentPage]=useState(1)
    const [amount,setAmount]=useState(0)
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
const getModerators=(pageCount)=>{
    setLoading(true)
    axios.get(`/super/list/moderator/?page_number=${pageCount}`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem('access')}`
        }
    }).then((res)=>{
        setLoading(false)
        setAmount(res.data.count)
        setData(res.data.results)
    }).catch((error)=>{
        if(error.response.status===401){
            localStorage.clear()
            window.location.href='/login'
        }
    })
}
    useEffect(() => {
        setCurrentPage(1)
getModerators(1)
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



    const add = () =>{
    navigate('add')
}
const pagination = (e)=>{
getModerators(e)
    setCurrentPage(e)
}

    return (
        <>{currentPathname==='/moderator'? <div className="container moderator">
            <ToastContainer/>
            <div className="up">
                <Input className={"search-input"} prefix={<SearchOutlined />} size={"large"} placeholder="Search" />
                <div>

                    <Button onClick={add} size='large' className="button">
                        + Add Moderator
                    </Button>
                </div>

            </div>
            {data.length>=10||amount>10?<Pagination onChange={pagination} className="pagination" simple defaultCurrent={1} total={amount} current={currentPage} />:<></>}

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
            </div>
        </div>:(currentPathname==='/moderator/add')?<Outlet/>:<></>}</>

    );
};

export default Moderator;
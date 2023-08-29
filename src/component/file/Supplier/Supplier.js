import React, {useEffect, useState} from 'react';
import {Button, Input, Pagination, Select, Switch, Table} from "antd";
import './Supplier.scss'
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import classNames from "classnames";
import {SearchOutlined} from "@ant-design/icons";
import axios from "../../axios/axios";
import {toast} from "react-toastify";

const Supplier = () => {
    const navigate=useNavigate();
    const [isCurrent,setCurrent]=useState(true)
    const location = useLocation();
    const currentPathname = location.pathname;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
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
            title: 'Surname',
            dataIndex: 'last_name',
        }, {
            title: 'Gender',
            dataIndex: 'sex',
        },
        {
            title: 'Phone',
            dataIndex: 'phone_number',
        },{
            title: 'Car type',
            dataIndex: 'car_model.name',
            render: (_, record) => (
                <div>{record.car_model.name}</div>
            ),

        },{
            title: 'Car number',
            dataIndex: 'car_number',

        },{
            title: 'Status',
            dataIndex: 'status',
            render: (_, record) => (
                <Switch
                    checked={record.status}
                    onChange={(checked) => handleStatusChange(record.id, checked)}
                />
            ),
            className: 'status-column'

        },
    ];

    const handleStatusChange = (id, checked) => {
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, status: checked } : item
        );
        setData(updatedData);
    };
    const getSuppliers = ()=>{
        axios.get('/list/suppliers/',{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access')}`,
                'Content-type':'multipart/formdata'
            }
        }).then((res) => {

            console.log(res)
            setData(res.data.results)

        }).catch((err) => {
            console.log(err)
            if(err.response.status===401){
                localStorage.clear()
                window.location.href='/login'
            }

        })
    }

    useEffect(() => {
        getSuppliers()
    }, []);


    return (
        <div className="container moderator">
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
                {data.length>10?<Pagination className="pagination" simple defaultCurrent={2} total={0} />:<></>}
            </div>
        </div>

    );
};

export default Supplier;
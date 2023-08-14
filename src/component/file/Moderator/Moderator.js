import React, {useEffect, useState} from 'react';
import {Button, Input, Pagination, Select, Switch, Table} from "antd";
import './Moderator.scss'
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import classNames from 'classnames';
import {SearchOutlined} from "@ant-design/icons";
import axios from "../../axios/axios";

const Moderator = () => {
    const navigate=useNavigate();
    const [isCurrent,setCurrent]=useState(true)
    const location = useLocation();
    const currentPathname = location.pathname;
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

    useEffect(() => {
        axios.get('/super/list/moderator/',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('access')}`
            }
        }).then((res)=>{
            setLoading(false)
            setData(res.data.results)
        }).then((error)=>{
            console.log(error)
        })
    }, []);
    const handleStatusChange = (id, checked) => {
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, status: checked } : item
        );
        setData(updatedData);
    };


const add = () =>{
    navigate('add')
}

    return (
        <>{currentPathname==='/moderator'? <div className="container moderator">
            <div className="up">
                <Input className={"search-input"} prefix={<SearchOutlined />} size={"large"} placeholder="Search" />
                <div>
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
                    <Button onClick={add} size='large' className="button">
                        + Add Moderator
                    </Button>
                </div>

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
        </div>:(currentPathname==='/moderator/add')?<Outlet/>:<></>}</>

    );
};

export default Moderator;
import React, {useEffect, useState} from 'react';
import { Input, Pagination, Switch, Table} from "antd";
import './Supplier.scss'
import classNames from "classnames";
import {SearchOutlined} from "@ant-design/icons";
import axios from "../../axios/axios";
import {toast} from "react-toastify";


const Supplier = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [current,setCurrent]=useState(1)
    const [amount,setAmount]=useState()
    const [isSearching,setIsSearching]=useState(false)
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
        axios.patch(`/seller/change/status/${id}`,{status:checked},{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('access')}`
            }
        }).then((res)=>{
console.log(res)
        }).catch((err)=>{
            if(err.res.status===401){
                localStorage.clear()
                window.location.reload()
            }
        })
    };
    const getSuppliers = (countPage)=>{
        setLoading(true)
        axios.get(`/list/suppliers/?page_number=${countPage}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access')}`,
                'Content-type':'multipart/formdata'
            }
        }).then((res) => {
setLoading(false)
            console.log(res)
            setAmount(res.data.count)
            setData(res.data.results)

        }).catch((err) => {
            setLoading(false)
            console.log(err)
            if(err.response.status===401){
                localStorage.clear()
                window.location.href='/login'
            }

        })
    }

    useEffect(() => {
        getSuppliers(1)
    }, []);

const pagination = (e)=>{
    getSuppliers(e)
    setCurrent(e)
}
    const onSearch = (e) => {
        setIsSearching(true)
        if (e.target.value.length === 0) {
            getSuppliers(1)
            setCurrent(1)
            setIsSearching(false)
        } else {
            setLoading(true)
            axios.get(`/search/supplier/role/${e.target.value}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access')}`
                }
            }).then((res) => {
                console.log(res)

                setData(res.data)
                setLoading(false)
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
                setLoading(false)
                setData([])
            })

        }

    }
    return (
        <div className="container moderator">
            <div className="up">
                <Input onChange={onSearch} className={"search-input"} prefix={<SearchOutlined />} size={"large"} placeholder="Search" />

            </div>
            {(data.length>=10||amount>=10)&&!isSearching?<Pagination onChange={pagination} className="pagination" simple defaultCurrent={1} total={amount} current={current} />:<></>}
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
        </div>

    );
};

export default Supplier;
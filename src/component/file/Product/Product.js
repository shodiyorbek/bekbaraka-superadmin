import React, { useState} from 'react';
import { Input, Pagination, Select, Switch, Table} from "antd";
import './Product.scss'
import { useLocation, useNavigate} from "react-router-dom";
import classNames from 'classnames';
import {SearchOutlined} from "@ant-design/icons";

const Product = () => {
    const [data, setData] = useState([
        {
            id:1,
            name:'Ipone 13 pro',
            category:'Telfonlar',
            seller:'Jabborbek',
            magazine:'#13574',
            price:'$14000',
            quantity:5,
            status:false

        },
        {
            id:2,
            name:'Ipone 13 pro',
            category:'Telfonlar',
            seller:'Jabborbek',
            magazine:'#13574',
            price:'$14000',
            quantity:5,
            status:false

        },
        {
            id:3,
            name:'Ipone 13 pro',
            category:'Telfonlar',
            seller:'Jabborbek',
            magazine:'#13574',
            price:'$14000',
            quantity:5,
            status:false

        },
        {
            id:4,
            name:'Ipone 13 pro',
            category:'Telfonlar',
            seller:'Jabborbek',
            magazine:'#13574',
            price:'$14000',
            quantity:5,
            status:false

        },
        {
            id:5,
            name:'Ipone 13 pro',
            category:'Telfonlar',
            seller:'Jabborbek',
            magazine:'#13574',
            price:'$14000',
            quantity:5,
            status:false

        },
        {
            id:6,
            name:'Ipone 13 pro',
            category:'Telfonlar',
            seller:'Jabborbek',
            magazine:'#13574',
            price:'$14000',
            quantity:5,
            status:false

        },
        {
            id:7,
            name:'Ipone 13 pro',
            category:'Telfonlar',
            seller:'Jabborbek',
            magazine:'#13574',
            price:'$14000',
            quantity:5,
            status:false

        },
        {
            id:8,
            name:'Ipone 13 pro',
            category:'Telfonlar',
            seller:'Jabborbek',
            magazine:'#13574',
            price:'$14000',
            quantity:5,
            status:false

        },
        {
            id:9,
            name:'Ipone 13 pro',
            category:'Telfonlar',
            seller:'Jabborbek',
            magazine:'#13574',
            price:'$14000',
            quantity:5,
            status:false

        },
        {
            id:10,
            name:'Ipone 13 pro',
            category:'Telfonlar',
            seller:'Jabborbek',
            magazine:'#13574',
            price:'$14000',
            quantity:5,
            status:false

        }
    ]);
    const [loading, setLoading] = useState(false);
    const columns = [
        {
            title: '№',
            dataIndex: 'id',
            width: '5%',
        },
        {
            title: 'Name',
            dataIndex: 'name',

        },
        {
            title: 'Category',
            dataIndex: 'category',
        },
        {
            title: "Seller",
            dataIndex: 'seller',
        },
        {
            title: 'Magazine',
            dataIndex: 'magazine',
        }
        ,{
            title: 'Price',
            dataIndex: 'price',

        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',

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

    const handleStatusChange = (id, checked) => {
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, status: checked } : item
        );
        setData(updatedData);
    };



    return (
       <div className="container moderator">
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
                <Pagination className="pagination" simple defaultCurrent={2} total={0} />
            </div>
        </div>

    );
};

export default Product;
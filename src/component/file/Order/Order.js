import React, { useState} from 'react';
import { Input, Pagination, Select, Switch, Table} from "antd";
import './Order.scss'
import classNames from 'classnames';
import {SearchOutlined} from "@ant-design/icons";

const Order = () => {
    const [data, setData] = useState([
        {
            id:1,
            product:'Ipone 13 pro',
            orderid:'#13547',
            data:'10.08.2023',
            customername:'Shodiyorbek',
            amount:50,
            supplier:'Shodiyorbek',
            status:false

        },
        {
            id:2,
            product:'Ipone 13 pro',
            orderid:'#13547',
            data:'10.08.2023',
            customername:'Shodiyorbek',
            amount:50,
            supplier:'Shodiyorbek',
            status:false

        },
        {
            id:3,
            product:'Ipone 13 pro',
            orderid:'#13547',
            data:'10.08.2023',
            customername:'Shodiyorbek',
            amount:50,
            supplier:'Shodiyorbek',
            status:false

        },
        {
            id:4,
            product:'Ipone 13 pro',
            orderid:'#13547',
            data:'10.08.2023',
            customername:'Shodiyorbek',
            amount:50,
            supplier:'Shodiyorbek',
            status:false

        },
        {
            id:5,
            product:'Ipone 13 pro',
            orderid:'#13547',
            data:'10.08.2023',
            customername:'Shodiyorbek',
            amount:50,
            supplier:'Shodiyorbek',
            status:false

        },
        {
            id:6,
            product:'Ipone 13 pro',
            orderid:'#13547',
            data:'10.08.2023',
            customername:'Shodiyorbek',
            amount:50,
            supplier:'Shodiyorbek',
            status:false

        },
        {
            id:7,
            product:'Ipone 13 pro',
            orderid:'#13547',
            data:'10.08.2023',
            customername:'Shodiyorbek',
            amount:50,
            supplier:'Shodiyorbek',
            status:false

        },
        {
            id:8,
            product:'Ipone 13 pro',
            orderid:'#13547',
            data:'10.08.2023',
            customername:'Shodiyorbek',
            amount:50,
            supplier:'Shodiyorbek',
            status:false

        },
        {
            id:9,
            product:'Ipone 13 pro',
            orderid:'#13547',
            data:'10.08.2023',
            customername:'Shodiyorbek',
            amount:50,
            supplier:'Shodiyorbek',
            status:false

        },
        {
            id:10,
            product:'Ipone 13 pro',
            orderid:'#13547',
            data:'10.08.2023',
            customername:'Shodiyorbek',
            amount:50,
            supplier:'Shodiyorbek',
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
            title: 'Product',
            dataIndex: 'product',

        },
        {
            title: 'Payment ID',
            dataIndex: 'orderid',
        },
        {
            title: "Data",
            dataIndex: 'data',
        },
        {
            title: 'Costumer Name',
            dataIndex: 'customername',
        }
        ,{
            title: 'Amount',
            dataIndex: 'amount',

        },
        {
            title: 'Supplier',
            dataIndex: 'supplier',

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
                {data.length>10?<Pagination className="pagination" simple defaultCurrent={2} total={0} />:<></>}
            </div>
        </div>

    );
};

export default Order;
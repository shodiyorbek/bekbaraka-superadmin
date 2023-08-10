import React, { useState} from 'react';
import { Input, Pagination, Select, Switch, Table} from "antd";
import './Seller.scss'
import { useLocation, useNavigate} from "react-router-dom";
import classNames from 'classnames';
import {SearchOutlined} from "@ant-design/icons";

const Seller = () => {
    const [data, setData] = useState([
        {
            id:1,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            shop:'A-101',
            amount:50,
            supplier:'Shodiyorbek',
            status:false

        },
        {
            id:2,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            shop:'A-101',
            amount:50,
            supplier:'Shodiyorbek',
            status:true

        },
        {
            id:3,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            shop:'A-101',
            amount:50,
            supplier:'Shodiyorbek',
            status:true

        },
        {
            id:4,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            shop:'A-101',
            amount:50,
            supplier:'Shodiyorbek',
            status:true

        },
        {
            id:5,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            shop:'A-101',
            amount:50,
            supplier:'Shodiyorbek',
            status:true

        },
        {
            id:6,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            shop:'A-101',
            amount:50,
            supplier:'Shodiyorbek',
            status:true

        },
        {
            id:7,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            shop:'A-101',
            amount:50,
            supplier:'Shodiyorbek',
            status:true

        },
        {
            id:8,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            shop:'A-101',
            amount:50,
            supplier:'Shodiyorbek',
            status:true

        },
        {
            id:9,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            shop:'A-101',
            amount:50,
            supplier:'Shodiyorbek',
            status:true

        },
        {
            id:10,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            shop:'A-101',
            amount:50,
            supplier:'Shodiyorbek',
            status:true

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
            title: 'Surname',
            dataIndex: 'surname',
        },
        {
            title: "Do'kon",
            dataIndex: 'shop',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
        }
        ,{
            title: 'Mahsulotlar soni',
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

export default Seller;
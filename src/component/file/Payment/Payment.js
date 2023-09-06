import React, { useState} from 'react';
import { Input, Pagination, Select, Table} from "antd";
import './Payment.scss'
import {SearchOutlined} from "@ant-design/icons";

const Payment = () => {
    const [data, setData] = useState([
        {
            id:1,
            data:'10.08.2023',
            price:'$42000',
            count:50,

        },
        {
            id:2,
            data:'10.08.2023',
            price:'$42000',
            count:50,

        },
        {
            id:3,
            data:'10.08.2023',
            price:'$42000',
            count:50,

        },
        {
            id:4,
            data:'10.08.2023',
            price:'$42000',
            count:50,

        },
        {
            id:5,
            data:'10.08.2023',
            price:'$42000',
            count:50,

        },
        {
            id:6,
            data:'10.08.2023',
            price:'$42000',
            count:50,

        },
        {
            id:7,
            data:'10.08.2023',
            price:'$42000',
            count:50,

        },
        {
            id:8,
            data:'10.08.2023',
            price:'$42000',
            count:50,

        },
        {
            id:9,
            data:'10.08.2023',
            price:'$42000',
            count:50,

        },
        {
            id:10,
            data:'10.08.2023',
            price:'$42000',
            count:50,

        },
        {
            id:11,
            data:'10.08.2023',
            price:'$42000',
            count:50,

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
            title: 'Data',
            dataIndex: 'data',

        },
        {
            title: 'Price',
            dataIndex: 'price',

        },
        {
            title: 'Count magazine',
            dataIndex: 'count',

        },
    ];




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

                />
                {data.length>10?<Pagination className="pagination" simple defaultCurrent={2} total={0} />:<></>}
            </div>
        </div>

    );
};

export default Payment;
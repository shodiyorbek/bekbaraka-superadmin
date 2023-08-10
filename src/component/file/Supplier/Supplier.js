import React, {useEffect, useState} from 'react';
import {Button, Input, Pagination, Select, Switch, Table} from "antd";
import './Supplier.scss'
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import classNames from "classnames";
import {SearchOutlined} from "@ant-design/icons";

const Supplier = () => {
    const navigate=useNavigate();
    const [isCurrent,setCurrent]=useState(true)
    const location = useLocation();
    const currentPathname = location.pathname;
    const [data, setData] = useState([
        {
            id:1,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            phone:'+998917381025',
            carname:'Taxoe',
            cartype:'Yengil',
            carnumber:'01 A 777 AA',
            status:false

        },
        {
            id:2,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            phone:'+998917381025',
            carname:'Bugatti',
            cartype:'Yengil',
            carnumber:'01 A 777 AA',
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
        }, {
            title: 'Gender',
            dataIndex: 'gender',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },{
            title: 'Car name',
            dataIndex: 'carname',
        },{
            title: 'Car type',
            dataIndex: 'cartype',

        },{
            title: 'Car number',
            dataIndex: 'carnumber',

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


const add = () =>{
    navigate('add')
}

    return (
        <>{currentPathname==='/supplier'? <div className="container moderator">
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
                        + Add Supplier
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
        </div>:(currentPathname==='/supplier/add')?<Outlet/>:<></>}</>

    );
};

export default Supplier;
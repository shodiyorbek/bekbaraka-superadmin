import React, {useEffect, useState} from 'react';
import {Button, Pagination, Switch, Table} from "antd";
import './Moderator.scss'
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import classNames from 'classnames';

const Moderator = () => {
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
            photo:'/media/img_1.png',
            address:'Toshkent shahri',
            status:false

        },
        {
            id:2,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            phone:'+998917381025',
            photo:'/media/img_1.png',
            address:'Toshkent shahri',
            status:true

        },
        {
            id:3,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            phone:'+998917381025',
            photo:'/media/img_1.png',
            address:'Toshkent shahri',
            status:true

        },
        {
            id:4,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            phone:'+998917381025',
            photo:'/media/img_1.png',
            address:'Toshkent shahri',
            status:true

        },
        {
            id:5,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            phone:'+998917381025',
            photo:'/media/img_1.png',
            address:'Toshkent shahri',
            status:true

        },
        {
            id:6,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            phone:'+998917381025',
            photo:'/media/img_1.png',
            address:'Toshkent shahri',
            status:true

        },
        {
            id:7,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            phone:'+998917381025',
            photo:'/media/img_1.png',
            address:'Toshkent shahri',
            status:true

        },
        {
            id:8,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            phone:'+998917381025',
            photo:'/media/img_1.png',
            address:'Toshkent shahri',
            status:true

        },
        {
            id:9,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            phone:'+998917381025',
            photo:'/media/img_1.png',
            address:'Toshkent shahri',
            status:true

        },
        {
            id:10,
            name:'Shodiyorbek',
            surname:'Tolqinov',
            gender:'male',
            phone:'+998917381025',
            photo:'/media/img_1.png',
            address:'Toshkent shahri',
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
            title: 'Photo',
            dataIndex: 'photo',
            render: (_, record) => (
                <img style={{width:60,height:60}} src={record.photo} alt="imaga" />
            ),

        },{
            title: 'Address',
            dataIndex: 'address',

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


const add = () =>{
    navigate('add')
}
    useEffect(() => {
        console.log(currentPathname);
        if (currentPathname === '/moderator/add') {
            setCurrent(false);
        } else if (currentPathname === '/moderator') {
            setCurrent(true);
        }
    }, [currentPathname]);
    return (
        <>{isCurrent? <div className="container moderator">
            <div className="up">
                <Button onClick={add} size='large' className="button">
                    + Add Moderator
                </Button>
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
        </div>:<Outlet/>}</>

    );
};

export default Moderator;
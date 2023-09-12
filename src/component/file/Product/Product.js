import React, {useEffect, useState} from 'react';
import {Button, Input, Popover, Spin, Switch    } from "antd";
import './Product.scss'
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {SearchOutlined} from "@ant-design/icons";
import axios from "../../axios/axios";
import {toast, ToastContainer} from "react-toastify";

const Supplier = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isSearching,setIsSearching] = useState(false)
    if(loading){
        document.body.style.overflow='hidden'
    }else {
        document.body.style.overflow='auto'
    }
    const getProducts = ()=>{
        setLoading(true)
        axios.get('/all/product/get/',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('access')}`
            }
        }).then((res)=>{
            setLoading(false)
            console.log("data",res)
            setData(res.data.results)
        }).catch((err)=>{
            setLoading(false)
        })
    }
    useEffect(() => {
        getProducts()
    }, []);

    const changeStatus = (id,cheked)=>{
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, is_active: cheked } : item
        );
        setData(updatedData)

        axios.patch(`/product/main/update/${id}`, {
            is_active:cheked
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access')}`,
                'Content-type': 'multipart/form-data'
            }
        }).then((res) => {
            toast.info("Mahsulot statusi o'zgartitrildi", {posetion: 'top-left'})
        }).catch((err) => {
            console.log(err)
        })
    }
    const onSearch = (e) => {
        setIsSearching(true)
        if (e.target.value.length === 0) {
            getProducts()
            setIsSearching(false)
        } else {
            setLoading(true)
            axios.get(`/product/search/${e.target.value}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access')}`
                }
            }).then((res) => {
                setData(res.data)
                setLoading(false)
                console.log(res.data)
            }).catch((error) => {
                setLoading(false)
                setData([])
            })

        }

    }
    return (
        <div className="container moderator products">
            <ToastContainer/>


            <div className="up">
                <Input onChange={onSearch} className={"search-input"} prefix={<SearchOutlined />} size={"large"} placeholder="Search" />
                <div>

                </div>
            </div>
            <Spin wrapperClassName={'spinner'} spinning={loading} size={"large"}>

                {data.length===0?<>
                    <div className='none'>
                        <div className='inner'>
                            <img width={150} height={150} src='/media/penguin.webp' />
                            <span>Hozircha mahsulotlar mavjud emas </span>
                        </div>
                    </div>
                </>:<>
                    <div className="main">
                        {data.map((temp)=>(
                            <div className='product'>
                                <div className='upper'>
                                    <div className='img'>
                                        <img width={120} height={190} src={`http://api.bek-baraka.uz${temp.photos[0].photo}`}/>
                                    </div>
                                    <div className="infos">
                                        <div className='upper-info'>
                                    <span className={temp.is_active?"top-buttons active":'top-buttons'}>
                                        {temp.is_active?'Sotuvga tayyor':'Active emas'}
                                    </span>

                                            <button>
                                                <i className='bx bxs-trash'></i>
                                            </button>
                                            <Popover placement="bottom" title={'Tahrirlash'} content={<>
                                                <li>
                                                    <a href={`/product/update/${temp.id}`}>Skuni tahrirlash</a>
                                                </li>
                                                <li>
                                                    <a href={`/product/main/update/${temp.id}`}>Mahsulotni tahrirlash</a>
                                                </li>


                                            </>} trigger="click">
                                                <button>
                                                    <i className='bx bxs-edit-alt' ></i>
                                                </button>
                                            </Popover>

                                        </div>

                                        <div>
                                            <span>Nomi</span>
                                            <strong>{temp.name}</strong>
                                        </div>
                                        <div>
                                            <span>MXIK</span>
                                            <strong>{temp.mxik}</strong>
                                        </div>
                                        <div>
                                            <span>Brend</span>
                                            <strong>{temp.brand.name}</strong>
                                        </div>
                                        <div>
                                            <span>Kategory</span>
                                            <strong>{temp.category.name}</strong>
                                        </div>
                                        <div>
                                            <span>Active</span>
                                            <strong>
                                                <Switch checked={temp.is_active} onChange={(checked) => changeStatus(temp.id, checked)} size={'small'} /></strong>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </>}
            </Spin>








        </div>




    );
};

export default Supplier;
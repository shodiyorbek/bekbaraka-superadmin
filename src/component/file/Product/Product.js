import React, {useEffect, useState} from 'react';
import {Input, Modal, Pagination, Spin, Switch} from "antd";
import './Product.scss'
import {SearchOutlined,ExclamationCircleFilled} from "@ant-design/icons";
import axios from "../../axios/axios";
import {toast, ToastContainer} from "react-toastify";

const Supplier = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isSearching,setIsSearching] = useState(false)
    const [amount,setAmount]=useState(0)
    const [currentPage,setCurrentPage]=useState(1)
    const { confirm } = Modal;
    if(loading){
        document.body.style.overflow='hidden'
    }else {
        document.body.style.overflow='auto'
    }
    const getProducts = (countPage)=>{
        setLoading(true)
        axios.get(`/all/product/get/?limit=12&page_number=${countPage}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('access')}`
            }
        }).then((res)=>{
            setLoading(false)
            console.log("data",res)
            setData(res.data.results)
            setAmount(res.data.count)
        }).catch((err)=>{
            setLoading(false)
        })
    }
    useEffect(() => {
        getProducts(1)
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
            getProducts(1)
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
    const pagination = (e)=>{
        setCurrentPage(e)
        getProducts(e)
    }
    const showPropsConfirm = (id) => {
        confirm({
            title: 'Are you sure delete this product?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            centered:true,
            cancelText: 'No',
            onOk() {
                const temp=data.filter(item=>item.id!==id)
                setData(temp)
                axios.delete(`/product/delete/${id}`,{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('access')}`
                    }
                }).then((res)=>{
                    console.log(res)

                })
                console.log('OK');

            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    return (
        <div className="container moderator products">
            <ToastContainer/>


            <div className="up">
                <Input onChange={onSearch} className={"search-input"} prefix={<SearchOutlined />} size={"large"} placeholder="Search" />
                <div>

                </div>
            </div>
            {(data.length>=12||amount>12)&&!isSearching?<Pagination onChange={pagination} className="pagination moderator-product-pagination" simple defaultCurrent={1} total={amount} pageSize={12} current={currentPage} />:<></>}

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

                                            <button onClick={()=>showPropsConfirm(temp.id)}>
                                                <i className='bx bxs-trash'></i>
                                            </button>


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
                                                <Switch disabled={!temp.is_price} checked={temp.is_active} onChange={(checked) => changeStatus(temp.id, checked)} size={'small'} /></strong>
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
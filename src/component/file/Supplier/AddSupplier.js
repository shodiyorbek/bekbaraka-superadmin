import React, {useEffect, useState} from 'react';
import {Button, Form, Input, message, Select} from 'antd';
import './Supplier.scss';
import { useNavigate } from 'react-router-dom';
import ImgUpload from "../lib/ImageUploader/Uploader";
import PhoneInput from "react-phone-input-2";
import axios from "../../axios/axios";

const AddSupplier = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [submittable,setSubmittable]= useState(false)
    const [imagePreviewUrl, setImagePreviewUrl] = useState(
        "https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
    );
    const [cars,setCars]=useState()
    const [seller,setSeller]=useState()
    const [image,setImage]=useState()

    const onFinish = (values) => {
        const formData = new FormData()
        formData.append('first_name',values.first_name)
        formData.append('last_name',values.last_name)
        formData.append('phone_number',values.phone_number)
        formData.append('password',values.password)
        formData.append('photo',image)
        formData.append('sex',values.sex)
        formData.append('car_number',values.car_number)
        formData.append('car_name',values.car_name)
        formData.append('seller',values.seller)
        axios.post('/supplier/create', formData,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access')}`
            }
        }).then((res) => {

      console.log(res)

        }).catch((err) => {
            console.log(err)
            if (err.response.status === 401) {
                localStorage.clear()
                window.location.href = '/login'
            }
        })
    };

    const back = () => {
        navigate('/supplier');
    };

    const photoUpload = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const files = e.target.files;
        const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
        setImage(value)
        if (files && files.length > 0) {
            const file = files[0];
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleValuesChange = (changedValues, allValues) => {
        const allFieldsFilled = Object.values(allValues).every(value => value !== undefined && value !== '');
        if (allFieldsFilled) {
            setSubmittable(true)
            form.setFields([{ name: 'image', value: allValues.image }]);
        } else {
            form.setFields([{ name: 'image', value: allValues.image }]);

        }
    };
    const [selectedSeller, setSelectedSeller] = useState([]);

    const getCars = () => {
        axios.get('/car/create_or_get', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access')}`
            }
        }).then((res) => {


            const cars = res.data.results.map((temp) => ({
                 label: temp.name, value: temp.id
            }));
            console.log(cars)
            setCars(cars)

        }).catch((err) => {
            if (err.response.status === 401) {
                localStorage.clear()
                window.location.href = '/login'
            }
        })
    }
    const getSeller = () => {
        axios.get('/list/sellers', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access')}`
            }
        }).then((res) => {

            const seller = res.data.results.map((temp) => ({
                label: temp.first_name, value: temp.id
            }));
            setSeller(seller)

        }).catch((err) => {
            if (err.response.status === 401) {
                localStorage.clear()
                window.location.href = '/login'
            }
        })
    }
    useEffect(() => {
        getCars()
        getSeller()
    }, []);
    const handleSellerChange = (selectedValues) => {
        setSelectedSeller(selectedValues);
    };

    return (
        <div className="container add">
            <div className="up">
                <Button onClick={back} className="button" size="large">
                    <i className="bx bx-chevron-left"></i> Back
                </Button>
            </div>
            <div className="main-section">
                <Form
                    style={{width:'100%'}}
                    className='form'
                    form={form}
                    onFinish={onFinish}
                    name="validateOnly"
                    layout="vertical"
                    autoComplete="off"
                    onValuesChange={handleValuesChange}
                >
                    <Form.Item className="image" name="image" label="" rules={[{ required: true, message: 'Please upload an image' }]}>
                        <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
                    </Form.Item>
                    <div className="main-inputs">
                    <Form.Item  name="name" label="Name" rules={[{ required: true }]}>
                        <Input size='large' />
                    </Form.Item>

                        <Form.Item  name="surname" label="Surname" rules={[{ required: true }]}>
                        <Input size='large' />
                    </Form.Item>
                        <Form.Item name="phone" label="Phone number" rules={[{ required: true }]}>
                            <PhoneInput

                                countryCodeEditable={false}

                                inputProps={{
                                    name: 'phone',
                                    autoFocus: true
                                }}
                                country={'uz'}
                                disableDropdown={true}
                                inputStyle={{width:'100%',height:40}}


                            />
                        </Form.Item>
                        <Form.Item  name="carname" label="Car name" rules={[{ required: true }]}>
                            <Select
                                size='large'
                                defaultValue=""
                                options={cars}
                            />
                    </Form.Item>


                        <Form.Item  name="carnumber" label="Car number" rules={[{ required: true }]}>
                        <Input size='large' />
                    </Form.Item>




                    <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                        <Select
                            size='large'
                            defaultValue="male"
                            options={[
                                {
                                    value: 'male',
                                    label: 'Erkak',
                                },
                                {
                                    value: 'female',
                                    label: 'Ayol',
                                },

                            ]}
                        />
                    </Form.Item>

                    <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                        <Input.Password size='large' />
                    </Form.Item>
                        <Form.Item name="seller" label="Sotuvchi" rules={[{ required: true }]}>
                            <Select
                                mode="multiple"
                                size="large"
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                options={seller}
                                onChange={handleSellerChange}
                                filterOption={(input, option) =>
                                    option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            />
                    </Form.Item>

                    <Form.Item label=" ">
                        <Button htmlType={"submit"} size='large' className="button" type="primary" disabled={!submittable}>
                            Submit
                        </Button>
                    </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddSupplier;

import React, { useState } from 'react';
import {Button, Form, Input, Select} from 'antd';
import './Moderator.scss';
import ImgUpload from "../lib/ImageUploader/Uploader";
import PhoneInput from "react-phone-input-2";
import axios from "../../axios/axios";
import {toast, ToastContainer} from "react-toastify";

const AddModerator = () => {

    const [form] = Form.useForm();
    const [submittable,setSubmittable]= useState(false)
    const [image,setImage]=useState()
    const [imagePreviewUrl, setImagePreviewUrl] = useState(
        "https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
    );
    const onFinish = (values) => {
        setSubmittable(true)
        const formData = new FormData;
        formData.append('first_name',values.first_name)
        formData.append('last_name',values.last_name)
        formData.append('phone_number',values.phone_number)
        formData.append('password',values.password)
        formData.append('photo',image)
        formData.append('sex',values.sex)
        console.log(values)
        axios.post('/super/moderator/create/',formData,{
            headers:{
                'Authorization' : `Bearer ${localStorage.getItem('access')}`,
                'Content-type':'multipart/form-data'
            }
        }).then((res)=>{
            toast.info('Moderator muofiqiatli yaratildi', {
                position: toast.POSITION.TOP_RIGHT
            });
            setSubmittable(false)
            form.resetFields();
            setImagePreviewUrl("https://cdn.landesa.org/wp-content/uploads/default-user-image.png");
            setImage(null);
        }).catch((error)=>{
            setSubmittable(false)
            console.log(error)
            if(error.response.status===401){
                localStorage.clear()
                window.location.href='/login'
            }
            if(error.response.data.message!==undefined){
                toast.error(error.response.data.message[0], {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
            else {
                toast.error('Password must be number and letters', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })
    };

    const back = () => {
        window.location.href=('/moderator');
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

    return (
        <div className="container add">
            <ToastContainer/>
            <div className="up">
                <Button onClick={back} className="button" size="large">
                    <i className="bx bx-chevron-left"></i> Back
                </Button>
            </div>
            <div className="main-section">
                <Form
                    style={{width:'100%'}}
                    className="form"
                    form={form}
                    onFinish={onFinish}
                    name="validateOnly"
                    layout="vertical"
                    autoComplete="off"
                    onValuesChange={handleValuesChange}
                >
                    <Form.Item className="photo" name="photo" label="" rules={[{ required: true, message: 'Please upload an image' }]}>
                        <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
                    </Form.Item>
                    <div className="main-inputs">
                    <Form.Item  name="first_name" label="Name" rules={[{ required: true }]}>
                        <Input size='large' />
                    </Form.Item>
                    <Form.Item name="last_name" label="Surname" rules={[{ required: true }]}>
                        <Input  size='large'/>
                    </Form.Item>
                    <Form.Item name="phone_number" label="Phone number" rules={[{ required: true }]}>
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
                    <Form.Item name="sex" label="Gender" rules={[{ required: true }]}>
                        <Select
                            size='large'
                            defaultValue=""
                            options={[
                                {
                                    value: '',
                                    label: 'Jinsni tanlang',
                                },{
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
                    <Form.Item label=" ">
                        <Button   size='large' htmlType='submit' className="button" type="primary" disabled={!submittable}>
                            Submit
                        </Button>
                    </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddModerator;

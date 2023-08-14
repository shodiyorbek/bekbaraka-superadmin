import React, { useState } from 'react';
import { Button, Form, Input } from "antd";
import "./main.scss";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import {NavLink} from "react-router-dom";
import axios from "../../axios/axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const login = () => {
    const onFinish = (values) => {
    axios.post('/login/',values,{
        headers:{
            'Content-type':'Application/json'
        }
    }).then((res)=>{
        localStorage.setItem("access",res.data.access)
        localStorage.setItem("refresh",res.data.refresh)
        window.location.href='/'
    }).catch((error)=>{
        toast.error('Bunday foydalanuvchi mavjud emas', {
            position: toast.POSITION.TOP_RIGHT
        });
    })
  };
    return (
      <div className="main-login-form">
          <ToastContainer/>
          <div className="main-form">
              <h1 style={{textAlign:'center'}}>Kirish</h1>
      <Form
        layout="vertical"
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
            className="custom-form-item"

            style={{margin:0}}
            label="Telefon raqam"
            name="phone_number"
            valuePropName={"+998 (__) ___-__-__"}
            rules={[
              {
                required: true,
                message: "Please input your Phone Number!",
              },

            ]}
        >
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
        <Form.Item
            style={{marginBottom:5}}
          label={"Parol"}
              name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password size={"large"} type="password" placeholder="" />
        </Form.Item>
          <NavLink  className="login-form-forgot" to="/resetVerify">
              Parolni unutdingizmi?
          </NavLink>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%",marginTop:10 }}
            className="login-form-button"
          >
            Kirish
          </Button>
        </Form.Item>
      </Form>
    </div>  
      </div>
    
  );
};

export default login;

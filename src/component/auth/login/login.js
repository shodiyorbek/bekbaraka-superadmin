import React, { useState } from 'react';
import { Button, Form, Input } from "antd";
import "./main.scss";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import {NavLink} from "react-router-dom";

const login = () => {
    const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
    return (
      <div className="main-login-form">
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
            name="phoneNumber"
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

import React, { useState } from 'react';
import { Button, Form, Input } from "antd";
import "./main.scss";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'

const login = () => {
    const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
    return (
      <div className="main-login-form">
          <div className="main-form">
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
        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>  
      </div>
    
  );
};

export default login;

import React from 'react';
  import { Button, Form } from "antd";
import "../login/main.scss";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import { NavLink } from 'react-router-dom';
const resetPassword = () => {
  
    const onFinish = (values) => {
    console.log(values)
        localStorage.setItem("phone",values.phoneNumber)
        window.location.href='/codeVerify'
}

    return (
       <div className="main-login-form">
            <div className="main-form">
                <h4 style={{ textAlign: 'center',marginBottom:10}}>Parolni tiklash uchun ro'yxatdan o'tgan telefon raqamindizni kiting</h4>
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
       
        

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            className="login-form-button"
          >
            Log in
                        </Button>
                        <NavLink  className="login-form-forgot" to="/login">
            Ortga
          </NavLink>
                    </Form.Item>
                 
          
       
      </Form>
    </div>  
      </div>
    );
};

export default resetPassword;
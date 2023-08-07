import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import {NavLink} from "react-router-dom";
import './reset.scss'

const verifyCode = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [code,setCode]=useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[enable,setEnable]=useState(false)
    const handleCode =(e)=>{
        const value = e.target.value;
        if(e.target.value.length==6){
            setEnable(true)
        }
        else if(e.target.value.length<6){
            setEnable(false)
        }
        if (value.length <= 6) {
            setCode(value);
        }
    }
    return (
        <div className="main-login-form resetVerify">
            <div className="main-form">
                <h3 style={{textAlign:'center',lineHeight:1.5}}>Parolni tiklash uchun sms orqli kelgan ko'dni kiriting <br/> {'+'  + localStorage.getItem("phone")}</h3>
                <NavLink   className="login-form-forgot" to="/resetVerify">
                    O'zgartirish
                </NavLink>
                <Form
                    layout="vertical"
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}

                >


                    <Form.Item
                        onChange={handleCode}

                        style={{marginBottom:5}}

                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Input maxLength={6}
                               value={code} size={"large"} placeholder="xxxxxx" />
                    </Form.Item>


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

export default verifyCode;
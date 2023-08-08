import React, {useState} from 'react';
import {Button, Form, Input, Space} from "antd";
import {NavLink} from "react-router-dom";
import  './reset.scss'
import Timer from "./Timer";

const verifyCode = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [code,setCode]=useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[enable,setEnable]=useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isExpire,setIsExpire]=useState(false)
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
    const handleDataFromChild = (data) => {
       setIsExpire(!data)
    };
    return (
        <div className="main-login-form resetVerify">
            <div className="main-form">
                <h3 style={{textAlign:'center',lineHeight:1.5}}>Parolni tiklash uchun sms orqli kelgan ko'dni kiriting <br/> {'+'  + localStorage.getItem("phone")} <br/>
                    <NavLink  className="login-form-forgot" to="/resetVerify">
                        O'zgartirish
                    </NavLink>
                </h3>

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

                        style={{marginBottom:5,width:'100%'}}

                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                    >
                        <Space style={{borderRadius:6,overflow:"hidden",width:'100%'}} direction="vertical" size="large">
                            <Space.Compact style={{width:'100%'}}>

                                <Input
                                    className="numberInput"
                                    onChange={handleCode}
                                    maxLength={6}
                                    value={code}
                                    placeholder="xxxxxx"
                                    type="number"
                                />
                                <Timer isValid={handleDataFromChild}/>

                            </Space.Compact>
                        </Space>
                    </Form.Item>


                    <Form.Item>
                        {isExpire?<Button
                            type="primary"
                            style={{ width: "100%",marginTop:10 }}
                            className="login-form-button"
                        >Qayta yuborish
                        </Button>:
                            <Button
                                disabled={!enable}
                                type="primary"
                                htmlType="submit"
                                style={{ width: "100%",marginTop:10 }}
                                className="login-form-button"
                            >
                                Kirish
                            </Button>

                        }

                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default verifyCode;
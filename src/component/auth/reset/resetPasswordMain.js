import React, {useState} from 'react';
import {Button, Input, Tooltip} from "antd";
import FormItemLabel from "antd/es/form/FormItemLabel";


const ResetPassword = () => {
    const[status,setStatus]=useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValid, setIsValid] = useState(false);



    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        validatePassword(value, confirmPassword);
    };

    const handleConfirmPasswordChange = (event) => {
        const value = event.target.value;
        setConfirmPassword(value);
        validatePassword(password, value);
    };

    const validatePassword = (pass, confirmPass) => {
        const hasNumber = /\d/.test(pass);
        const hasLowercase = /[a-z]/.test(pass);
        const hasUppercase = /[A-Z]/.test(pass);
        setIsValid(hasNumber && hasLowercase && hasUppercase && pass.length >= 8 && pass === confirmPass);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            setStatus("warning");

        } else {
            setStatus("error");
        }

    };


    return (
        <div className={"main-login-form"}>
            <div className="main-form">
                <b>Iltimos yangi parol kiriting</b>

                <div style={{width:"100%",textAlign:"start"}}>
                    <Tooltip  placement="topLeft" title="Kamida 8 ta lotin harflari va raqamlardan iborat bo'lishi kerak">
                        <FormItemLabel prefixCls={"*"} label="Yangi parol yarating"/>
                        <Input  status={status} value={password} onChange={handlePasswordChange} name="password"/>
                    </Tooltip>
                </div>
                <div style={{width:"100%",textAlign:"start"}}>
                    <Tooltip  placement="topLeft" title="Kamida 8 ta lotin harflari va raqamlardan iborat bo'lishi kerak">
                        <FormItemLabel label="Parolni tasdiqlang"/>
                        <Input status={status} value={confirmPassword} onChange={handleConfirmPasswordChange}  name="confirmPassword"/>
                    </Tooltip>
                </div>
                <Button style={{width:'100%',marginTop:15}} onSubmit={handleSubmit} disabled={!isValid}  type={"primary"} onClick={handleSubmit}>
                    Parolni tiklash
                </Button>
            </div>
        </div>
    );
};

export default ResetPassword;
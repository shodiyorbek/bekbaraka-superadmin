import React, {useState} from 'react';
import './Settings.scss'
import {Button, Checkbox, Form, Input, message, Radio, Select} from "antd";
import ImgUpload from "../lib/ImageUploader/Uploader";
import PhoneInput from "react-phone-input-2";

const Setting = () => {
    const [form] = Form.useForm();
    const [selectedLanguage, setSelectedLanguage] = useState('uz'); // State to hold selected language
    const [imagePreviewUrl, setImagePreviewUrl] = useState(
        "https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
    );

    const onFinish = (values) => {
        console.log(values);
    };
    const photoUpload = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const files = e.target.files;

        if (files && files.length > 0) {
            const file = files[0];
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleButtonClick = (value) => {
        setSelectedLanguage(value); // Update selected language state when button is clicked
    };
    return (
        <div className="container settings">
            <div className="up" ></div>
            <div className="user">
                <h1>Profile</h1>
                <div className="main-section">
                    <Form
                        style={{width:'100%'}}
                        className="form"
                        form={form}
                        onFinish={onFinish}
                        name="validateOnly"
                        layout="vertical"
                        autoComplete="off"
                    >
                        <Form.Item className="image" name="image" label="" >
                            <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
                        </Form.Item>
                        <div className="main-inputs">
                            <Form.Item  name="name" label="Name" >
                                <Input size='large' />
                            </Form.Item>
                            <Form.Item name="surname" label="Surname">
                                <Input  size='large'/>
                            </Form.Item>
                            <Form.Item name="phone" label="Phone number" >
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
                            <Form.Item name="gender" label="Gender" >
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
                            <Form.Item name="password" label="New password" >
                                <Input.Password size='large'/>
                            </Form.Item>
                            <Form.Item name="confirm" label="Confirm password" >
                                <Input.Password size='large'/>
                            </Form.Item>

                            <Form.Item label=" ">
                                <Button size='large' htmlType='submit' className="button" type="primary" >
                                    Submit
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
            <div className="language">
                <h1>Interfeys tili</h1>
                <Radio.Group className="language"  value={selectedLanguage}>

                <button onClick={() => handleButtonClick('ru')}>
                    <div className="info">
                        <div className="img">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_548_31329" >
                                    <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#F4F5F5"></path>
                                </mask>
                                <g mask="url(#mask0_548_31329)">
                                    <rect x="2" y="2.5" width="20" height="20" fill="#F4F5F5"></rect>
                                    <rect x="2" y="15.5" width="20" height="7" fill="#E63838"></rect>
                                    <rect x="2" y="9" width="20" height="7" fill="#3131C4"></rect>
                                </g>
                            </svg>
                        </div>
                        <div className="country-info">
                            <div className="title">Русский (RUS)</div>
                            <div className="commit">Russian</div>
                        </div>
                    </div>
                    <Radio value="ru"></Radio>
                </button>

                <button onClick={() => handleButtonClick('uz')}>
                    <div className="info">
                        <div className="img">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_548_31336" >
                                    <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#F4F5F5"></path>
                                </mask>
                                <g mask="url(#mask0_548_31336)">
                                    <rect x="2" y="2.5" width="20" height="20" fill="#0099B5"></rect>
                                    <rect x="2" y="15.5" width="20" height="7" fill="#1EB53A"></rect>
                                    <rect x="2" y="15.5" width="20" height="1" fill="#CE1126"></rect>
                                    <rect x="2" y="8.5" width="20" height="1" fill="#CE1126"></rect>
                                    <rect x="2" y="9" width="20" height="7" fill="#F4F5F5"></rect>
                                </g>
                                <g clip-path="url(#clip0_548_31336)">
                                    <path d="M7.07142 7.77467C7.89506 7.77467 8.56276 7.10698 8.56276 6.28333C8.56276 5.45969 7.89506 4.79199 7.07142 4.79199C6.24777 4.79199 5.58008 5.45969 5.58008 6.28333C5.58008 7.10698 6.24777 7.77467 7.07142 7.77467Z" fill="white"></path>
                                    <path d="M7.56861 7.77467C8.39226 7.77467 9.05995 7.10698 9.05995 6.28333C9.05995 5.45969 8.39226 4.79199 7.56861 4.79199C6.74497 4.79199 6.07727 5.45969 6.07727 6.28333C6.07727 7.10698 6.74497 7.77467 7.56861 7.77467Z" fill="#0099B5"></path>
                                    <path d="M10.352 7.17822L10.26 7.4616L10.4017 7.50883" fill="white"></path>
                                    <path d="M10.3522 7.17822L10.4442 7.4616L10.3025 7.50883" fill="white"></path>
                                    <path d="M10.6358 7.38477H10.3375V7.53391" fill="white"></path>
                                    <path d="M10.6352 7.38477L10.3941 7.56125L10.3071 7.43945" fill="white"></path>
                                    <path d="M10.0686 7.38477L10.3097 7.56125L10.3967 7.43945" fill="white"></path>
                                    <path d="M10.0686 7.38477H10.3669V7.53391" fill="white"></path>
                                    <path d="M10.5287 7.71794L10.4367 7.43457L10.295 7.4818" fill="white"></path>
                                    <path d="M10.5283 7.71723L10.2872 7.54075L10.3742 7.41895" fill="white"></path>
                                    <path d="M10.1758 7.71723L10.4169 7.54075L10.3299 7.41895" fill="white"></path>
                                    <path d="M10.1758 7.71794L10.2678 7.43457L10.4094 7.4818" fill="white"></path>
                                    <path d="M10.352 5.98486L10.26 6.26824L10.4017 6.31547" fill="white"></path>
                                    <path d="M10.3522 5.98486L10.4442 6.26824L10.3025 6.31547" fill="white"></path>
                                    <path d="M10.6358 6.19141H10.3375V6.34055" fill="white"></path>
                                    <path d="M10.6352 6.19141L10.3941 6.36789L10.3071 6.24609" fill="white"></path>
                                    <path d="M10.0686 6.19141L10.3097 6.36789L10.3967 6.24609" fill="white"></path>
                                    <path d="M10.0686 6.19141H10.3669V6.34055" fill="white"></path>
                                    <path d="M10.5287 6.5241L10.4367 6.24072L10.295 6.28795" fill="white"></path>
                                    <path d="M10.5283 6.52436L10.2872 6.34788L10.3742 6.22607" fill="white"></path>
                                    <path d="M10.1758 6.52436L10.4169 6.34788L10.3299 6.22607" fill="white"></path>
                                    <path d="M10.352 4.79199L10.26 5.07537L10.4017 5.1226" fill="white"></path>
                                    <path d="M10.3522 4.79199L10.4442 5.07537L10.3025 5.1226" fill="white"></path>
                                    <path d="M10.6358 4.99854H10.3375V5.14768" fill="white"></path>
                                    <path d="M10.6352 4.99854L10.3941 5.17502L10.3071 5.05322" fill="white"></path>
                                    <path d="M10.0686 4.99854L10.3097 5.17502L10.3967 5.05322" fill="white"></path>
                                    <path d="M10.0686 4.99854H10.3669V5.14768" fill="white"></path>
                                    <path d="M10.5287 5.33123L10.4367 5.04785L10.295 5.09508" fill="white"></path>
                                    <path d="M10.5283 5.33198L10.2872 5.15549L10.3742 5.03369" fill="white"></path>
                                    <path d="M10.1758 5.33198L10.4169 5.15549L10.3299 5.03369" fill="white"></path>
                                    <path d="M11.5455 7.17822L11.4535 7.4616L11.5952 7.50883" fill="white"></path>
                                    <path d="M11.5452 7.17822L11.6372 7.4616L11.4955 7.50883" fill="white"></path>
                                    <path d="M11.8286 7.38477H11.5303V7.53391" fill="white"></path>
                                    <path d="M11.829 7.38477L11.5879 7.56125L11.5009 7.43945" fill="white"></path>
                                    <path d="M11.2618 7.38477L11.503 7.56125L11.59 7.43945" fill="white"></path>
                                    <path d="M11.2618 7.38477H11.5601V7.53391" fill="white"></path>
                                    <path d="M11.7219 7.71794L11.63 7.43457L11.4883 7.4818" fill="white"></path>
                                    <path d="M11.7218 7.71723L11.4807 7.54075L11.5677 7.41895" fill="white"></path>
                                    <path d="M11.3688 7.71723L11.6099 7.54075L11.5229 7.41895" fill="white"></path>
                                    <path d="M11.5455 5.98486L11.4535 6.26824L11.5952 6.31547" fill="white"></path>
                                    <path d="M11.5452 5.98486L11.6372 6.26824L11.4955 6.31547" fill="white"></path>
                                    <path d="M11.8286 6.19141H11.5303V6.34055" fill="white"></path>
                                    <path d="M11.2618 6.19141L11.503 6.36789L11.59 6.24609" fill="white"></path>
                                    <path d="M11.2618 6.19141H11.5601V6.34055" fill="white"></path>
                                    <path d="M11.7219 6.5241L11.63 6.24072L11.4883 6.28795" fill="white"></path>
                                    <path d="M11.3685 6.52436L11.6096 6.34788L11.5226 6.22607" fill="white"></path>
                                    <path d="M11.5455 4.79199L11.4535 5.07537L11.5952 5.1226" fill="white"></path>
                                    <path d="M11.5452 4.79199L11.6372 5.07537L11.4955 5.1226" fill="white"></path>
                                    <path d="M11.8286 4.99854H11.5303V5.14768" fill="white"></path>
                                    <path d="M11.2618 4.99854L11.503 5.17502L11.59 5.05322" fill="white"></path>
                                    <path d="M11.2618 4.99854H11.5601V5.14768" fill="white"></path>
                                    <path d="M11.7219 5.33123L11.63 5.04785L11.4883 5.09508" fill="white"></path>
                                    <path d="M11.3685 5.331L11.6096 5.15452L11.5226 5.03271" fill="white"></path>
                                    <path d="M12.7385 7.17822L12.6465 7.4616L12.7882 7.50883" fill="white"></path>
                                    <path d="M12.7381 7.17822L12.83 7.4616L12.6884 7.50883" fill="white"></path>
                                    <path d="M13.0219 7.38477H12.7236V7.53391" fill="white"></path>
                                    <path d="M13.0215 7.38477L12.7804 7.56125L12.6934 7.43945" fill="white"></path>
                                    <path d="M12.4553 7.38477L12.6964 7.56125L12.7834 7.43945" fill="white"></path>
                                    <path d="M12.4553 7.38477H12.7536V7.53391" fill="white"></path>
                                    <path d="M12.9149 7.71794L12.823 7.43457L12.6813 7.4818" fill="white"></path>
                                    <path d="M12.9151 7.71723L12.674 7.54075L12.761 7.41895" fill="white"></path>
                                    <path d="M12.5619 7.71723L12.803 7.54075L12.716 7.41895" fill="white"></path>
                                    <path d="M12.7385 5.98486L12.6465 6.26824L12.7882 6.31547" fill="white"></path>
                                    <path d="M12.7381 5.98486L12.83 6.26824L12.6884 6.31547" fill="white"></path>
                                    <path d="M13.0219 6.19141H12.7236V6.34055" fill="white"></path>
                                    <path d="M12.4553 6.19141L12.6964 6.36789L12.7834 6.24609" fill="white"></path>
                                    <path d="M12.4553 6.19141H12.7536V6.34055" fill="white"></path>
                                    <path d="M12.9149 6.5241L12.823 6.24072L12.6813 6.28795" fill="white"></path>
                                    <path d="M12.5621 6.52436L12.8033 6.34788L12.7163 6.22607" fill="white"></path>
                                    <path d="M12.7385 4.79199L12.6465 5.07537L12.7882 5.1226" fill="white"></path>
                                    <path d="M12.7381 4.79199L12.83 5.07537L12.6884 5.1226" fill="white"></path>
                                    <path d="M13.0219 4.99854H12.7236V5.14768" fill="white"></path>
                                    <path d="M12.4553 4.99854L12.6964 5.17502L12.7834 5.05322" fill="white"></path>
                                    <path d="M12.4553 4.99854H12.7536V5.14768" fill="white"></path>
                                    <path d="M12.9149 5.33123L12.823 5.04785L12.6813 5.09508" fill="white"></path>
                                    <path d="M12.5623 5.331L12.8034 5.15452L12.7164 5.03271" fill="white"></path>
                                    <path d="M7.96636 7.17822L7.87439 7.4616L8.01608 7.50883" fill="white"></path>
                                    <path d="M7.96597 7.17822L8.05795 7.4616L7.91626 7.50883" fill="white"></path>
                                    <path d="M8.24909 7.38477H7.95081V7.53391" fill="white"></path>
                                    <path d="M8.24975 7.38477L8.00863 7.56125L7.92163 7.43945" fill="white"></path>
                                    <path d="M7.68298 7.38477L7.9241 7.56125L8.0111 7.43945" fill="white"></path>
                                    <path d="M7.68298 7.38477H7.98127V7.53391" fill="white"></path>
                                    <path d="M8.14284 7.71794L8.05087 7.43457L7.90918 7.4818" fill="white"></path>
                                    <path d="M8.14297 7.71723L7.90186 7.54075L7.98886 7.41895" fill="white"></path>
                                    <path d="M7.78955 7.71723L8.03067 7.54075L7.94367 7.41895" fill="white"></path>
                                    <path d="M7.78955 7.71794L7.88152 7.43457L8.02321 7.4818" fill="white"></path>
                                    <path d="M9.15911 7.17822L9.06714 7.4616L9.20883 7.50883" fill="white"></path>
                                    <path d="M9.15897 7.17822L9.25094 7.4616L9.10925 7.50883" fill="white"></path>
                                    <path d="M9.44258 7.38477H9.14429V7.53391" fill="white"></path>
                                    <path d="M9.4425 7.38477L9.20138 7.56125L9.11438 7.43945" fill="white"></path>
                                    <path d="M8.87598 7.38477L9.11709 7.56125L9.20409 7.43945" fill="white"></path>
                                    <path d="M8.87598 7.38477H9.17427V7.53391" fill="white"></path>
                                    <path d="M9.33583 7.71794L9.24386 7.43457L9.10217 7.4818" fill="white"></path>
                                    <path d="M9.3356 7.71723L9.09448 7.54075L9.18148 7.41895" fill="white"></path>
                                    <path d="M8.98303 7.71723L9.22415 7.54075L9.13715 7.41895" fill="white"></path>
                                    <path d="M8.98303 7.71794L9.075 7.43457L9.21669 7.4818" fill="white"></path>
                                    <path d="M9.15911 5.98486L9.06714 6.26824L9.20883 6.31547" fill="white"></path>
                                    <path d="M9.15897 5.98486L9.25094 6.26824L9.10925 6.31547" fill="white"></path>
                                    <path d="M9.44258 6.19141H9.14429V6.34055" fill="white"></path>
                                    <path d="M9.4425 6.19141L9.20138 6.36789L9.11438 6.24609" fill="white"></path>
                                    <path d="M8.87598 6.19141L9.11709 6.36789L9.20409 6.24609" fill="white"></path>
                                    <path d="M8.87598 6.19141H9.17427V6.34055" fill="white"></path>
                                    <path d="M9.33583 6.5241L9.24386 6.24072L9.10217 6.28795" fill="white"></path>
                                    <path d="M9.3356 6.52436L9.09448 6.34788L9.18148 6.22607" fill="white"></path>
                                    <path d="M8.98303 6.52436L9.22415 6.34788L9.13715 6.22607" fill="white"></path>
                                    <path d="M8.98303 6.5241L9.075 6.24072L9.21669 6.28795" fill="white"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_548_31336">
                                        <rect width="8.72642" height="3.87841" fill="white" transform="translate(5 4.29492)"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="country-info">
                            <div className="title">O'zbek (UZB)</div>
                            <div className="commit">Uzbek</div>
                        </div>
                    </div>
                    <Radio value="uz"></Radio>
                </button>
                </Radio.Group>
            </div>
        </div>
    );
};

export default Setting;
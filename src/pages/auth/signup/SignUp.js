import React, { useState } from 'react';
import { Steps, Panel } from 'rsuite';
import { FaUser, FaPlus, FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import InputGroup from '../../../components/elements/Input/InputGroup';
import Button from '../../../components/elements/Button/index';
import {
    InputFile,
    InputRadio,
} from '../../../components/elements/Input/InputFile';
import DividerPanel from '../../../components/elements/DividerPanel';
import { Link } from 'react-router-dom';
import UploadProfilePic from '../../../components/websiteCompoents/UploadFile/uploadProfilePic';

const KemSignUp = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        email: '',
        phone: '',
        location: '',
        password: '',
        conf_pass: '',
        avatar: '',
        why_here: '',
    });

    let newValue = {};
    function updateValue(newVal, variable) {
        console.log('lol');
        // eslint-disable-next-line no-lone-blocks
        {
            variable === 'fullname' && (newValue = { fullname: newVal });
            variable === 'username' && (newValue = { username: newVal });
            variable === 'email' && (newValue = { email: newVal });
            variable === 'phone' && (newValue = { phone: newVal });
            variable === 'location' && (newValue = { location: newVal });
            variable === 'password' && (newValue = { password: newVal });
            variable === 'conf_pass' && (newValue = { conf_pass: newVal });
            variable === 'avatar' && (newValue = { avatar: newVal });
            variable === 'why_here' && (newValue = { why_here: newVal });
        }
        setFormData({
            ...formData,
            ...newValue,
        });
        console.log(formData);
    }
    const [step, setStep] = useState(0);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    // functions

    const onChange = (nextStep) => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);
    const submitButton = () => {
        const fullName = document.getElementById('fullName');
        console.log(fullName);
    };
    console.log(formData.avatar);
    return (
        <section className="h-80 min-h-screen overflow-x-hidden">
            <div className="w-full h-full flex">
                <div className="fixed left-0 top-0 hidden md:block sm-w-40 md:w-2/5 bg-slate-800 h-full"></div>
                <div className="hidden md:block sm-w-40 md:w-2/5 bg-slate-800 h-full"></div>
                <div className="w-full md:w-3/5  px-1 md:px-4 flex flex-col items-center">
                    <div className="flex justify-between items-center w-full p-3 ">
                        <div className="flex h-10 mt-10 items-center">
                            <Button
                                btnClass="h-8 rounded-l"
                                onClick={onPrevious}
                                disabled={step === 0}
                                title={<FaAngleLeft />}
                            />
                        </div>
                        <div className="flex">
                            <h5 className="text-sm h-10 leading-6 flex items-center px-3 text-bold m-1">
                                Have an account?
                            </h5>
                            <Link to="/signin">
                                <h5 className="text-sm h-10 w-20 leading-6 flex items-center px-3 font-medium bg-gray-50 text-slate-700 hover:bg-gray-100 rounded m-1 shadow hover:decoration-none">
                                    Sign in
                                </h5>
                            </Link>
                        </div>
                    </div>
                    <div className="w-5/6 md:w-4/6 my-5">
                        <h1 className="font-black text-black text-4xl ">
                            Register
                        </h1>
                        <p className="text-gray-500 leading-7 mx-1 mt-3 w-full md:w-4/5 lg:w-3/5">
                            Let's get you set up so you can verify your account
                            and start your journey with kemon market
                        </p>
                    </div>
                    <div className="w-full md:w-4/5 my-3 h-80 min-h-[450px] md:min-h-[430px] relative">
                        <Steps current={step}>
                            <Steps.Item title={''} />
                            <Steps.Item title="" />
                            <Steps.Item title={''} />
                            <Steps.Item title={''} />
                        </Steps>
                        <Panel header={`Step: ${step + 1}`}>
                            {step === 0 && (
                                <>
                                    <div className="flex w-full">
                                        <div className="w-2/4 m-1">
                                            <InputGroup
                                                label="Name"
                                                name="fullName"
                                                placeholder=" "
                                                required={true}
                                                onChange={(e) =>
                                                    updateValue(
                                                        e.target.value,
                                                        'fullname'
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="w-2/4 m-1">
                                            <InputGroup
                                                label="Username"
                                                placeholder=" "
                                                required={true}
                                                onChange={(e) =>
                                                    updateValue(
                                                        e.target.value,
                                                        'username'
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="w-2/4 m-1">
                                            <InputGroup
                                                label="Email"
                                                placeholder=" "
                                                required={true}
                                                onChange={(e) =>
                                                    updateValue(
                                                        e.target.value,
                                                        'email'
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="w-2/4 m-1">
                                            <InputGroup
                                                label="Phone number"
                                                placeholder=" "
                                                required={true}
                                                onChange={(e) =>
                                                    updateValue(
                                                        e.target.value,
                                                        'phone'
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <InputGroup
                                        label="Location"
                                        placeholder=" "
                                        onChange={(e) =>
                                            updateValue(
                                                e.target.value,
                                                'location'
                                            )
                                        }
                                    />
                                </>
                            )}
                            {step === 1 && (
                                <div>
                                    <InputGroup
                                        label="Password"
                                        type="password"
                                        placeholder=" "
                                        required={true}
                                        onChange={(e) =>
                                            updateValue(
                                                e.target.value,
                                                'password'
                                            )
                                        }
                                    />
                                    <InputGroup
                                        label="Confirm Password"
                                        type="password"
                                        placeholder=" "
                                        required={true}
                                        onChange={(e) =>
                                            updateValue(
                                                e.target.value,
                                                'conf_pass'
                                            )
                                        }
                                    />
                                </div>
                            )}
                            {step === 2 && (
                                <div>
                                    <UploadProfilePic
                                        updateValue={updateValue}
                                        formData={formData}
                                    />
                                </div>
                            )}
                            {step === 3 && (
                                <>
                                    <div
                                        onChange={(e) =>
                                            updateValue(
                                                e.target.value,
                                                'why_here'
                                            )
                                        }
                                        className="flex-col md:flex items"
                                    >
                                        <InputRadio
                                            name="Reason"
                                            value="To become an agent"
                                            label="To be an agent"
                                        />
                                        <InputRadio
                                            name="Reason"
                                            value="To Create online store"
                                            label="To create online store"
                                        />
                                        <InputRadio
                                            name="Reason"
                                            value="To buy"
                                            label="To buy"
                                        />
                                    </div>
                                    <div className="flex items-center mt-8">
                                        <input
                                            type="checkbox"
                                            name="agreeToPrivacy"
                                            id="agreeToPrivacy"
                                            onChange={() =>
                                                setAgreedToTerms(!agreedToTerms)
                                            }
                                        />
                                        <label
                                            htmlFor="agreeToPrivacy"
                                            className="px-2"
                                        >
                                            I agree to the Terms both Privacy
                                            Policy
                                        </label>
                                    </div>
                                    <Button
                                        btnClass="h-10 rounded mt-4 w-full justify-center"
                                        onClick={submitButton}
                                        disabled={!agreedToTerms}
                                    />
                                </>
                            )}
                        </Panel>
                        <div className="absolute bottom-0 left-3 w-full">
                            <div className="w-full px-4 flex justify-end items-center">
                                <Button
                                    onClick={onNext}
                                    disabled={step === 3}
                                    title={<FaAngleRight />}
                                    btnClass="h-8 mr-5 rounded-r"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KemSignUp;

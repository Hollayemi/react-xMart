import React, { useState } from 'react';

const MyOtpModal = ({ title, note, otpPic }) => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [num4, setNum4] = useState('');
    return (
        <section>
            <div>
                <div>
                    <h4 className="font-bold text-lg text-slate-700">
                        {title}
                    </h4>
                    <p>{note}</p>
                    <div className="flex items-center justify-center my-10">
                        {/*  */}
                        <OtpInput
                            num={num1}
                            func={setNum1}
                            id="fir"
                            id2="sec"
                        />

                        <OtpInput
                            num={num2}
                            func={setNum2}
                            id="sec"
                            id2="thr"
                        />

                        <OtpInput
                            num={num3}
                            func={setNum3}
                            id="thr"
                            id2="las"
                        />

                        <OtpInput
                            num={num4}
                            func={setNum4}
                            id="las"
                            id2="fir"
                        />
                    </div>
                    <div>
                        <img src={otpPic} alt="otp" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const OtpInput = ({ func, num, id2, id }) => (
    <input
        type="number"
        className="w-10 h-12 p-2 m-2 text-center text-2xl font-bold text-slate-600 border rounded-md focus:outline-none border-slate-600"
        placeholder={'*'}
        id={id}
        value={num}
        onChange={(e) => func(!num.length && e.target.value)}
        onKeyUp={() => num.length && document.getElementById(id2).focus()}
    />
);

export default MyOtpModal;

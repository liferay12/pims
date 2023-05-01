import React from 'react';
import OtpInput from 'react-otp-input';
import { useState } from 'react';
const Otp = (props) => {
    const [otp, setOpt] = useState("");
    const handleChange = (otp) => {
        setOpt(otp);
        
        console.log(" " + otp);
    };
    return (
        <div className='form-group mt-3'>
            <label htmlFor={props.fieldConfig.id}>{props.fieldConfig.label}</label>
            <br></br>
            <OtpInput value={otp}
                type={props.fieldConfig.type}
                id={props.fieldConfig.id}
                name={props.fieldConfig.name}
                className={props.fieldConfig.cssClass}
                isInputNum={props.fieldConfig.isInputNum}
                numInputs={props.fieldConfig.numInputs}
                shouldAutoFocus={props.fieldConfig.shouldAutoFocus}
                onChange={handleChange}
                inputStyle={{border:'revert',width:"2rem"}}
                separator={<span>:</span>}
            />
        </div>
    );
}
export default Otp;
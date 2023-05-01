import React from 'react';
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import { useState } from 'react';
const Tel = (props) => {
    const [value, setValue] = useState()
    return (
        <div className='form-group mt-3'>
            <label htmlFor={props.fieldConfig.id}>{props.fieldConfig.label}</label>
            <PhoneInput
                country={'in'}
                id={props.fieldConfig.id}
                name={props.fieldConfig.name}
                placeholder={props.fieldConfig.placeholder}
                value={value}
                onChange={props.changed}

                required={props.fieldConfig.validation.required}
            />
        </div>
    );
}

export default Tel;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';
const Password=(props)=>{
    return(
        <div className='form-group mt-3'>
            <label htmlFor={props.fieldConfig.id}>{props.fieldConfig.label}</label>
            <input
                    id={props.fieldConfig.id}
                    type={props.fieldConfig.type}
                    name={props.fieldConfig.name}
                    className={props.fieldConfig.cssClass}
                    placeholder={props.fieldConfig.placeholder}
                    onChange={props.changed}
                    disabled={props.fieldConfig.disabled}
                    readOnly={props.fieldConfig.readOnly}
                    hidden={props.fieldConfig.hidden}
                    // pattern={props.fieldConfig.pattern}
                    // required={props.fieldConfig.required}
                    // maxLength={props.fieldConfig.maxLength}
                    // minLength={props.fieldConfig.minLength}
                    // autocomplete={props.fieldConfig.autocomplete}
                    // autofocus={props.fieldConfig.autofocus}
            />
        </div>
    );
}

export default Password;
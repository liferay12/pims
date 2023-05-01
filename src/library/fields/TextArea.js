import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';
const TextArea=(props)=>{
    return(
        <div className='form-group mt-3'>
            <label htmlFor={props.fieldConfig.id}>{props.fieldConfig.label}</label>
            <textarea
                    id={props.fieldConfig?.name}
                    type={props.fieldConfig?.type}
                    name={props.fieldConfig?.name}
                    className={props.fieldConfig?.cssClass}
                    placeholder={props.fieldConfig?.placeholder}
                    onChange={props.changed}
                    disabled={props.fieldConfig?.disabled}
                    readOnly={props.fieldConfig?.readOnly}
                    hidden={props.fieldConfig?.hidden}
                    pattern={props.fieldConfig?.pattern}
                    required={props.fieldConfig?.required}
                    maxLength={props.fieldConfig?.maxLength}
                    minLength={props.fieldConfig?.minLength}
                    autocomplete={props.fieldConfig?.autocomplete}
                    autofocus={props.fieldConfig?.autofocus}
                    value={props.fieldConfig.value}
            />
        </div>
    );
}

export default TextArea;
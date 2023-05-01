import React from "react";
const Month = (props) => {
    return (
        <div className='form-group mt-3'>
            <label htmlFor={props.fieldConfig.id}>{props.fieldConfig.label}</label>
            <input
                id={props.fieldConfig.id}
                //type="month"
                type={props.fieldConfig.type}
                name={props.fieldConfig.name}
                className={props.fieldConfig.cssClass}
                placeholder={props.fieldConfig.placeholder}
                onChange={props.changed}
                disabled={props.fieldConfig.config.disabled}
                readOnly={props.fieldConfig.config.readOnly}
                hidden={props.fieldConfig.config.hidden}
                pattern={props.fieldConfig.validation.pattern}
                required={props.fieldConfig.validation.required}
                maxLength={props.fieldConfig.validation.maxLength}
                minLength={props.fieldConfig.validation.minLength}
                autocomplete={props.fieldConfig.validation.autocomplete}
                autofocus={props.fieldConfig.validation.autofocus}
                value={props.fieldConfig.value}
                min={props.fieldConfig.config.min}
                max={props.fieldConfig.config.max}
                
            />
        </div>
    );
}

export default Month;
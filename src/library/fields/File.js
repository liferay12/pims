import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function File(props) {

    return (
        <div className="form-group mt-3">
            <label htmlFor={props.fieldConfig.label}>Upload Resume</label>
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
                // accept={props.fieldConfig.config.accept}
                // multiple={props.fieldConfig.multiple}
            />
        </div>
    );
}
export default File;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';
import * as Yup from 'yup';

import { useForm } from 'react-hook-form'
import Feedback from 'react-bootstrap/esm/Feedback';
const Text = (props) => {

    // const yupValidation = Yup.object().shape({
    //     names: Yup.string()
    //       .required(props.fieldConfig.errorMessage)
    //       .min(4, 'Add minimum 4 characters')
    //   })
    // const formOptions = { resolver: yupResolver(yupValidation) }
    // const { register, formState } = useForm(formOptions)
    // const { errors } = formState
    // function onSubmit(data) {
    //     console.log(JSON.stringify(data, null, 4))
    //     return false
    //   }


    return (
        <div className='form-group mt-3'>
            <label htmlFor={props.fieldConfig.id}>{props.fieldConfig.label}</label>
            
            <input

                //aria-describedby={(props.fieldConfig.id)+Feedback}
                id={props.fieldConfig.id}
                type={props.fieldConfig.type}
                name={props.fieldConfig.name}
                className={props.fieldConfig.cssClass}
                placeholder={props.fieldConfig.placeholder}
                onChange={props.changed}
                value={props.fieldConfig.value}
                disabled={props.fieldConfig.disabled}
                readOnly={props.fieldConfig.readOnly}
                hidden={props.fieldConfig.hidden}
                // pattern={props.fieldConfig.validation.pattern}
                required={props.fieldConfig.required}
                // maxLength={props.fieldConfig.validation.maxLength}
                // minLength={props.fieldConfig.validation.minLength}
                // autocomplete={props.fieldConfig.validation.autocomplete}
                // autofocus={props.fieldConfig.validation.autofocus}

            />
            {/* <div id={(props.fieldConfig.id)+Feedback}  className="invalid-feedback">{errors.name?.props.fieldConfig.errorMessage}</div> */}
            {/* <p style={{ color: 'red' }}>This field is required</p> */}
        </div>
    );
}

export default Text;
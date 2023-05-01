import React from 'react';
import ReactSelect from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';
import { useState, useEffect } from "react";
import axios from "axios"
let a = {};
const Select = (props) => {
    const [provider, setProvider] = useState([]);
    const [defaultValue, setDefaultValue] = useState({});
    const [val, setVal] = useState({});
    useEffect(() => {

        if (props.fieldConfig.options !== undefined) {
            setVal(props.fieldConfig.options);
        }
        if (props.fieldConfig.provider !== undefined) {

            let proData = [];
            getProviderData(props.fieldConfig.provider.url).map((data, index) => {
                proData.push({ value: data.id, label: data.label })
            })
            setVal()
        }

        //     if (props.fieldConfig.provider.url !== "") {
        //         setDefaultValue({ value: props.fieldConfig.provider.value, label: props.fieldConfig.provider.label })
        //         getProviderList(props.fieldConfig.provider.url);
        //     } else {
        //         setProvider(props.fieldConfig.provider.options)
        //     }
        //     setDefaultValue(a);

    }, [])

    const getProviderData = (url) => {
        let providerData = [];
        axios.get(url).then((res) => {
            providerData.push(res.data);
        }).catch((err) => {
            console.error("Enable to fetch provider data : ", err);
        })

        return providerData;
    }



    return (
        <div className='form-group mt-3'>
            <label htmlFor={props.fieldConfig.id}>{props.fieldConfig.label}</label>
            <ReactSelect
                id={props.fieldConfig.id}
                name={props.fieldConfig.name}
                className={props.fieldConfig.cssClass}
                placeholder={props.fieldConfig.placeholder}
                onChange={props.changed}
                disabled={props.fieldConfig.disabled}
                readOnly={props.fieldConfig.readOnly}
                hidden={props.fieldConfig.hidden}
                required={props.fieldConfig.required}
                autocomplete={props.fieldConfig.autocomplete}
                autofocus={props.fieldConfig.autofocus}
                options={val}
                // defaultValue={props.fieldConfig.provider.selectedValue || 'select'}
                multiple={props.fieldConfig.multiple}
                suggestion={props.fieldConfig.suggestion}
            />
        </div>
    );
}

export default Select;
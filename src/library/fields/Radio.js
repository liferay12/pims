import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery';
import axios from "axios";
const Radio = (props) => {
    const [options, setOptions] = useState([]);
    useEffect(() => {
        if (props.fieldConfig.options !== undefined) {
            // let data=[];
            // data.push([]);
            // setOptions(data);
            setOptions(props.fieldConfig.options);
        }
        if (props.fieldConfig.provider !== undefined) {
            setOptions(getProviderData(props.fieldConfig.provider.url));
        }

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
        <div className="form-group mt-3">
            <label>{props.fieldConfig.label}</label>
            <br />
            {options.map((option, key) => <>
                <input type={props.fieldConfig.type}
                    className={props.fieldConfig.cssClass}
                    name={props.fieldConfig.name}
                    id={`${props.fieldConfig}_${key}`}
                    onChange={props.changed}
                    checked={props.checked}
                    value={option.value}
                /> <label>{option.label}</label>&nbsp;&nbsp;&nbsp;</>
            )}
        </div>
    )
}
export default Radio;
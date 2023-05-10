import React, { useEffect, useState } from 'react';
import Renderer from './FieldRenderer';
import toast from 'react-hot-toast';
import axios from "axios";
import { setJsonValue } from '../helper/JsonValue';
// import MyFunction from '../../component/allFunc';
const Form = (props) => {
    // const func=MyFunction;
    var [requestURL, setRequestURL] = useState();
    var [requestMethod, setRequestMethod] = useState();
    const { formObject } = props;
    const [fieldArray, setFieldArray] = useState(formObject.fields);
    const [isActions, setActions] = useState(false);
    useEffect(() => {
        var obj = {
            "employeeId": "001",
            "middleName": "Kumar",
            "firstName": "Ashwani",
            "lastName": "Rao",
        };
        if (props.actions !== undefined && props.actions.length != 0) {
            setActions(true)
        }
        if (props.editId !== undefined && props.editId !== "") {

        }
        if (props.editId != "" && props.editId != undefined) {
            var editResponseData = {};
            props.formObject.actions.forEach((item, index) => {
                if (item.handler?.method === "put") {
                    let resp = getUpdateData('http://localhost:8085/api/v1/employee/', props.editId);
                    resp.then((d) => {
                        let o = setJsonValue(fieldArray, d);
                        setFieldArray()
                    })
                    setRequestURL(item.handler.url);
                    setRequestMethod(item.handler.method);
                }
            })
        } else {
            console.log("requestURL : : : : else ")
            props.formObject.actions.forEach((item, index) => {
                if (item.handler?.method === "post") {
                    console.log("requestURL : : : : POST   " + item.handler.url)
                    setRequestURL(item.handler.url);
                    setRequestMethod(item.handler.method);
                }
            })
        }
    }, [])
    const onSubmit = (e) => {
        e.preventDefault();
        var form = new FormData();
        alert(requestURL)
        if (requestMethod === "post") {
            console.log("IF ", requestMethod, " : ", requestURL)
            postRequest(requestURL, form);
        } else {
            console.log("ELSE ", requestMethod, " : ", requestURL)
            putRequest(requestURL, props.editId, form)
        }
    }
    const getUpdateData = async (url, id) => {

        let response = await axios.get(`${url}${id}`);
        return response.data;
    }
    const postRequest = (requestURL, formData) => {
        axios.post(requestURL, formData, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            toast.success("Your Form has been succesfully submitted");
        }).catch((err) => {
            console.error(err);
            toast.error("Opps ! Something went wrong")
        })
    }
    const putRequest = (requestURL, id, formData) => {
        console.log(requestURL, " - : -  ", id, " - : - ", formData)
        axios.put(`${requestURL}/${id}`, formData, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            toast.success("Your Form has been succesfully submitted");
        }).catch((err) => {
            console.error(err);
            toast.error("Opps ! Something went wrong")
        })
    }
    return (
        <div className='container Form'>
            <h3 className='text-center'>{props.formObject.title}</h3>
            {
                isActions ? (
                    <form id={props.formObject.id}>
                        <Renderer fieldArray={fieldArray} setFieldArray={setFieldArray} />
                        <div className='text-center'>
                            {
                                props.formObject.actions.map((item, key) =>
                                    <>
                                        {
                                            props.editId != "" && props.editId != undefined ? (
                                                <>
                                                    {
                                                        item.applyTo === "form" && (item.handler.method === "put" || item.handler.method == undefined) ? (
                                                            <>
                                                                <button type={item.type} className={item.cssClass} onClick={eval(props.actions[item.handler?.func])} >{item.label}</button>
                                                            </>
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                </>
                                            ) : (
                                                <>
                                                    {
                                                        item.applyTo === "form" && (item.handler.method === "post" || item.handler.method == undefined) ? (
                                                            <>
                                                                <button type={item.type} className={item.cssClass} onClick={eval(props.actions[item.handler?.func])} >{item.label}</button>
                                                            </>
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                </>
                                            )
                                        }

                                    </>
                                )
                            }
                        </div>
                    </form>
                ) : (
                    <form onSubmit={onSubmit} id={props.formObject.id}>
                        <Renderer fieldArray={fieldArray} setFieldArray={setFieldArray} />
                        <div className='text-center'>
                            {
                                props.formObject.actions.map((item, key) =>
                                    <>
                                        {
                                            props.editId != "" && props.editId != undefined ? (
                                                <>
                                                    {
                                                        item.applyTo === "form" && (item.handler.method === "put" || item.handler.method == undefined) ? (
                                                            <>
                                                                <button type={item.type} className={item.cssClass}  >{item.label}</button>
                                                            </>
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                </>
                                            ) : (
                                                <>
                                                    {
                                                        item.applyTo === "form" && (item.handler.method === "post" || item.handler.method == undefined) ? (
                                                            <>
                                                                <button type={item.type} className={item.cssClass}  >{item.label}</button>
                                                            </>
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                </>
                                            )
                                        }

                                    </>
                                )
                            }
                        </div>
                    </form>)
            }
        </div >
    );
}

export default Form;


import React, { useEffect, useState } from 'react';
import Renderer from './FieldRenderer';
import toast from 'react-hot-toast';
import axios from "axios";
// import MyFunction from '../../component/allFunc';
const Form = (props) => {
    // const func=MyFunction;
    let url = "";
    const { formObject } = props;
    const [fieldArray, setFieldArray] = useState(formObject.fields);
    const [formData, setFormData] = useState([]);
    const [methodType, setMethodType] = useState()
    const [requestType, setRequestType] = useState("post");
    const submitForm = (e) => {
        e.preventDefault();
        var form = new FormData();
        fieldArray.map((item, index) => {
            if (item.type === "group") {
                item.fields.map((field) => {
                })
                if (item.value != "") {
                    form.append(item.name, item.value);
                }
            } else {
                if (item.value != "") {
                    form.append(item.name, item.value);
                }
            }

        })
        console.log(form.get("username"))
        console.log(form.get("firstName"))
        console.log(form.get("middleName"))
        if (props.requestType === "POST") {
            axios.post(props.url, form, {
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
        if (props.requestType === "PUT") {
            axios.put(props.url, form, {
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
    }

    return (
        <div className='container Form'>
            <h3 className='text-center'>{props.formObject.title}</h3>
            <form id={props.formObject.id}>
                <Renderer fieldArray={fieldArray} setFieldArray={setFieldArray} />
                <div className='text-center'>
                    {
                        props.formObject.actions.map((item, key) =>
                            <>
                                {
                                    item.applyTo === "form" ? (<><button type={item.type} className={item.cssClass} onClick={eval(props.actions[item.handler?.func])} >{item.label}</button></>) : (<></>)
                                }
                            </>
                        )
                    }
                </div>
            </form>
        </div>
    );
}

export default Form;
import React from 'react';
import { useState } from 'react';


const CheckBox=(props)=>{

    const [Assigned, setAssigned] = useState(true);
    const HandleChange = () => {
        setAssigned(!Assigned);
        console.log(Assigned);
    };
   

    return(
        <div className='form-check mt-3'>
            <input
                    type={props.fieldConfig.type}
                    className={props.fieldConfig.cssClass}
                    name={props.fieldConfig.name} 
                    id={props.fieldConfig.id}
                    onChange={(e) => {HandleChange(e.target.value) }}
                    value={Assigned}
                   
            />
            <label htmlFor={props.fieldConfig.id} className='form-check-label'>{props.fieldConfig.label}</label>
        </div>
    );
}

export default CheckBox;
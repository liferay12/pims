import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const AutoComplete = (props) => {
    const [active, setActive] = useState(0);
    const [filtered, setFiltered] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [input, setInput] = useState("");

    const onChange = e => {
        const dataSource = props.fieldConfig.dataSource;
        const input = e.currentTarget.value;
        const newFilteredSuggestions = dataSource.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
        );
        setActive(0);
        setFiltered(newFilteredSuggestions);
        setIsShow(true);
        setInput(e.currentTarget.value)
        console.log(e.target.value + " :" + input)
    };
    const onClick = e => {
        setActive(0);
        setFiltered([]);
        setIsShow(false);
        setInput(e.currentTarget.innerText)
    };
    const onKeyDown = e => {
        
    };
    const renderAutocomplete = () => {
        if (isShow && input) {
            if (filtered.length) {
                return (
                    <ul className="list-group">
                        {filtered.map((suggestion, index) => {
                            let className;
                            if (index === active) {
                                className = "active";
                            }
                            return (
                                <li className="list-group-item" key={suggestion} onClick={onClick}>
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                return (
                    <div className="no-autocomplete">
                        {/* <em>Not found</em> */}
                    </div>
                );
            }
        }
        return <></>;
    }




    return (
        <>
            <div className="mt-3">
                <label htmlFor={props.fieldConfig.id}>{props.fieldConfig.label}</label>
                <input  type="text" className="form-control"
                    onChange={onChange}
                    onKeyDown={onKeyDown} value={input}
                    name={props.fieldConfig.name}
                    id={props.fieldConfig.id}
                    placeholder={props.fieldConfig.placeholder} ></input>
                {renderAutocomplete()}
            </div>
        </>
    );
}
export default AutoComplete;
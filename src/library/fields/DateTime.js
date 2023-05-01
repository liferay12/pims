import React from "react";
import DateTimePicker from "react-datetime-picker";
import '../assets/css/DateTime.css'

const DateTime = (props) => {

 //    const [date, setDate] = useState();

 //  console.log("DATE", date);

    return (
        <>


            <label htmlFor={props.fieldConfig.id}>{props.fieldConfig.label}</label>

            <div className="datetimepickerWrap form-control">
                <DateTimePicker
                    id={props.fieldConfig.id}
                    name={props.fieldConfig.name}
                    value={props.fieldConfig.value}
                    yearPlaceholder={props.fieldConfig.placeholder.yearPlaceholder}
                    monthPlaceholder={props.fieldConfig.placeholder.monthPlaceholder}
                    dayPlaceholder={props.fieldConfig.placeholder.dayPlaceholder}
                    hourPlaceholder={props.fieldConfig.placeholder.hourPlaceholder}
                    minutePlaceholder={props.fieldConfig.placeholder.minutePlaceholder}
                    secondPlaceholder={props.fieldConfig.placeholder.secondPlaceholder}
                    disableCalendar={props.fieldConfig.config.disabled.disableCalendar}
                    disableClock={props.fieldConfig.config.disabled.disableClock}
                    maxDate={props.fieldConfig.validation.maxDate}
                    minDate={props.fieldConfig.validation.minDate}
                    format={props.fieldConfig.validation.format}
                    onChange={props.changed}
//                   value={date}
                   // onChange={(date) => setDate(date)}
                />
            </div></>
    )
}
export default DateTime;
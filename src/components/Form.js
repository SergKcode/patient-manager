import React, {useState} from "react";

const Form=()=>{
    const [meeting, setMeeting]= useState({
        pet:"",
        owner:"",
        date:"",
        time:"",
        symptoms:""
    });
    const handlerSetMeeting=(e)=>{
        setMeeting({
            ...meeting,
            [e.target.name]:[e.target.value]

        })
    }
    const{owner, date, time,symptoms, pet} = meeting
    return (
        <>
            <h2> Create a meeting</h2>
            <form>
                <label>Pet Name</label>
                <input
                type="text"
                name="pet"
                className="u-full-width"
                placeholder="Pet name"
                onChange={handlerSetMeeting}
                value={pet}
                />
                <label>Owner's Name</label>
                <input
                type="text"
                name="owner"
                className="u-full-width"
                placeholder="Owner's Name"
                onChange={handlerSetMeeting}
                value={owner}
                />
                <label>Date</label>
                <input
                type="date"
                name="date"
                className="u-full-width"
                onChange={handlerSetMeeting}
                value={date}
                
                />
                <label>Time</label>
                <input
                type="time"
                name="time"
                className="u-full-width"
                onChange={handlerSetMeeting}
                value={time}
                />
                <label>symptoms</label>
                <textarea 
                name="symptoms"
                className="u-full-width"
                onChange={handlerSetMeeting}
                value={symptoms}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width"
                > Add meeting</button>
                
                
            

            </form>
        </>
        
    );

}
export default Form;
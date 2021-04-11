import React from "react";

const Form=()=>{
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
                />
                <label>Owner's Name</label>
                <input
                type="text"
                name="owner"
                className="u-full-width"
                placeholder="Owner's Name"
                />
                <label>Date</label>
                <input
                type="date"
                name="date"
                className="u-full-width"
                
                />
                <label>Time</label>
                <input
                type="time"
                name="time"
                className="u-full-width"
                />
                <label>symptoms</label>
                <textarea 
                name="symptoms"
                className="u-full-width"
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
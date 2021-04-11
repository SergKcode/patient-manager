import React, {useState} from "react";
import Form from "./components/Form"


function App() {

  const [meetings, setMeetings] =useState([]);
  const createMeeting= meeting =>{
    setMeetings([...meetings, meeting])


  }
  return (
    <>
      <h1>Patient Manager</h1>
      <div className="container">
        <div className="row">
        <div className="one-half column">
          <Form
          createMeeting={createMeeting}
          />
        </div>
        <div className="one-half column">2</div>
        
        </div>
      </div>
    </>
    
  );
}

export default App;

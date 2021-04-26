import React from 'react';
import {BrowserRouter as Router , Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import login from  "./components/homepage.component";
import Navbar from "./components/navbar.component"
import classes from "./components/classes.component"
import studentscreen from "./components/student.component"
import majors from "./components/majors.component"
import sections from "./components/sections.components"
import passerror from "./components/passerror.component"
import calendar from "./components/calendar.component"
import faculty from "./components/faculty.component"
import calendar2 from "./components/calender2.component"
import mark2 from "./components/addnext.components"
import facultyhome from "./components/facultyhome.component"
import spring from "./components/spring.component"
import admin from"./components/adminlogin.component"
import adminhome from "./components/adminhome.component"
import audit from "./components/audit.component"
import grade from "./components/grading.components"
import masterspring from "./components/masterspring.component"
import updatefaculty from "./components/updatefaculty.component"
import masterfall from "./components/masterfall.component"
import register from "./components/register.component"
import mark from "./components/add.component"
import addfaculty from "./components/addfaculty.component"
import addstudent from "./components/addstudent.components"
import adminclasses from "./components/adminclasses.components"
import studentupdate from "./components/studentupdate.component"
import gradescreen from "./components/gradepage.component"
import adminhomepage from "./components/adminhomepage.component"
import adminfaculty from "./components/adminfaculty.component"
import transcript from "./components/transcript.component"
function App() {
  return (
    <Router>
          <Navbar />
          <br/>
    <div className="Pineapple">
    <Route path="/" exact component={login} />
    <Route path="/student/:id" exact component={studentscreen} />
    <Route path="/classes/:id" exact component={classes} />
    <Route path="/majors/:name" exact component={majors} />
    <Route path="/sections/:name" exact component={sections} />
    <Route path="/passerror" exact component={passerror} />
    <Route path="/calendar/:id" exact component={calendar} />
    <Route path="/spring" exact component={spring} />
    <Route path="/audit/:major" exact component={audit} />
    <Route path="/adddrop/:id" exact component={mark}/>
    <Route path="/masterfall" exact component={masterfall} />
    <Route path="/masterspring" exact component={masterspring} />
    <Route path="/register" exact component={register} />
    <Route path="/faculty" exact component={faculty}/>
    <Route path="/adminhome" exact component={adminhome} />
    <Route path="/facultyhome/:id" exact component={facultyhome}/>
    <Route path="/transcript/:id" exact component={transcript}/>
    <Route path="/adminLogin" exact component={admin}/>
    <Route path="/adminHomepage" exact component={adminhomepage}/>
    <Route path="/adminfaculty" exact component={adminfaculty}/>
    <Route path="/adminclasses" exact component={adminclasses}/>
    <Route path="/studentupdate/:id" exact component={studentupdate}/>
    <Route path="/addstudent" exact component={addstudent}/>
    <Route path="/addfaculty" exact component={addfaculty}/>
    <Route path="/updatefaculty/:id" exact component={updatefaculty}/>
    <Route path="/calendarnext/:id" exact component={calendar2} />
    <Route path="/adddropnext/:id" exact component={mark2}/>
    <Route path="/grade/:id" exact component={grade}/>
    <Route path="/gradescreen" exact component={gradescreen}/>
    
    </div>
    </Router>

  );
}

export default App;

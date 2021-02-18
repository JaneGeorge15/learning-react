import React from "react";
import { BrowserRouter as Router, Route , NavLink, Redirect, useHistory} from "react-router-dom";
import TaskTracker from "./TaskTracker";
import Appointments from "./Appointments";

export default function App() {

  const history = useHistory();
  console.log(history);

  const onclickHandle = () => {
    history.push("/task-tracker");
  }
    return (
      <Router>
        <main className="page bg-white" id="petratings">
          <div className="container">
            <div className="row">
              <div className="col-md-12 bg-white">
                <ul>
                  <li>
                    <NavLink to="/" exact activeStyle={{color:'green'}}>Appointments</NavLink>
                  </li>
                  <li>
                    <NavLink to="/task-tracker" exact activeStyle={{color:'green'}}>Task Tracker</NavLink>
                  </li>
                </ul>
                <button className="btn btn-primary" onClick={onclickHandle}>Task Tracker</button>
                <Route path="/" exact strict component={Appointments}></Route>
                <Route path="/task-tracker" exact strict component={TaskTracker}></Route>
              </div>
            </div>
          </div>
        </main>
      </Router>
    );
}
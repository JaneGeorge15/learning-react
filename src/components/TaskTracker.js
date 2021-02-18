import React from "react";
import User from "./User";

const TaskTracker = ({match}) => {
    return(
        <div>
            <h1>Welcome {match? match.params.username : '...'}</h1>
            <User age={26}>Jill</User>
        </div>
        
    )
}

export default TaskTracker



import React from "react";


const TaskTracker = ({match}) => {
    return(
        <h1>Welcome {match? match.params.username : '...'}</h1>
    )
}

export default TaskTracker



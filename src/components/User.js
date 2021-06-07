import React, {useState, useEffect} from "react";
import axios from "axios";
import { result } from "lodash";

const User = (props) => {

    const [count, setCount] = useState(0);

    const [data, getData] = useState([]);

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then(result => {
            console.log('axios', result.data);
            getData(result.data)})
    }, [])

    return(
        <div>
            <p>Name: {props.children} | Age : {props.age ? props.age : 'NA'}</p>

            <p>{count}</p>
            <button onClick={()=> setCount(count + 1)}>CLick Me</button>

            <ul>
                {
                    data.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                    ))  
                }
            </ul>
        </div>
        
    )
}

export default User;
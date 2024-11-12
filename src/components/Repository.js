import React from "react";

function Repository(props) {
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.stars}</td>
        </tr>
    )
}

export default Repository
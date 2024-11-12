import React from "react";

function Follower(props) {
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.username}</td>
            <td className="text-end"><img src={props.icon} class="img-thumbnail" width="40"/></td>
        </tr>
    )
}

export default Follower
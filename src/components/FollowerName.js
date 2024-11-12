import React, { useEffect, useState } from 'react'

function FollowerName(props){

    const [userData, setUserData] = useState([{}])

    useEffect(() => {
    fetch(`https://api.github.com/users/${props.username}`).then(
        response => response.json()
    ).then(
        data => {
        setUserData(data)
        }
    )
    }, [])

    return userData.name
}

export default FollowerName
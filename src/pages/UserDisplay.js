import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import User from "../components/User"
import ServerDown from '../components/ServerDown'

function UserDisplay() {

    const [userData, setUserData] = useState([{}])

    const { username } = useParams()

    useEffect(() => {
      fetch(`https://api.github.com/users/${username}`).then(
        response => response.json()
      ).then(
        data => {
          setUserData(data)
        }
      )
    }, [])

    if (userData.documentation_url === "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"){
      return <ServerDown />
  } else {
    return (
      <User
          key={userData.id}
          name={userData.name}
          login={userData.login}
          bio={userData.bio}
          avatar_url={userData.avatar_url}
          location={userData.location}
          followers={userData.followers}
          public_repos={userData.public_repos}
      />
      
  )
  }


}

export default UserDisplay
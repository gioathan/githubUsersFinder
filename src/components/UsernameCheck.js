import React, { useEffect, useState } from 'react'
import { useParams} from "react-router-dom"

function UsernameCheck() {

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

    

    function check(user){
      if (userData.status === "404"){
        return "/notfound"
      } else {
        return "/users/" + user
      }
    }

    return(
      <div className="container mt-5 p-4 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#343a40', color: 'white', borderRadius: '5px' }}>
            <h1 className="text-center mb-4">Confirm search for user {username}</h1>
            <form action={check(username)} method="GET" className="d-flex flex-column align-items-center">
            <div className="text-center">
                <button  type="submit" className="btn btn-primary">
                Search
                </button>
            </div>
            </form>
            <form action="/home" method="GET" className="d-flex flex-column align-items-center">
            <button  type="submit" className="btn btn-danger">
                Go back
            </button>
            </form>
            
        </div>
    )

  }

  

export default UsernameCheck
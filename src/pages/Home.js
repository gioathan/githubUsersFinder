import React, { useState } from 'react'

function Home() {

    const [userData, setUserData] = useState([{}])

    function handleChange(event) {
        const { name, value } = event.target;

        setUserData(value)
    }
    

    return (
        <div className="container mt-5 p-4 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#343a40', color: 'white', borderRadius: '5px' }}>
            <h1 className="text-center mb-4">Search for a User</h1>
            <form action={'/check/' + userData} method="GET" className="d-flex flex-column align-items-center">
            <div className="input-group mb-3" style={{ maxWidth: '200px', width: '90%' }}>
                <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                aria-label="User search input"
                name="search"
                onChange={handleChange}
                />
            </div>
            <div className="text-center">
                <button  type="submit" className="btn btn-primary">
                Search
                </button>
            </div>
            </form>
            
        </div>
    )

}

export default Home
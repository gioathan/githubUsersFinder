import React from 'react'

function ServerDown() {    

    return (
        <div className="container mt-5 p-4 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#343a40', color: 'white', borderRadius: '5px' }}>
            <h1 className="text-center mb-4">Server is currently down</h1>
            <form action='/home' method="GET" className="d-flex flex-column align-items-center">
            <div className="text-center">
                <button  type="submit" className="btn btn-primary">
                Go Home
                </button>
            </div>
            </form>
            
        </div>
    )

}

export default ServerDown
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import FollowerName from '../components/FollowerName'
import Follower from '../components/Follower'
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import ServerDown from '../components/ServerDown';

function TableItem(singleFol){
    return(
        <Follower
            key={singleFol.id}
            name={<FollowerName username={singleFol.login}/>}
            username={singleFol.login}
            icon={singleFol.avatar_url}
        />
    )
}

function UserFollowers() {

    const [userFol, setUserFol] = useState([{}])

    const { username } = useParams()

    useEffect(() => {
      fetch(`https://api.github.com/users/${username}/followers`).then(
        response => response.json()
      ).then(
        data => {
          setUserFol(data)
          console.log(userFol)
        }
      )
    }, [])

    if (userFol.documentation_url === "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"){
        return <ServerDown />
    } else {
        return (

            <Container fluid>
                <Row>
                    <Col md={3} style={{ backgroundColor: '#6c757d', minHeight: '100vh', padding: '20px' }}>
                    <div className="d-flex align-items-center mb-3">
                        <h4 className="mb-0">User's {username} Followers</h4>
                    </div>
                    <div className="mt-3">
                        <Button variant="primary" href={"/users/" + username} className="mb-2 w-100">User Page</Button>
                        <Button variant="primary" href={"/repos/" + username} className="w-100">Repositories</Button>
                    </div>
                    </Col>
    
                    <Col md={9} className="p-4">
                    <Row>
                        <p className="fs-5 text-start">Total followers: {userFol.length}</p>
                        <Col md={12}>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {userFol.map(TableItem)}
                            </tbody>
                        </Table>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        )
    }

    

}


export default UserFollowers
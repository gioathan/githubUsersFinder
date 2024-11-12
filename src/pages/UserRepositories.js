import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import Repository from '../components/Repository';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import ServerDown from '../components/ServerDown';

function TableItem(singleRepos){
    return(
        <Repository
            key={singleRepos["id"]}
            name={singleRepos["name"]}
            description={singleRepos["description"]}
            stars={singleRepos["stargazers_count"]}
        />
    )
}

function UserDisplay() {

    const [userRepos, setUserRepos] = useState([{}])

    const { username } = useParams()

    useEffect(() => {
      fetch(`https://api.github.com/users/${username}/repos`).then(
        response => response.json()
      ).then(
        data => {
          setUserRepos(data)
        }
      )
    }, [])

    function ascRepos(){
        const sortedRepos = [...userRepos].sort((a, b) => a.stargazers_count - b.stargazers_count);
        setUserRepos(sortedRepos);
    }

    function descRepos(){
        const sortedRepos = [...userRepos].sort((a, b) => b.stargazers_count - a.stargazers_count);
        setUserRepos(sortedRepos);
    }

    function refreshPage() {
        window.location.reload();
    }


    if (userRepos.documentation_url === "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"){
        return <ServerDown />
    } else {
        return (

            <Container fluid>
                <Row>
                    <Col md={3} style={{ backgroundColor: '#6c757d', minHeight: '100vh', padding: '20px' }}>
                    <div className="d-flex align-items-center mb-3">
                        <h4 className="mb-0">User's {username} Repositories</h4>
                    </div>
                    <div className="mt-3">
                        <Button variant="primary" href={"/users/" + username} className="mb-2 w-100">User Page</Button>
                        <Button variant="primary" href={"/followers/" + username} className="w-100">Followers</Button>
                    </div>
                    </Col>
    
                    <Col md={9} className="p-4">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic-button" title="Dropdown button">
                            Sort by
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={refreshPage}>Default</Dropdown.Item>
                            <Dropdown.Item onClick={ascRepos}>Stars asc</Dropdown.Item>
                            <Dropdown.Item onClick={descRepos}>Stars desc</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Row>
                        <Col md={12}>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Stars</th>
                            </tr>
                            </thead>
                            <tbody>
                            {userRepos.map(TableItem)}
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

export default UserDisplay
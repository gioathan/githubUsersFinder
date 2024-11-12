import React from "react";
import { Container, Row, Col, Button, Table } from 'react-bootstrap';

function User(props) {

    function hasName(name){
        if (name===null){
            return false;
        } else {
            return true;
        }
    }


    return(
        <Container fluid>
            <Row>
                <Col md={3} style={{ backgroundColor: '#6c757d', minHeight: '100vh', padding: '20px' }}>
                <div className="d-flex align-items-center mb-3" style={{ justifyContent: 'space-between' }}>
                    <h4 className="mb-0">User's Homepage</h4>
                    <img src={props.avatar_url} className="img-thumbnail" alt="..." width="60px"/>
                </div>
                <h6 className="mt-4">{hasName(props.name) ? props.name : props.login}</h6>
                <div className="mt-3">
                    <Button variant="primary" href={"/repos/" + props.login} className="mb-2 w-100">Repositories</Button>
                    <Button variant="primary" href={"/followers/" + props.login} className="w-100">Followers</Button>
                </div>
                <div 
                style={{
                    bottom: '20px', // Adjust this to your preference
                    right: '20px',  // Adjust this to your preference
                    color: 'white',
                    fontSize: '14px'
                }}
                >
                    <p>{props.location}</p>
                </div>
                </Col>

                <Col md={9} className="p-4">
                <Row>
                    <Col md={12} className="mb-4">
                    <p>
                        {props.bio}.
                    </p>
                    </Col>
                    
                    <Col md={12}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Username</th>
                            <th>{props.login}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Followers</td>
                            <td>{props.followers}</td>
                        </tr>
                        <tr>
                            <td>Repositories</td>
                            <td>{props.public_repos}</td>
                        </tr>
                        </tbody>
                    </Table>
                    </Col>
                </Row>
                </Col>
            </Row>
        </Container>
    );
    
}

export default User
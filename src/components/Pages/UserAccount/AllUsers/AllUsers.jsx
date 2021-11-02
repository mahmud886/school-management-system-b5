import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';

import './AllUsers.css';
import { useEffect } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3005/all-users')
            .then((response) => setUsers(response.data));
    });

    // Delete Data
    const deleteUser = (id) => {
        axios
            .delete(`http://localhost:3005/all-users/${id}`)
            .then((res) => res.data);
    };

    return (
        <>
            <Container fluid>
                <div className='top-header py-5'>
                    <h3>All Users</h3>
                </div>
                <div className='all__users__container shawdow-sm border rounded p-3'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>User Type</th>
                                <th scope='col'>Gender</th>
                                <th scope='col'>Date Of Birth</th>
                                <th scope='col'>Religion</th>
                                <th scope='col'>Department</th>
                                <th scope='col'>Section</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Phone</th>
                                <th scope='col'>Address</th>
                                <th scope='col'>Short Bio</th>
                                {/* <th scope='col'>Photo</th> */}
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        {users.map((user, index) => {
                            const {
                                _id,
                                idNo,
                                fullName,
                                user_type,
                                gender,
                                dob,
                                religion,
                                department,
                                section,
                                email,
                                phone,
                                address,
                                description,
                            } = user;
                            return (
                                <tbody>
                                    <tr>
                                        <th>{idNo}</th>
                                        <td>{fullName}</td>
                                        <td>{user_type}</td>
                                        <td>{gender}</td>
                                        <th>{dob}</th>
                                        <td>{religion}</td>
                                        <td>{department}</td>
                                        <td>{section}</td>
                                        <th>{email}</th>
                                        <td>{phone}</td>
                                        <td>{address}</td>
                                        <td>{description}</td>
                                        {/* <td>{photo}</td> */}
                                        <td>
                                            <p>
                                                <span>
                                                    <button className='btn'>
                                                        <FontAwesomeIcon
                                                            icon={faEdit}
                                                        />
                                                    </button>
                                                    <button
                                                        className='btn'
                                                        onClick={() => {
                                                            const confirmDelete =
                                                                window.confirm(
                                                                    `Do you want to delete ${fullName}`
                                                                );
                                                            if (
                                                                confirmDelete ===
                                                                true
                                                            ) {
                                                                deleteUser(_id);
                                                            }
                                                        }}>
                                                        <FontAwesomeIcon
                                                            icon={faTrashAlt}
                                                        />
                                                    </button>
                                                </span>
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </Table>
                </div>
            </Container>
        </>
    );
};

export default AllUsers;

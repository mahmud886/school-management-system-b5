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
            .delete(`http://localhost:3005/delete-user/${id}`)
            .then((res) => res.data);
    };

    return (
        <>
            <Container fluid>
                <div className='top-header py-5'>
                    <h3>All Users</h3>
                </div>
                <div className='all__users__container shawdow-sm border rounded p-3'>
                    <Table
                        striped
                        bordered
                        rounded
                        hover
                        size='lg'
                        className='text-center'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>User Type</th>
                                <th>Gender</th>
                                <th>Date Of Birth</th>
                                <th>Religion</th>
                                <th>Department</th>
                                <th>Section</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Short Bio</th>
                                {/* <th>Photo</th> */}
                                <th>Actions</th>
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

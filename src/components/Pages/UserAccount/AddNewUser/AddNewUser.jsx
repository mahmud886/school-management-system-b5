import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AddNewUser.css';

import { Container, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';

const AddNewUser = () => {
    const [userData, setUserData] = useState({
        fullName: '',
        user_type: '',
        gender: '',
        dob: '',
        idNo: '',
        religion: '',
        department: '',
        section: '',
        email: '',
        phone: '',
        address: '',
        description: '',
        photo: '',
    });
    let name, value;
    const handleUserInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUserData({ ...userData, [name]: value });
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(userData);

        axios
            .post('http://localhost:3005/add-user/', userData)
            .then((response) => {})
            .catch((err) => {
                console.log(err);
            });
        setUserData({
            fullName: '',
            user_type: '',
            gender: '',
            dob: '',
            idNo: '',
            religion: '',
            department: '',
            section: '',
            email: '',
            phone: '',
            address: '',
            description: '',
            photo: '',
        });
    };

    return (
        <Container fluid>
            <div className='top-header py-4'>
                <h3>Account Setting</h3>
            </div>
            <div className='py-3 bg-white shadow-sm rounded'>
                <h5 className='mx-4'>Add New User</h5>
                <Form onSubmit={(e) => onSubmitHandler(e)} className='m-4'>
                    <Row className='mb-3'>
                        <Form.Group as={Col} md='3' controlId='validationName'>
                            <Form.Label>
                                Full name <span className='text-danger'>*</span>
                            </Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder='full name'
                                className='bg-light'
                                name='fullName'
                                value={userData.fullName}
                                onChange={handleUserInputs}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                            as={Col}
                            md='3'
                            controlId='validationUserType'>
                            <Form.Label>
                                User Type<span className='text-danger'>*</span>
                            </Form.Label>
                            <Form.Select
                                className='bg-light text-muted'
                                name='user_type'
                                value={userData.user_type}
                                onChange={handleUserInputs}>
                                <option>Please Select User Type*</option>
                                <option>Super Admin</option>
                                <option>Admin</option>
                                <option>User</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group
                            as={Col}
                            md='3'
                            controlId='validationGender'>
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                                className='bg-light text-muted'
                                name='gender'
                                value={userData.gender}
                                onChange={handleUserInputs}>
                                <option>Please Select Gender*</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} md='3' controlId='validationDob'>
                            <Form.Label>
                                Date of Birth{' '}
                                <span className='text-danger'>*</span>
                            </Form.Label>
                            <Form.Control
                                required
                                type='date'
                                placeholder='dd/mm/yyyy'
                                defaultValue=''
                                className='bg-light'
                                name='dob'
                                value={userData.dob}
                                onChange={handleUserInputs}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group as={Col} md='3' controlId='validationIdNo'>
                            <Form.Label>
                                ID No <span className='text-danger'>*</span>
                            </Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='ID'
                                required
                                className='bg-light'
                                name='idNo'
                                value={userData.idNo}
                                onChange={handleUserInputs}
                            />
                            <Form.Control.Feedback type='invalid'>
                                Please provide a valid ID.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md='3'
                            controlId='validationCustom05'>
                            <Form.Label>
                                Religion <span className='text-danger'>*</span>
                            </Form.Label>
                            <Form.Select
                                className='bg-light text-muted'
                                name='religion'
                                value={userData.religion}
                                onChange={handleUserInputs}>
                                <option className='text-muted'>
                                    Please Select Religion*
                                </option>
                                <option>Islam</option>
                                <option>Hindu</option>
                                <option>Boddho</option>
                                <option>Cristian</option>
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>
                                Please provide a valid Religion.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md='3'
                            controlId='validationCustom04'>
                            <Form.Label>
                                Department{' '}
                                <span className='text-danger'>*</span>
                            </Form.Label>
                            <Form.Select
                                className='bg-light text-muted'
                                name='department'
                                value={userData.department}
                                onChange={handleUserInputs}>
                                <option>Please Select Department*</option>
                                <option>General Science</option>
                                <option>Math</option>
                                <option>Bangla</option>
                                <option>English</option>
                                <option>Biology</option>
                                <option>Social Science</option>
                                <option>Higher Math</option>
                                <option>Religion</option>
                                <option>Physics</option>
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>
                                Please provide a valid Department.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md='3'
                            controlId='validationCustom05'>
                            <Form.Label>
                                Section <span className='text-danger'>*</span>
                            </Form.Label>
                            <Form.Select
                                className='bg-light'
                                name='section'
                                value={userData.section}
                                onChange={handleUserInputs}>
                                <option>Please Select Section*</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>
                                Please provide a valid Section.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group
                            as={Col}
                            md='3'
                            controlId='validationCustom05'>
                            <Form.Label>
                                Email <span className='text-danger'>*</span>
                            </Form.Label>
                            <Form.Control
                                required
                                type='email'
                                placeholder='Email'
                                className='bg-light'
                                name='email'
                                value={userData.email}
                                onChange={handleUserInputs}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                            as={Col}
                            md='3'
                            controlId='validationCustom05'>
                            <Form.Label>
                                Phone <span className='text-danger'>*</span>
                            </Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder='Phone Number'
                                className='bg-light'
                                name='phone'
                                value={userData.phone}
                                onChange={handleUserInputs}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>
                                Please provide a phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group
                            as={Col}
                            md='5'
                            controlId='validationAddress'>
                            <Form.Label>
                                Address <span className='text-danger'>*</span>
                            </Form.Label>
                            <Form.Control
                                required
                                rows={3}
                                as='textarea'
                                placeholder='Your address'
                                className='bg-light'
                                name='address'
                                value={userData.address}
                                onChange={handleUserInputs}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>
                                Please provide a your address.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md='7'
                            className='mb-3'
                            controlId='validationDescription'>
                            <Form.Label>Short Bio</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                className='bg-light text-muted'
                                placeholder='About you'
                                name='description'
                                value={userData.description}
                                onChange={handleUserInputs}
                            />
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} md='5'>
                        <Form.Label>Your Valid Photo</Form.Label>
                        <Form.Control
                            type='file'
                            className='bg-light'
                            name='photo'
                            value={userData.photo}
                            onChange={handleUserInputs}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Check
                            required
                            label='Agree to terms and conditions'
                            feedback='You must agree before submitting.'
                            feedbackType='invalid'
                        />
                    </Form.Group>
                    <div className='d-flex justify-content-between'>
                        <button
                            className='btn btn-outline-success btn-md px-4'
                            type='submit'>
                            Save
                        </button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default AddNewUser;

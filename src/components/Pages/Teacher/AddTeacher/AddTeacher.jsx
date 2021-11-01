import React, { useState } from 'react';
import './AddTeacher.css';
import { Container, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const AddTeacher = () => {
    const history = useHistory();
    const [teacherData, setTeacherData] = useState({
        fullName: '',
        gender: '',
        dob: '',
        idNo: '',
        bloodGroup: '',
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
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setTeacherData({ ...teacherData, [name]: value });
    };
    const PostData = async (e) => {
        e.preventDefault();
        const {
            fullName,
            gender,
            dob,
            idNo,
            bloodGroup,
            religion,
            department,
            section,
            email,
            phone,
            address,
            description,
            photo,
        } = teacherData;
        const response = await fetch('http://localhost:3005/add-teacher/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName,
                gender,
                dob,
                idNo,
                bloodGroup,
                religion,
                department,
                section,
                email,
                phone,
                address,
                description,
                photo,
            }),
        });
        const data = await response.json();
        if (data.status === 404 || !data) {
            window.alert('Invalid Registration');
            console.log('Invalid Registration');
        } else {
            window.alert('Admission Form Data Save to Database..');
            console.log('Successful');
            history.push('/allTeacher');
        }
    };

    return (
        <Container fluid>
            <div className='top-header py-4'>
                <h3>Teachers</h3>
            </div>
            <div className='py-3 bg-white shadow-sm rounded'>
                <h4 className='mx-4'>Add New Teacher</h4>
                <Form method='POST' className='m-4'>
                    <Row className='mb-3'>
                        <Form.Group
                            as={Col}
                            md='3'
                            controlId='validationCustom01'>
                            <Form.Label>Full name</Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder='First name'
                                defaultValue='Mark'
                                className='bg-light'
                                name='fullName'
                                value={teacherData.fullName}
                                onChange={handleInputs}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                            as={Col}
                            md='3'
                            controlId='validationCustomUsername'>
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                                className='bg-light'
                                name='gender'
                                value={teacherData.gender}
                                onChange={handleInputs}>
                                <option>Please Select Gender*</option>
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md='3'
                            controlId='validationCustom02'>
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                required
                                type='date'
                                placeholder='dd/mm/yyyy'
                                defaultValue=''
                                className='bg-light'
                                name='dob'
                                value={teacherData.dob}
                                onChange={handleInputs}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md='3'
                            controlId='validationCustom03'>
                            <Form.Label>ID No</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='ID'
                                required
                                className='bg-light'
                                name='idNo'
                                value={teacherData.idNo}
                                onChange={handleInputs}
                            />
                            <Form.Control.Feedback type='invalid'>
                                Please provide a valid ID.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group
                            as={Col}
                            md='3'
                            controlId='validationCustom04'>
                            <Form.Label>Blood Group*</Form.Label>
                            <Form.Select
                                className='bg-light'
                                name='bloodGroup'
                                value={teacherData.bloodGroup}
                                onChange={handleInputs}>
                                <option>Please Select Blood Group*</option>
                                <option>O(+)</option>
                                <option>O(-)</option>
                                <option>A(+)</option>
                                <option>A(-)</option>
                                <option>B(+)</option>
                                <option>B(-)</option>
                                <option>AB(+)</option>
                                <option>AB(-)</option>
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>
                                Please provide a valid Blood Group.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md='3'
                            controlId='validationCustom05'>
                            <Form.Label>Religion*</Form.Label>
                            <Form.Select
                                className='bg-light'
                                name='religion'
                                value={teacherData.religion}
                                onChange={handleInputs}>
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
                            <Form.Label>Department*</Form.Label>
                            <Form.Select
                                className='bg-light'
                                name='department'
                                value={teacherData.department}
                                onChange={handleInputs}>
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
                            <Form.Label>Section*</Form.Label>
                            <Form.Select
                                className='bg-light'
                                name='section'
                                value={teacherData.section}
                                onChange={handleInputs}>
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
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type='email'
                                placeholder='Email'
                                className='bg-light'
                                name='email'
                                value={teacherData.email}
                                onChange={handleInputs}
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
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder='Phone Number'
                                className='bg-light'
                                name='phone'
                                value={teacherData.phone}
                                onChange={handleInputs}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>
                                Please provide a phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md='3'
                            controlId='validationCustom05'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder='Your address'
                                className='bg-light'
                                name='address'
                                value={teacherData.address}
                                onChange={handleInputs}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type='invalid'>
                                Please provide a your address.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group
                            as={Col}
                            md='7'
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'>
                            <Form.Label>Short Bio</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                className='bg-light'
                                name='description'
                                value={teacherData.description}
                                onChange={handleInputs}
                            />
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} md='5'>
                        <Form.Label>Your Valid Photo</Form.Label>
                        <Form.Control
                            type='file'
                            className='bg-light'
                            name='photo'
                            value={teacherData.photo}
                            onChange={handleInputs}
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
                            type='submit'
                            name='submit'
                            onClick={PostData}>
                            Save
                        </button>

                        <button
                            className='btn btn-outline-danger btn-md px-4'
                            type='submit'>
                            Reset
                        </button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default AddTeacher;

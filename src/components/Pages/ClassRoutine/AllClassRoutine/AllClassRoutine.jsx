import React from 'react';
import './AllClassRoutine.css';

import { useState } from 'react';

import { Container, Row, Col, Table } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const AllClassRoutine = () => {
    const [allClassRoutines, setAllClassRoutines] = useState([]);

    // Post
    const [classRoutines, setClassRoutines] = useState({
        day: '',
        class_name: '',
        subject_name: '',
        section: '',
        teacher_name: '',
        time: '',
        date: '',
    });
    let name, value;

    const handleRoutineValues = (e) => {
        name = e.target.name;
        value = e.target.value;
        setClassRoutines({ ...classRoutines, [name]: value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(classRoutines);
        axios
            .post('http://localhost:3005/add-class-routine', classRoutines)
            .then((response) => {
                alert('User Data Successfully Store to Database..');
            })
            .catch((err) => {
                console.log(err);
            });

        setClassRoutines({
            day: '',
            class_name: '',
            subject_name: '',
            section: '',
            teacher_name: '',
            time: '',
            date: '',
        });
    };
    // get
    useEffect(() => {
        axios
            .get('http://localhost:3005/all-class-routine')
            .then((response) => setAllClassRoutines(response.data));
        // console.log(allClassRoutines);
    });

    // Delete Data
    const deleteClassRoutine = (id) => {
        axios
            .delete(`http://localhost:3005/delete-class-routine/${id}`)
            .then((res) => res.data);
    };

    return (
        <>
            <Container fluid>
                <div className='top-header py-5'>
                    <h3>All Subjects</h3>
                </div>

                {/* Create Notice */}
                <Row>
                    <Col md={4}>
                        <div className='shadow-sm bg-white rounded'>
                            <div className='inner__container py-4 px-3'>
                                <h5 className='py-1'>Add New Subject</h5>

                                {/* Form */}
                                <Form onSubmit={(e) => onSubmitHandler(e)}>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formName'>
                                        <Form.Label className='text-muted'>
                                            Day
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Subject Name'
                                            name='day'
                                            value={classRoutines.day}
                                            onChange={handleRoutineValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formGradePoint'>
                                        <Form.Label className='text-muted'>
                                            Class
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Class Name'
                                            name='class_name'
                                            value={classRoutines.class_name}
                                            onChange={handleRoutineValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formClass'>
                                        <Form.Label className='text-muted'>
                                            Subject
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Subject Name'
                                            name='subject_name'
                                            value={classRoutines.subject_name}
                                            onChange={handleRoutineValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3 '
                                        controlId='formExamSection'>
                                        <Form.Label className='text-muted'>
                                            Section
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Section'
                                            name='section'
                                            value={classRoutines.section}
                                            onChange={handleRoutineValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3 '
                                        controlId='formExamSection'>
                                        <Form.Label className='text-muted'>
                                            Teacher
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Teacher Name'
                                            name='teacher_name'
                                            value={classRoutines.teacher_name}
                                            onChange={handleRoutineValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3 '
                                        controlId='formTime'>
                                        <Form.Label className='text-muted'>
                                            Class Time
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Class Time'
                                            name='time'
                                            value={classRoutines.time}
                                            onChange={handleRoutineValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3 '
                                        controlId='formDate'>
                                        <Form.Label className='text-muted'>
                                            Date
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='date'
                                            placeholder='Enter Class Start Date'
                                            name='date'
                                            value={classRoutines.date}
                                            onChange={handleRoutineValues}
                                        />
                                    </Form.Group>

                                    <button
                                        className='btn btn-outline-success btn-md px-4'
                                        type='submit'>
                                        Save
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </Col>

                    {/* Notice Board */}
                    <Col md={8}>
                        <div className='shadow-sm bg-white rounded'>
                            <div className='inner__container px-3 py-3 '>
                                <h5 className='py-3'>All Subjects</h5>

                                <Table
                                    striped
                                    bordered
                                    rounded
                                    hover
                                    size='lg'
                                    className='text-center'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Day</th>
                                            <th>Class</th>
                                            <th>Subject</th>
                                            <th>Section</th>
                                            <th>Teacher</th>
                                            <th>Time</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {allClassRoutines.map((routine, index) => (
                                        <tbody>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{routine.day}</td>
                                                <td>{routine.class_name}</td>
                                                <td>{routine.subject_name}</td>
                                                <td>{routine.section}</td>
                                                <td>{routine.teacher_name}</td>
                                                <td>{routine.time}</td>
                                                <td>{routine.date}</td>
                                                <td>
                                                    <p>
                                                        <span>
                                                            <button className='btn'>
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faEdit
                                                                    }
                                                                />
                                                            </button>
                                                            <button
                                                                className='btn'
                                                                onClick={() => {
                                                                    const confirmDelete =
                                                                        window.confirm(
                                                                            `Do you want to delete ${classRoutines.exam_name}`
                                                                        );
                                                                    if (
                                                                        confirmDelete ===
                                                                        true
                                                                    ) {
                                                                        deleteClassRoutine(
                                                                            routine._id
                                                                        );
                                                                    }
                                                                }}>
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faTrashAlt
                                                                    }
                                                                />
                                                            </button>
                                                        </span>
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </Table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AllClassRoutine;

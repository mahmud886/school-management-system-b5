import React from 'react';
import './AllSubjects.css';

import { useState } from 'react';

import { Container, Row, Col, Table } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const AllSubjects = () => {
    const [allSubjects, setAllSubjects] = useState([]);

    // Post
    const [subjects, setSubjects] = useState({
        subject_name: '',
        subject_type: '',
        class_name: '',
        subject_code: '',
    });
    let name, value;

    const handleSubjectValues = (e) => {
        name = e.target.name;
        value = e.target.value;
        setSubjects({ ...subjects, [name]: value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(subjects);
        axios
            .post('http://localhost:3005/add-subject', subjects)
            .then((response) => {
                alert('User Data Successfully Store to Database..');
            })
            .catch((err) => {
                console.log(err);
            });

        setSubjects({
            subject_name: '',
            subject_type: '',
            class_name: '',
            subject_code: '',
        });
    };
    // get
    useEffect(() => {
        axios
            .get('http://localhost:3005/all-subjects')
            .then((response) => setAllSubjects(response.data));
        // console.log(allSubjects);
    });

    // Delete Data
    const deleteSubject = (id) => {
        axios
            .delete(`http://localhost:3005/delete-subject/${id}`)
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
                                            Subject Name
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Subject Name'
                                            name='subject_name'
                                            value={subjects.subject_name}
                                            onChange={handleSubjectValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formGradePoint'>
                                        <Form.Label className='text-muted'>
                                            Subject Type
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Subject Type'
                                            name='subject_type'
                                            value={subjects.subject_type}
                                            onChange={handleSubjectValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formClass'>
                                        <Form.Label className='text-muted'>
                                            Class Name
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Class Name'
                                            name='class_name'
                                            value={subjects.class_name}
                                            onChange={handleSubjectValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3 '
                                        controlId='formExamSection'>
                                        <Form.Label className='text-muted'>
                                            Subject Code
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Subject Code'
                                            name='subject_code'
                                            value={subjects.subject_code}
                                            onChange={handleSubjectValues}
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
                                            <th>Subject Code</th>
                                            <th>Subject Name</th>
                                            <th>Subject Type</th>
                                            <th>Class name</th>

                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {allSubjects.map((subject, index) => (
                                        <tbody>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{subject.subject_code}</td>
                                                <td>{subject.subject_name}</td>
                                                <td>{subject.subject_type}</td>
                                                <td>{subject.class_name}</td>

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
                                                                            `Do you want to delete ${subjects.exam_name}`
                                                                        );
                                                                    if (
                                                                        confirmDelete ===
                                                                        true
                                                                    ) {
                                                                        deleteSubject(
                                                                            subject._id
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

export default AllSubjects;

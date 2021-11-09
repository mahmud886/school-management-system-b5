import React from 'react';

import './ExamSchedule.css';
import { useState } from 'react';

import { Container, Row, Col, Table } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const ExamSchedule = () => {
    const [allExam, setAllExam] = useState([]);

    // Post
    const [exam, setExam] = useState({
        exam_name: '',
        subject_name: '',
        selected_class: '',
        selected_section: '',
        time: '',
        date: '',
    });
    let name, value;

    const handleExamValues = (e) => {
        name = e.target.name;
        value = e.target.value;
        setExam({ ...exam, [name]: value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(exam);
        axios
            .post('http://localhost:3005/add-exam-schedule', exam)
            .then((response) => {
                alert('User Data Successfully Store to Database..');
            })
            .catch((err) => {
                console.log(err);
            });

        setExam({
            exam_name: '',
            subject_name: '',
            selected_class: '',
            selected_section: '',
            time: '',
            date: '',
        });
    };
    // get
    useEffect(() => {
        axios
            .get('http://localhost:3005/all-exam-schedule')
            .then((response) => setAllExam(response.data));
        // console.log(allExam);
    });

    // Delete Data
    const deleteExam = (id) => {
        axios
            .delete(`http://localhost:3005/delete-exam-schedule/${id}`)
            .then((res) => res.data);
    };

    return (
        <>
            <Container fluid>
                <div className='top-header py-5'>
                    <h3>Exam Schedules</h3>
                </div>

                {/* Create Notice */}
                <Row>
                    <Col md={4}>
                        <div className='shadow-sm bg-white rounded'>
                            <div className='inner__container py-4 px-3'>
                                <h5 className='py-1'>Create Exam Schedule</h5>

                                {/* Form */}
                                <Form onSubmit={(e) => onSubmitHandler(e)}>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formName'>
                                        <Form.Label className='text-muted'>
                                            Exam Name
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Exam Name'
                                            name='exam_name'
                                            value={exam.exam_name}
                                            onChange={handleExamValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formSubjectName'>
                                        <Form.Label className='text-muted'>
                                            Subject Name
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Subject Name'
                                            name='subject_name'
                                            value={exam.subject_name}
                                            onChange={handleExamValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formClass'>
                                        <Form.Label className='text-muted'>
                                            Enter Class Name
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Class Name'
                                            name='selected_class'
                                            value={exam.selected_class}
                                            onChange={handleExamValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formExamSection'>
                                        <Form.Label className='text-muted'>
                                            Enter Section
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Section'
                                            name='selected_section'
                                            value={exam.selected_section}
                                            onChange={handleExamValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formExamTime'>
                                        <Form.Label className='text-muted'>
                                            Enter Time
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Exam Time'
                                            name='time'
                                            value={exam.time}
                                            onChange={handleExamValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formPostBy'>
                                        <Form.Label className='text-muted'>
                                            Post Date
                                        </Form.Label>
                                        <Form.Control
                                            type='date'
                                            name='date'
                                            value={exam.date}
                                            onChange={handleExamValues}
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
                                <h5 className='py-3'>Exam Schedules</h5>

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
                                            <th>Exam Name</th>
                                            <th>Subject</th>
                                            <th>Class</th>
                                            <th>Section</th>
                                            <th>Time</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {allExam.map((exam, index) => (
                                        <tbody>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{exam.exam_name}</td>
                                                <td>{exam.subject_name}</td>
                                                <td>{exam.selected_class}</td>
                                                <td>{exam.selected_section}</td>
                                                <td>{exam.time}</td>
                                                <td>{exam.date}</td>
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
                                                                            `Do you want to delete ${exam.exam_name}`
                                                                        );
                                                                    if (
                                                                        confirmDelete ===
                                                                        true
                                                                    ) {
                                                                        deleteExam(
                                                                            exam._id
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

export default ExamSchedule;

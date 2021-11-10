import React from 'react';
import './ExamGrades.css';

import { useState } from 'react';

import { Container, Row, Col, Table } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const ExamGrades = () => {
    const [allExamGrades, setAllExamGrades] = useState([]);

    // Post
    const [examGrades, setExamGrades] = useState({
        grade_name: '',
        grade_point: '',
        percentage_form: '',
        percentage_upto: '',
        comments: '',
    });
    let name, value;

    const handleExamValues = (e) => {
        name = e.target.name;
        value = e.target.value;
        setExamGrades({ ...examGrades, [name]: value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(examGrades);
        axios
            .post('http://localhost:3005/add-exam-grades', examGrades)
            .then((response) => {
                alert('User Data Successfully Store to Database..');
            })
            .catch((err) => {
                console.log(err);
            });

        setExamGrades({
            grade_name: '',
            grade_point: '',
            percentage_form: '',
            percentage_upto: '',
            comments: '',
        });
    };
    // get
    useEffect(() => {
        axios
            .get('http://localhost:3005/all-exam-grades')
            .then((response) => setAllExamGrades(response.data));
        // console.log(allExamGrades);
    });

    // Delete Data
    const deleteExamGrades = (id) => {
        axios
            .delete(`http://localhost:3005/delete-exam-grades/${id}`)
            .then((res) => res.data);
    };

    return (
        <>
            <Container fluid>
                <div className='top-header py-5'>
                    <h3>Exam Grades</h3>
                </div>

                {/* Create Notice */}
                <Row>
                    <Col md={4}>
                        <div className='shadow-sm bg-white rounded'>
                            <div className='inner__container py-4 px-3'>
                                <h5 className='py-1'>Create Exam Grades</h5>

                                {/* Form */}
                                <Form onSubmit={(e) => onSubmitHandler(e)}>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formName'>
                                        <Form.Label className='text-muted'>
                                            Grade Name
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Grade Name'
                                            name='grade_name'
                                            value={examGrades.grade_name}
                                            onChange={handleExamValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formGradePoint'>
                                        <Form.Label className='text-muted'>
                                            Grade Point
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Grade Point'
                                            name='grade_point'
                                            value={examGrades.grade_point}
                                            onChange={handleExamValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formClass'>
                                        <Form.Label className='text-muted'>
                                            Percentage Form
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Percent Form'
                                            name='percentage_form'
                                            value={examGrades.percentage_form}
                                            onChange={handleExamValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formExamSection'>
                                        <Form.Label className='text-muted'>
                                            Percentage Upto
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Percentage Upto'
                                            name='percentage_upto'
                                            value={examGrades.percentage_upto}
                                            onChange={handleExamValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formExamTime'>
                                        <Form.Label className='text-muted'>
                                            Comments
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Grade Comments'
                                            name='comments'
                                            value={examGrades.comments}
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
                                <h5 className='py-3'>Exam Grades</h5>

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
                                            <th>Grade Name</th>
                                            <th>Grade Point</th>
                                            <th>Percent Form</th>
                                            <th>Percent Upto</th>
                                            <th>Comments</th>

                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {allExamGrades.map((examGrades, index) => (
                                        <tbody>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{examGrades.grade_name}</td>
                                                <td>
                                                    {examGrades.grade_point}
                                                </td>
                                                <td>
                                                    {examGrades.percentage_form}
                                                </td>
                                                <td>
                                                    {examGrades.percentage_upto}
                                                </td>
                                                <td>{examGrades.comments}</td>

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
                                                                            `Do you want to delete ${examGrades.exam_name}`
                                                                        );
                                                                    if (
                                                                        confirmDelete ===
                                                                        true
                                                                    ) {
                                                                        deleteExamGrades(
                                                                            examGrades._id
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

export default ExamGrades;

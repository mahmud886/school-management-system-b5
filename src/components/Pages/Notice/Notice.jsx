import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Notice.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';

const Notice = () => {
    const [allNotice, setAllNotice] = useState([]);

    // get
    useEffect(() => {
        axios
            .get('http://localhost:3005/all-notices')
            .then((response) => setAllNotice(response.data));
        // console.log(allNotice);
    });

    // Post
    const [notice, setNotice] = useState({
        title: '',
        notice_type: '',
        description: '',
        post_by: '',
        date: '',
    });
    let name, value;

    const handleNoticeValues = (e) => {
        name = e.target.name;
        value = e.target.value;
        setNotice({ ...notice, [name]: value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(notice);
        axios
            .post('http://localhost:3005/add-notice', notice)
            .then((response) => {})
            .catch((err) => {
                console.log(err);
            });
        setNotice({
            title: '',
            notice_type: '',
            description: '',
            post_by: '',
            date: '',
        });
    };

    // Delete Data
    const deleteNotice = (id) => {
        axios
            .delete(`http://localhost:3005/notice/${id}`)
            .then((res) => res.data);
    };

    return (
        <>
            <Container>
                <div className='top-header py-5'>
                    <h3>Notices</h3>
                </div>

                {/* Create Notice */}
                <Row>
                    <Col md={4}>
                        <div className='shadow-sm bg-white rounded'>
                            <div className='inner__container py-4 px-3'>
                                <h5 className='py-1'>Create a Notice</h5>

                                {/* Form */}
                                <Form onSubmit={(e) => onSubmitHandler(e)}>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formTitle'>
                                        <Form.Label className='text-muted'>
                                            Title
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Title'
                                            name='title'
                                            value={notice.title}
                                            onChange={handleNoticeValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formNoticeType'>
                                        <Form.Label className='text-muted'>
                                            Notice Type
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Type'
                                            name='notice_type'
                                            value={notice.notice_type}
                                            onChange={handleNoticeValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formDescription'>
                                        <Form.Label className='text-muted'>
                                            Description
                                        </Form.Label>
                                        <Form.Control
                                            as='textarea'
                                            rows={3}
                                            name='description'
                                            value={notice.description}
                                            onChange={handleNoticeValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formPostBy'>
                                        <Form.Label className='text-muted'>
                                            Post By
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Name'
                                            name='post_by'
                                            value={notice.post_by}
                                            onChange={handleNoticeValues}
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
                                            value={notice.date}
                                            onChange={handleNoticeValues}
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
                                <h5 className='py-3'>Notice Board</h5>

                                {allNotice.map((notice) => (
                                    <div className='all__notices__container py-3 shadow-sm border rounded p-2 mt-2 overflow-auto'>
                                        <h4>{notice.title}</h4>
                                        <p>{notice.description}</p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <p>
                                                    <span>
                                                        Notice Type:{' '}
                                                        {notice.notice_type}{' '}
                                                    </span>
                                                    <span>
                                                        Post By:{' '}
                                                        {notice.post_by}{' '}
                                                    </span>
                                                    <span>
                                                        {' '}
                                                        Date: {notice.date}
                                                    </span>{' '}
                                                </p>
                                            </div>
                                            <div>
                                                <p>
                                                    {/* <button className='mx-1 btn btn-info'>
                                                        Edit
                                                    </button> */}
                                                    <button
                                                        className='mx-1 btn btn-danger'
                                                        onClick={() => {
                                                            const confirmDelete =
                                                                window.confirm(
                                                                    `Do you want to delete ${notice.title}`
                                                                );
                                                            if (
                                                                confirmDelete ===
                                                                true
                                                            ) {
                                                                deleteNotice(
                                                                    notice._id
                                                                );
                                                            }
                                                        }}>
                                                        Delete
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Notice;

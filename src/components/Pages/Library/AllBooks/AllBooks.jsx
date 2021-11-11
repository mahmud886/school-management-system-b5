import React from 'react';
import './AllBooks.css';
import { useState } from 'react';

import { Container, Row, Col, Table } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const AllBooks = () => {
    const [allBooks, setAllBooks] = useState([]);

    // Post
    const [books, setBooks] = useState({
        book_id: '',
        book_name: '',
        subject_name: '',
        writter_name: '',
        class_name: '',
        published: '',
        creating_date: '',
    });
    let name, value;

    const handleBooksValues = (e) => {
        name = e.target.name;
        value = e.target.value;
        setBooks({ ...books, [name]: value });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(books);
        axios
            .post('http://localhost:3005/add-new-book', books)
            .then((response) => {
                alert('User Data Successfully Store to Database..');
            })
            .catch((err) => {
                console.log(err);
            });

        setBooks({
            book_id: '',
            book_name: '',
            subject_name: '',
            writter_name: '',
            class_name: '',
            published: '',
            creating_date: '',
        });
    };
    // get
    useEffect(() => {
        axios
            .get('http://localhost:3005/all-books')
            .then((response) => setAllBooks(response.data));
        // console.log(allBooks);
    });

    // Delete Data
    const deletebook = (id) => {
        axios
            .delete(`http://localhost:3005/delete-book/${id}`)
            .then((res) => res.data);
    };

    return (
        <>
            <Container fluid>
                <div className='top-header py-5'>
                    <h3>All Libaray Books</h3>
                </div>

                {/* Create Notice */}
                <Row>
                    <Col md={4}>
                        <div className='shadow-sm bg-white rounded'>
                            <div className='inner__container py-4 px-3'>
                                <h5 className='py-1'>Add New Book</h5>

                                {/* Form */}
                                <Form onSubmit={(e) => onSubmitHandler(e)}>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formName'>
                                        <Form.Label className='text-muted'>
                                            Book ID
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Book ID'
                                            name='book_id'
                                            value={books.book_id}
                                            onChange={handleBooksValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formBookName'>
                                        <Form.Label className='text-muted'>
                                            Book Name
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Book Name'
                                            name='book_name'
                                            value={books.book_name}
                                            onChange={handleBooksValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3'
                                        controlId='formSubjectName'>
                                        <Form.Label className='text-muted'>
                                            Subject Name
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Subject Name'
                                            name='subject_name'
                                            value={books.subject_name}
                                            onChange={handleBooksValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3 '
                                        controlId='formWritterName'>
                                        <Form.Label className='text-muted'>
                                            Writter Name
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Writter Name'
                                            name='writter_name'
                                            value={books.writter_name}
                                            onChange={handleBooksValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3 '
                                        controlId='formClassName'>
                                        <Form.Label className='text-muted'>
                                            Class
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Class'
                                            name='class_name'
                                            value={books.class_name}
                                            onChange={handleBooksValues}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className='mb-3 '
                                        controlId='formPublishedYear'>
                                        <Form.Label className='text-muted'>
                                            Published Year
                                        </Form.Label>
                                        <Form.Control
                                            className='bg-light'
                                            type='text'
                                            placeholder='Enter Published Date'
                                            name='published'
                                            value={books.published}
                                            onChange={handleBooksValues}
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
                                            name='creating_date'
                                            value={books.creating_date}
                                            onChange={handleBooksValues}
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
                                            <th>Book ID</th>
                                            <th>Book Name</th>
                                            <th>Subject</th>
                                            <th>Writter Name</th>
                                            <th>Class</th>
                                            <th>Published Date</th>
                                            <th>Creating Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {allBooks.map((book, index) => (
                                        <tbody>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{book.book_id}</td>
                                                <td>{book.book_name}</td>
                                                <td>{book.subject_name}</td>
                                                <td>{book.writter_name}</td>
                                                <td>{book.class_name}</td>
                                                <td>{book.published}</td>
                                                <td>{book.creating_date}</td>
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
                                                                            `Do you want to delete ${books.exam_name}`
                                                                        );
                                                                    if (
                                                                        confirmDelete ===
                                                                        true
                                                                    ) {
                                                                        deletebook(
                                                                            book._id
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

export default AllBooks;

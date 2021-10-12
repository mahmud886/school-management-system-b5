import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container fluid>
                    <LinkContainer to='/'>
                        <Navbar.Brand className=''>SMS</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav '>
                        <Nav
                            className='justify-content-center align-items-center'
                            style={{ width: '100%' }}>
                            <LinkContainer to='/'>
                                <Nav.Link>Dashboard</Nav.Link>
                            </LinkContainer>

                            {/* Dropdown for students */}
                            <NavDropdown
                                title='Students'
                                id='collasible-nav-dropdown'>
                                <LinkContainer to='/students/all-students'>
                                    <NavDropdown.Item>
                                        All Students
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/students/student-details'>
                                    <NavDropdown.Item>
                                        Student Details
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/students/admit-form'>
                                    <NavDropdown.Item>
                                        Admit Form
                                    </NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/students/student-promotion'>
                                    <NavDropdown.Item>
                                        Student Promotion
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            {/* Dropdown for Teachers */}
                            <NavDropdown
                                title='Teachers'
                                id='collasible-nav-dropdown'>
                                <LinkContainer to='/teachers/all-teachers'>
                                    <NavDropdown.Item>
                                        All Teachers
                                    </NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/teachers/teacher-details'>
                                    <NavDropdown.Item>
                                        Teacher Details
                                    </NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/teachers/add-teacher'>
                                    <NavDropdown.Item>
                                        Add Teacher
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            {/* Dropdown for Parents */}
                            <NavDropdown
                                title='Parents'
                                id='collasible-nav-dropdown'>
                                <LinkContainer to='/parents/all-parents'>
                                    <NavDropdown.Item>
                                        All Parents
                                    </NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/parents/parent-details'>
                                    <NavDropdown.Item>
                                        Parent Details
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/parents/add-parent'>
                                    <NavDropdown.Item>
                                        Add Parent
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>

                            {/* Dropdown for Libaray */}
                            <NavDropdown
                                title='Libaray'
                                id='collasible-nav-dropdown'>
                                <LinkContainer to='/library/all-books'>
                                    <NavDropdown.Item>
                                        All Books
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/library/add-new-book'>
                                    <NavDropdown.Item>
                                        Add New Books
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            {/* Dropdown for Accountant */}
                            <NavDropdown
                                title='Accountant'
                                id='collasible-nav-dropdown'>
                                <LinkContainer to='/accountant/all-fees-collection'>
                                    <NavDropdown.Item>
                                        All Fees Collection
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/accountant/expenses'>
                                    <NavDropdown.Item>
                                        Expenses
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/accountant/add-expenses'>
                                    <NavDropdown.Item>
                                        Add Expenses
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            {/* Dropdown for Classes */}
                            <NavDropdown
                                title='Classes'
                                id='collasible-nav-dropdown'>
                                <LinkContainer to='/classes/all-classes'>
                                    <NavDropdown.Item>
                                        All Classes
                                    </NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/classes/add-new-class'>
                                    <NavDropdown.Item>
                                        Add New Class
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            {/* Dropdown for Subjects */}
                            <NavDropdown
                                title='Subjects'
                                id='collasible-nav-dropdown'>
                                <LinkContainer to='/subject/all-subjects'>
                                    <NavDropdown.Item>
                                        All Subjects
                                    </NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/subject/add-new-subject'>
                                    <NavDropdown.Item>
                                        Add New Subject
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            {/* Dropdown for Class Routine */}
                            <NavDropdown
                                title='Class Routine'
                                id='collasible-nav-dropdown'>
                                <LinkContainer to='/routine/all-class-routine'>
                                    <NavDropdown.Item>
                                        Class Routine
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/routine/add-new-routine'>
                                    <NavDropdown.Item>
                                        Add New Routine
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to='/student/attendance'>
                                <Nav.Link>Attendance</Nav.Link>
                            </LinkContainer>
                            {/* Dropdown for Exam */}
                            <NavDropdown
                                title='Exam'
                                id='collasible-nav-dropdown'>
                                <LinkContainer to='/exam/exam-schedule'>
                                    <NavDropdown.Item>
                                        Exam Schedule
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/exam/exam-grades'>
                                    <NavDropdown.Item>
                                        Exam Grades
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to='/notices'>
                                <Nav.Link>Notice</Nav.Link>
                            </LinkContainer>
                            {/* Dropdown for User Accounts */}
                            <NavDropdown
                                title='Accounts'
                                id='collasible-nav-dropdown'>
                                <LinkContainer to='/accounts/add-user'>
                                    <NavDropdown.Item>
                                        Add New User
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/accounts/all-users'>
                                    <NavDropdown.Item>
                                        All Users
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/accounts/user-details'>
                                    <NavDropdown.Item>
                                        User Details
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        </Nav>

                        <Nav>
                            <Nav.Link>User</Nav.Link>

                            <Button className='btn btn-outline-light'>
                                Login
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;

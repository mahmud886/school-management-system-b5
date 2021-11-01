import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/HomePage/Navigation/Navigation';
import { Container } from 'react-bootstrap';
import DashBoard from './components/HomePage/DashBoard/DashBoard';
import AllStudent from './components/Pages/Students/AllStudent/AllStudent';
import NotFound from './components/Pages/NotFound/NotFound';
import StudentDetails from './components/Pages/Students/StudentDetails/StudentDetails';
import AdmitForm from './components/Pages/Students/AdmitForm/AdmitForm';
import StudentPromotion from './components/Pages/Students/StudentPromotion/StudentPromotion';
import AllTeachers from './components/Pages/Teacher/AllTeachers/AllTeachers';
import TeacherDetails from './components/Pages/Teacher/TeacherDetails/TeacherDetails';
import AddTeacher from './components/Pages/Teacher/AddTeacher/AddTeacher';
import AllParents from './components/Pages/Parents/AllParents/AllParents';
import ParentDetails from './components/Pages/Parents/ParentDetails/ParentDetails';
import AddParent from './components/Pages/Parents/AddParent/AddParent';
import AllBooks from './components/Pages/Library/AllBooks/AllBooks';
import AddNewBook from './components/Pages/Library/AddNewBook/AddNewBook';
import AllFeesCollection from './components/Pages/Accountant/AllFeesCollection/AllFeesCollection';
import Expenses from './components/Pages/Accountant/Expenses/Expenses';
import AddExpenses from './components/Pages/Accountant/AddExpenses/AddExpenses';
import AllClasses from './components/Pages/Classes/AllClasses/AllClasses';
import AddNewClass from './components/Pages/Classes/AddNewClass/AddNewClass';
import AllSubjects from './components/Pages/Subjects/AllSubjects/AllSubjects';
import AddNewSubject from './components/Pages/Subjects/AddNewSubject/AddNewSubject';
import AllClassRoutine from './components/Pages/ClassRoutine/AllClassRoutine/AllClassRoutine';
import AddClassRoutine from './components/Pages/ClassRoutine/AddClassRoutine/AddClassRoutine';
import Attendence from './components/Pages/Attendance/Attendence';
import ExamSchedule from './components/Pages/Exam/ExamSchedule/ExamSchedule';
import ExamGrades from './components/Pages/Exam/ExamGrades/ExamGrades';
import Notice from './components/Pages/Notice/Notice';
import AddNewUser from './components/Pages/UserAccount/AddNewUser/AddNewUser';
import AllUsers from './components/Pages/UserAccount/AllUsers/AllUsers';
import UserDetails from './components/Pages/UserAccount/UserDetails/UserDetails';
import Footer from './components/HomePage/Footer/Footer';

const App = () => {
    return (
        <>
            <Router>
                <Navigation />

                <Container fluid className='py-2'>
                    <Switch>
                        <Route path='/' exact component={DashBoard} />

                        {/* Students Route */}
                        <Route
                            path='/students/all-students'
                            exact
                            component={AllStudent}
                        />
                        <Route
                            path='/students/student-details'
                            exact
                            component={StudentDetails}
                        />
                        <Route
                            path='/students/admit-form'
                            exact
                            component={AdmitForm}
                        />
                        <Route
                            path='/students/student-promotion'
                            exact
                            component={StudentPromotion}
                        />
                        {/* Teachers Route */}
                        <Route
                            path='/teachers/all-teachers'
                            exact
                            component={AllTeachers}
                        />
                        <Route
                            path='/teachers/teacher-details'
                            exact
                            component={TeacherDetails}
                        />
                        <Route
                            path='/teachers/add-teacher'
                            exact
                            component={AddTeacher}
                        />
                        {/* Parents Route */}

                        <Route
                            path='/parents/all-parents'
                            exact
                            component={AllParents}
                        />
                        <Route
                            path='/parents/parent-details'
                            exact
                            component={ParentDetails}
                        />
                        <Route
                            path='/parents/add-parent'
                            exact
                            component={AddParent}
                        />
                        {/* Library Routes */}
                        <Route
                            path='/library/all-books'
                            exact
                            component={AllBooks}
                        />
                        <Route
                            path='/library/add-new-book'
                            exact
                            component={AddNewBook}
                        />
                        {/* Accountant Routes */}
                        <Route
                            path='/accountant/all-fees-collection'
                            exact
                            component={AllFeesCollection}
                        />
                        <Route
                            path='/accountant/expenses'
                            exact
                            component={Expenses}
                        />
                        <Route
                            path='/accountant/add-expenses'
                            exact
                            component={AddExpenses}
                        />

                        {/* Classes Routes */}
                        <Route
                            path='/classes/all-classes'
                            exact
                            component={AllClasses}
                        />
                        <Route
                            path='/classes/add-new-class'
                            exact
                            component={AddNewClass}
                        />

                        {/* Subject Routes */}
                        <Route
                            path='/subject/all-subjects'
                            exact
                            component={AllSubjects}
                        />
                        <Route
                            path='/subject/add-new-subject'
                            exact
                            component={AddNewSubject}
                        />

                        {/* Class Routine Route */}
                        <Route
                            path='/routine/all-class-routine'
                            exact
                            component={AllClassRoutine}
                        />
                        <Route
                            path='/routine/add-new-routine'
                            exact
                            component={AddClassRoutine}
                        />

                        {/* Attendence Route */}
                        <Route
                            path='/student/attendance'
                            exact
                            component={Attendence}
                        />
                        {/* Exam Route */}
                        <Route
                            path='/exam/exam-schedule'
                            exact
                            component={ExamSchedule}
                        />
                        <Route
                            path='/exam/exam-grades'
                            exact
                            component={ExamGrades}
                        />
                        {/* Notice Route */}
                        <Route path='/notices' exact component={Notice} />
                        {/* User Accounts Route */}
                        <Route
                            path='/accounts/add-user'
                            exact
                            component={AddNewUser}
                        />
                        <Route
                            path='/accounts/all-users'
                            exact
                            component={AllUsers}
                        />
                        <Route
                            path='/accounts/user-details'
                            exact
                            component={UserDetails}
                        />

                        <Route path='*' component={NotFound} />
                    </Switch>
                </Container>
                {/* <Footer/> */}
            </Router>
        </>
    );
};

export default App;

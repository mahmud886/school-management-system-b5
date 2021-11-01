import React, { useEffect, useState, forwardRef } from "react";
import "./StudentDetails.css";
import data from "../AllStudent/AllStudent";
import Table from "react-bootstrap/Table";

const StudentDetails = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/studentDetails/")
      .then((response) => response.json())
      .then((data) => setStudentData(data));
  });
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Roll</th>
            <th>Blood Group</th>
            <th>Religion</th>
            <th>Email</th>
            <th>Class</th>
            <th>Section</th>
            <th>Admission ID</th>
            <th>Phone</th>
            <th>About</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr>
              <td>{index + 1}</td>
              <th>{student.firstName}</th>
              <th>{student.lastName}</th>
              <th>{student.gender}</th>
              <th>{student.dob}</th>
              <th>{student.roll}</th>
              <th>{student.bloodGroup}</th>
              <th>{student.religion}</th>
              <th>{student.email}</th>
              <th>{student.className}</th>
              <th>{student.section}</th>
              <th>{student.admissionID}</th>
              <th>{student.phone}</th>
              <th>{student.about}</th>
              <th>{student.photo}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentDetails;

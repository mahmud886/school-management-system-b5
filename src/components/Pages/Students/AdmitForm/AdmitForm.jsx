import React, { useState } from "react";
import "./AdmitForm.css";
import { Container, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AdmitForm = () => {
  const history = useHistory();
  const [studentData, setStudentData] = useState([
    {
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      roll: "",
      bloodGroup: "",
      religion: "",
      email: "",
      className: "",
      section: "",
      admissionID: "",
      phone: "",
      description: "",
      photo: "",
    },
  ]);
  let name, value;
  const handleInputsValues = (e) => {
    name = e.target.name;
    value = e.target.value;
    setStudentData({ ...studentData, [name]: value });
  };

  const handlePostData = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      gender,
      dob,
      roll,
      bloodGroup,
      religion,
      email,
      className,
      section,
      admissionID,
      phone,
      description,
      photo,
    } = studentData;

    const response = await fetch("http://localhost:3005/admission-form/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        gender,
        dob,
        roll,
        bloodGroup,
        religion,
        email,
        className,
        section,
        admissionID,
        phone,
        description,
        photo,
      }),
    });

    const data = await response.json();
    if (data.status === 404 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Admission Form Data Save to Database..");
      console.log("Successful");
      history.push("/admit-form");
    }
  };

  return (
    <Container fluid>
      <div className="top-header py-4">
        <h3>Students</h3>
      </div>
      <div className="py-3 bg-white shadow-sm rounded">
        <h4 className="mx-4">Add New Students</h4>
        <Form method="POST" className="m-4">
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
                className="bg-light"
                name="firstName"
                value={studentData.firstName}
                onChange={handleInputsValues}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
                className="bg-light"
                name="lastName"
                value={studentData.lastName}
                onChange={handleInputsValues}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustomUsername">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                className="bg-light"
                name="gender"
                value={studentData.gender}
                onChange={handleInputsValues}
              >
                <option>Please Select Gender*</option>
                <option>Male</option>
                <option>Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="dd/mm/yyyy"
                defaultValue=""
                className="bg-light"
                name="dob"
                value={studentData.dob}
                onChange={handleInputsValues}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Roll</Form.Label>
              <Form.Control
                type="text"
                placeholder="Roll"
                required
                className="bg-light"
                name="roll"
                value={studentData.roll}
                onChange={handleInputsValues}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Roll.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Blood Group*</Form.Label>
              <Form.Select
                className="bg-light"
                name="bloodGroup"
                value={studentData.bloodGroup}
                onChange={handleInputsValues}
              >
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
              <Form.Control.Feedback type="invalid">
                Please provide a valid Blood Group.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Religion*</Form.Label>
              <Form.Select
                className="bg-light"
                name="religion"
                value={studentData.religion}
                onChange={handleInputsValues}
              >
                <option className="text-muted">Please Select Religion*</option>
                <option>Islam</option>
                <option>Hindu</option>
                <option>Boddho</option>
                <option>Cristian</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid Religion.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="email"
                className="bg-light"
                name="email"
                value={studentData.email}
                onChange={handleInputsValues}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Class*</Form.Label>
              <Form.Select
                className="bg-light"
                name="className"
                value={studentData.className}
                onChange={handleInputsValues}
              >
                <option>Please Select Class*</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid Blood Group.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Section*</Form.Label>
              <Form.Select
                className="bg-light"
                name="section"
                value={studentData.section}
                onChange={handleInputsValues}
              >
                <option>Please Select Section*</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid Section.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Admission ID</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Admission ID"
                className="bg-light"
                name="admissionID"
                value={studentData.admissionID}
                onChange={handleInputsValues}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a Admission ID.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Phone Number"
                className="bg-light"
                name="phone"
                value={studentData.phone}
                onChange={handleInputsValues}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              as={Col}
              md="7"
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="bg-light"
                name="description"
                value={studentData.description}
                onChange={handleInputsValues}
              />
            </Form.Group>
            <Form.Group as={Col} md="5">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control
                type="file"
                className="bg-light"
                name="photo"
                value={studentData.photo}
                onChange={handleInputsValues}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-success btn-md px-4"
              type="submit"
              name="submit"
              onClick={handlePostData}
            >
              Save
            </button>

            <button
              className="btn btn-outline-danger btn-md px-4"
              type="submit"
            >
              Reset
            </button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default AdmitForm;

import React, { Component } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const AddMember = () => {


    const [studentName, setStudentName] = useState('')
    const [course, setCourse] = useState('')
    const [languageKnown, setLanguageKnown] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


    const submit = (e) => {
        e.preventDefault();
        const employee = {studentName:studentName, 
            course:course, 
            languageKnown:languageKnown, 
            gender:gender, 
            dateOfBirth:dateOfBirth}
        console.log(employee)
        api.post('/student/addStudent',employee
        ).then(res => {
            console.log(res.data)
            setSuccess(res.data.message);
            navigate('/');
        }).catch((e) => {
            console.log("error")
            console.log(e)
        } );

    }
    return (
        <div className='border border-5'>
            <h1>Add Member</h1>
            <form className="row g-3 form-horizontal" onSubmit={(e) => submit(e)}>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input onChange={(e) => setStudentName( e.target.value)} 
                    id="studentName"
                    name="studentName"
                    value={studentName} 
                    type="email" 
                    required
                    className="form-control" 
                    placeholder="name@example.com"></input>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Course</label>
                    <input className="form-control" 
                    name='course'
                    onChange={(e) => setCourse(e.target.value)} 
                    id="course" 
                    required
                    value={course} rows="3"></input>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Language</label>
                    <input className="form-control" 
                    onChange={(e) => setLanguageKnown(e.target.value)} 
                    id="languageKnown" 
                    name="languageKnown"
                    required
                    value={languageKnown} rows="3"></input>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Gender</label>
                    <select className="form-control" 
                    onChange={(e) => setGender(e.target.value)} 
                    id="gender" 
                    name="gender"
                    required
                    value={gender} rows="3">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Date Of Birth</label>
                    <input type="date" 
                    className="form-control" 
                    onChange={(e) => setDateOfBirth(e.target.value)} 
                    id="dateOfBirth" 
                    name="dateOfBirth"
                    required
                    value={dateOfBirth} rows="3"></input>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
                </div>
            </form>
            <span>{success}</span>
        </div>
    );

    
}

export default AddMember;
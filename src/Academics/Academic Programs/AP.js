import React from 'react';
import { Link } from 'react-router-dom';
import './AP.css'

const AP = () => {
  // Define the table data
  const tableData = [
    {
      courseNo: 'PH 203',
      courseTitle: ' Quantum Mechanics 1',
      instructor: 'Sudhir Vempati',
      startDate: 'Aug 1',
      timingLocation: '11:30 AM – 1:00 PM Tuesday & Thursday at Auditorium, Physical Sciences Building',
    },
    {
        courseNo: 'HE 390',
        courseTitle: ' Black Holes, Holography and Quantum Information',
        instructor: 'Chethan Krishnan',
        startDate: 'Aug 3',
        timingLocation: '11:00 AM -12:30 PM Tuesday & Thursday at LH3 Physicsal Sciences Building',
      },
      {
        courseNo: 'HE 395',
        courseTitle: 'Quantum Field Theory I',
        instructor: 'Justin David',
        startDate: 'Aug 1',
        timingLocation: '2:00 PM, Tuesday & Thursday at LH3 Physicsal Sciences Building',
      },
      {
        courseNo: 'PH 205',
        courseTitle: 'Mathematical Methods of Physics  I',
        instructor: 'Aninda Sinha',
        startDate: 'Aug 2',
        timingLocation: '11:00 AM - 12:00 PM, Monday, Wednesday and Thursday at Auditorium, Physical Sciences Building',
      },
    // Add more data objects as needed
  ];

  return (
    <div className="ap-container">
      <h1 className="ap-heading">Academic Programmes</h1>
      <hr className="ap-line" />
      <div className="ap-buttons">
        <Link to="/academic-programs/research" className="ap-button">Research</Link>
        <Link to="/academic-programs/phd-programme" className="ap-button">Ph.D. Programme</Link>
        <Link to="/academic-programs/integrated-phd-programme" className="ap-button">Integrated Ph.D. Programme</Link>
      </div>
      <hr className="ap-line" />
      <a href="https://iisc.ac.in/wp-content/uploads/2023/05/Student-Information-Handbook-2023.pdf" target="_blank" rel="noopener noreferrer" className="ap-button">Student Information Handbook (2023)</a>
      <hr className="ap-line" />
      <a href="https://iisc.ac.in/wp-content/uploads/2023/02/SOI.pdf" target="_blank" rel="noopener noreferrer" className="ap-button">Scheme of Instructions for year IISc (2023 - August Semester)</a>
      <hr className="ap-line" />

      <h2 className="ap-subheading">Courses Offered by CHEP faculty during the semester (Jan - 2023)</h2>
      <table className="ap-table">
        <thead>
          <tr>
            <th>COURSE NO</th>
            <th>COURSE TITLE AND CREDITS</th>
            <th>INSTRUCTOR</th>
            <th>COURSE STARTS ON</th>
            <th>TIMING AND LOCATION</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.courseNo}</td>
              <td>{data.courseTitle}</td>
              <td>{data.instructor}</td>
              <td>{data.startDate}</td>
              <td>{data.timingLocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AP;

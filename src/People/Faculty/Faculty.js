  import React from 'react';
  import { Link } from 'react-router-dom';
  import './Faculty.css';
  import anant from './anant.jpg';
  import aninda from './aninda.jpg';
  import apoorva from './apoorva.jpg';
  import biplob from './biplob.png';
  import ck from './chethan.jpg';
  import diptiman from './diptiman.jpg';
  import gaurav from './gaurav.jpg';
  import justin from './justin.jpg';
  import jrk from './jyothsna.jpg';
  import nr from './nirmal.jpeg';
  import prasad from './prasad.jpg';
  import rl from './ranjan.jpg';
  import rg from './rohini.jpg';
  import rk from './romesh.jpg';
  import sdv from './sachin.jpg';
  import sv from './sudhir.jpg';
  import sb from './sougato.jpeg';

  function Faculty() {
    const facultyData = [
      {
        image: anant,
        name: 'B. ANANTHANARAYAN',
        email: 'anant@iisc.ac.in',
        id:'anant',
      },
      {
        image: biplob,
        name: 'BIPLOB BHATTACHERJEE',
        email: 'biplob@iisc.ac.in',
        id:'biplob',

      },
      {
        image: aninda,
        name: 'ANINDA SINHA',
        email: 'asinha@iisc.ac.in',
        id:'aninda',
      },
      {
        image: apoorva,
        name: 'APOORVA D. PATEL',
        email: 'apoorva@iisc.ac.in',
        id:'apoorva',
      },
      {
        image: ck,
        name: 'CHETHAN KRISHNAN',
        email: 'chethan@iisc.ac.in',
        id:'chethan',
      },
      {
        image: diptiman,
        name: 'DIPTIMAN SEN',
        email: 'diptiman@iisc.ac.in',
        id:'diptiman',
      },
      {
        image: gaurav,
        name: 'GAURAV NARAIN',
        email: 'gnarain@iisc.ac.in',
        id:'gaurav',
      },
      {
        image: justin,
        name: 'JUSTIN DAVID',
        email: 'justin@iisc.ac.in',
        id:'justin',
      },
      {
        image: jrk,
        name: 'JYOTHSNA RANI K.',
        email: 'jyothsna@iisc.ac.in',
        id:'jyothsna',
      },
      {
        image: nr,
        name: 'NIRMAL RAJ',
        email: 'nraj@iisc.ac.in',
        id:'nirmal',
      },
      {
        image: prasad,
        name: 'PRASAD HEGDE',
        email: 'prasadhegde@iisc.ac.in',
        id:'prasad',
      },
      {
        image: rl,
        name: 'RANJAN LAHA',
        email: 'rajanlaha@iisc.ac.in',
        id:'ranjan',
      },
      {
        image: sdv,
        name: 'SACHINDEO VAIDYA',
        email: 'vaidya@iisc.ac.in',
        id:'sachin',
      },
      {
        image: sv,
        name: 'SUDHIR VEMPATI',
        email: 'vempati@iisc.ac.in',
        id:'sudhir',
      },
    ];

    // Sort facultyData based on last name
    facultyData.sort((a, b) => {
      const lastNameA = a.name.split(' ').pop().toUpperCase();
      const lastNameB = b.name.split(' ').pop().toUpperCase();
      if (lastNameA < lastNameB) {
        return -1;
      }
      if (lastNameA > lastNameB) {
        return 1;
      }
      return 0;
    });

    const honoraryProfessor = {
      image: rg,
      name: 'ROHINI M. GODBOLE',
      email: 'rohini@iisc.ac.in',
      id:'rohini',

    };

    const visitingChairProfessor = {
      image: sb,
      name: 'SOUGATO BOSE',
      email: 's.bose@ucl.ac.uk'
    };

    const insaSeniorScientist = {
      image: rk,
      name: 'ROMESH KAUL',
      email: 'romesh@iisc.ac.in',
      id:'romesh',
    };


    return (
      <div className="faculty-page">
        <h1 className="page-heading">Faculty</h1>
        <hr className="line" />

        <div className="faculty-container">
          {facultyData.map((faculty, index) => (
            <Link to={`/professor/${faculty.id}`} key={index} className="name-card">
              <img src={faculty.image} alt={faculty.name} className="faculty-image" />
              <h3 className="faculty-name">{faculty.name}</h3>
              <p className="faculty-email">{faculty.email}</p>
            </Link>
          ))}
        </div>
        <div className='sp'>
        
          <div className="name-cardsp">
          <h2 className="section-heading">Satish Dhawan Visiting Chair Professor</h2>
            <img src={visitingChairProfessor.image} alt={visitingChairProfessor.name} className="faculty-image" />
            <h3 className="faculty-name">{visitingChairProfessor.name}</h3>
            <p className="faculty-email">{visitingChairProfessor.email}</p>
          </div>
        
          <Link to={`/professor/${honoraryProfessor.id}`} className="name-cardsp">
          <h2 className="section-heading">Honorary Professor & INSA Senior Scientist </h2>
            <img src={honoraryProfessor.image} alt={honoraryProfessor.name} className="faculty-image" />
            <h3 className="faculty-name">{honoraryProfessor.name}</h3>
            <p className="faculty-email">{honoraryProfessor.email}</p>
          </Link>
        
          <Link to={`/professor/${insaSeniorScientist.id}`} className="name-cardsp">
          <h2 className="section-heading">INSA <br/>Senior Scientist</h2>
            <img src={insaSeniorScientist.image} alt={insaSeniorScientist.name} className="faculty-image" />
            <h3 className="faculty-name">{insaSeniorScientist.name}</h3>
            <p className="faculty-email">{insaSeniorScientist.email}</p>
          </Link>
        </div>
      </div>
    );
  }

  export default Faculty;

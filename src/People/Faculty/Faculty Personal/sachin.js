import React from 'react';
import sdv from '../sachin.jpg';
import './personal.css';

function Personal() {
  const professorData = {
    name: 'SACHINDEO VAIDYA',
    position: 'Professor',
    researchTopics: ['Non-Commutative geometry', 'Quantum Field Theory'],
    phdInstitute: 'Ph.D. 1998, Syracuse',
    contact: {
      officeNo: 'A2-04',
      telephone: '+91-80-2293-3148',
      email: 'vaidya@iisc.ac.in',
    },
    publicationLink: "https://inspirehep.net/authors/985110?ui-citation-summary=true",
  };

  return (
    <div className="professor-page">
      <h1 style={{textAlign:'center'}}>{professorData.name}</h1>

      <div className="professor-container">
        <img src={sdv} alt={professorData.name} className="professor-image" />

        <div className="professor-details">
          <div className="professor-info">
            <p className='professor-info'><b>{professorData.position}</b></p>
          </div>

          <div className="professor-info">
            <p className='professor-info'><b> {professorData.phdInstitute}</b></p>
          </div>

          <div className="professor-info">
            <h2 className='professor-info'>Research Topics</h2>
            <ul>
              {professorData.researchTopics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>

          <div className="professor-info">
            <h2 className='professor-info'>Contact</h2>
            <p>{professorData.contact.officeNo}</p>
            <p>{professorData.contact.telephone}</p>
            <p><a href={`mailto:${professorData.contact.email}`}>{professorData.contact.email}</a></p>
          </div>

          <div className="professor-publications">
            <p>
             <a href={professorData.publicationLink} target="_blank" rel="noopener noreferrer"><b>PUBLICATIONS</b></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;

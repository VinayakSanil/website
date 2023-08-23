import React from 'react';
import gn from '../gaurav.jpg';
import './personal.css';

function Personal() {
  const professorData = {
    name: 'GAURAV NARAIN',
    position: 'Assistant Professor',
    researchTopics: ['Quantum Gravity', 'Path Integrals', 'Renormalization Group'],
    phdInstitute: 'Ph.D. 2010, SISSA',
    contact: {
      officeNo: 'B2-09',
      telephone: '+91-80-2293-3789',
      email: 'gnarain@iisc.ac.in',
    },
    publicationLink: "https://inspirehep.net/authors/1033768?ui-citation-summary=true",
  };

  return (
    <div className="professor-page">
      <h1 style={{textAlign:'center'}}>{professorData.name}</h1>

      <div className="professor-container">
        <img src={gn} alt={professorData.name} className="professor-image" />

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

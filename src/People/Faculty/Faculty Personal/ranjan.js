import React from 'react';
import rl from '../ranjan.jpg';
import './personal.css';

function Personal() {
  const professorData = {
    name: 'RANJAN LAHA',
    position: 'Assistant Professor',
    researchTopics: ['Dark Matter', 'AstroParticle Physics', 'BSM Physics'],
    phdInstitute: 'Ph.D. 2014, Ohio State',
    contact: {
      officeNo: 'E1-12',
      telephone: '+91-80-2293-2061',
      email: 'rajanlaha@iisc.ac.in',
    },
    publicationLink: "https://inspirehep.net/authors/1205918?ui-citation-summary=true",
  };

  return (
    <div className="professor-page">
      <h1 style={{textAlign:'center'}}>{professorData.name}</h1>

      <div className="professor-container">
        <img src={rl} alt={professorData.name} className="professor-image" />

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

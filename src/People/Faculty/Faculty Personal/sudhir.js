import React from 'react';
import sv from '../sudhir.jpg';
import './personal.css';

function Personal() {
  const professorData = {
    name: 'SUDHIR VEMPATI',
    position: 'Professor',
    researchTopics: ['Physics beyond Standard Model Neutrinos and Dark Matter', 'SUSY and Grand Unified theories'],
    phdInstitute: 'Ph.D. 2000, PRL',
    contact: {
      officeNo: 'A2-02',
      telephone: '+91-80-2293-2543',
      email: 'vempati@iisc.ac.in',
    },
    publicationLink: "https://inspirehep.net/authors/1019320?ui-citation-summary=true",
  };

  return (
    <div className="professor-page">
      <h1 style={{textAlign:'center'}}>{professorData.name}</h1>

      <div className="professor-container">
        <img src={sv} alt={professorData.name} className="professor-image" />

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

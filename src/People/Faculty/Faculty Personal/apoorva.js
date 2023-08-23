import React from 'react';
import apoorva from '../apoorva.jpg';
import './personal.css';

function Personal() {
  const professorData = {
    name: 'APOORVA D. PATEL',
    position: 'Professor',
    researchTopics: ['Lattice Gauge theory', 'Quantum Computation', 'Renormalization Group','Quark-Gluon Plasma'],
    phdInstitute: 'Ph.D. 1984, Caltech',
    contact: {
      officeNo: 'A2-03',
      telephone: '+91-80-2293-2268',
      email: 'adpatel@iisc.ac.in',
    },
    publicationLink: "https://scholar.google.com/citations?user=y9MS_QgAAAAJ&hl=en",
  };

  return (
    <div className="professor-page">
      <h1 style={{textAlign:'center'}}>{professorData.name}</h1>

      <div className="professor-container">
        <img src={apoorva} alt={professorData.name} className="professor-image" />

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
            <p><a href='https://chep.iisc.ac.in/Personnel/adpatel.html' target='_blank' rel='noopener noreferrer'>PERSONAL PAGE</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;

import React from 'react';
import jrk from '../jyothsna.jpg';
import './personal.css';

function Personal() {
  const professorData = {
    name: 'JYOTHSNA RANI KOMARAGIRI',
    position: 'Associate Professor',
    researchTopics: ['Experimental High Energy Physics', 'Collider Physics', 'Heavy Quark Physics','Dark matter searches'],
    phdInstitute: 'Ph.D. 2006, TIFR',
    contact: {
      officeNo: 'B2-07',
      telephone: '+91-80-2293-3594',
      email: 'jyothsna@iisc.ac.in',
    },
    publicationLink: "https://inspirehep.net/literature?sort=mostrecent&size=25&page=1&q=find%20a%20J.R.Komaragiri.1",
  };

  return (
    <div className="professor-page">
      <h1 style={{textAlign:'center'}}>{professorData.name}</h1>

      <div className="professor-container">
        <img src={jrk} alt={professorData.name} className="professor-image" />

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
            <p><a href='https://chep.iisc.ac.in/Personnel/pages/jyothsna/index.html' target='_blank' rel='noopener noreferrer'>PERSONAL PAGE</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;

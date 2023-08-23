import React from 'react';
import jd from '../justin.jpg';
import './personal.css';

function Personal() {
  const professorData = {
    name: 'JUSTIN DAVID',
    position: 'Professor and CHAIR',
    researchTopics: ['String Theory', 'Guage-string Duality', 'Black holes in String theory'],
    phdInstitute: 'Ph.D. 1999, TIFR',
    contact: {
      officeNo: 'A2-06',
      telephone: '+91-80-2293-3146',
      email: 'justin@iisc.ac.in',
    },
    publicationLink: "https://inspirehep.net/literature?sort=mostrecent&size=25&page=1&q=find%20a%20%20justin%20r%20david%20",
  };

  return (
    <div className="professor-page">
      <h1 style={{textAlign:'center'}}>{professorData.name}</h1>

      <div className="professor-container">
        <img src={jd} alt={professorData.name} className="professor-image" />

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

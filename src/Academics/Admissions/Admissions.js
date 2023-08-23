import React from 'react';
import './Admissions.css';

const Admissions = () => {
  return (
    <div className="admissions-container">
      <h1 className="admissions-heading">ADMISSIONS</h1>
      <hr className="admissions-line" />
      <p className="admissions-info">
        The general information about admissions to IISc, and the application procedure, is available at the IISc website under admissions. The Centre for High Energy Physics admits 
        students for pursuing their Ph.D. degree in two different streams:<br/>
        1. Ph.D. Programme<br/>
        2.Integrated Ph.D. Programme
      </p>
      <div className="admissions-boxes">
        <div className="admissions-box">
          <h2>Ph.D. Programme</h2>
          <ul>
            <li>The qualification needed is M.Sc. or equivalent degree in Physics, Mathematics or Chemistry, or B.E/B.Tech. in any branch of Engineering.</li>
            <li>Students are called for the interview based on their performance in GATE, JEST, UGC/CSIR NET, INSPIRE or IISc Entrance Examination.</li>
            <li>The interviews are held typically in the beginning of June every year.</li>
            <li>Two or three students are admitted in the programme every year.</li>
          </ul>
        </div>
        <div className="admissions-box">
          <h2>Integrated Ph.D. Programme</h2>
          <ul>
            <li>The qualification needed is a minimum of first class in B.Sc. or equivalent degree in Physical Sciences.</li>
            <li>Students are called for the interview based on their performance in JAM.</li>
            <li>The interviews are held typically towards the end of May every year.</li>
            <li>Around 18 students are admitted in the programme every year. Some of them join CHEP after two years of course work, and the rest join the Physics Department.</li>
          </ul>
        </div>
      </div>
      <hr className="admissions-bottom-line" />
      <p className="admissions-link">Admissions in IISc: <a href="https://iisc.ac.in/admissions/" target="_blank" rel="noopener noreferrer">https://iisc.ac.in/admissions/</a></p>
    </div>
  );
};

export default Admissions;

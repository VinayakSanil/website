import React from 'react';
import './AP.css';
import { Link } from 'react-router-dom';
const PhdProgramme = () => {
  return (
    <div>
      <h2 className="page-heading">Ph.D. Programme</h2>
      <hr className="page-line" />

      <div className="phd-container">
        <div className="phd-box">
          <h2>Ph.D. Programme at CHEP</h2>
          <ul>
            <li>CHEP started a Ph.D. programme from the academic year 1996-97.</li>
            <li>The minimum qualification for applying is an M.Sc. in Physics, Mathematics, or Chemistry, or a B.E./B.Tech. degree.</li>
            <li>The programme is oriented towards research in Theoretical and Experimental High Energy Physics as well as Mathematical Physics.</li>
          </ul>
        </div>

        <div className="phd-box">
          <h2>Research Areas</h2>
          <ul>
            <li>General research areas include: Quantum Field Theory, The Standard Model of Particle Physics and Beyond, New particle searches, Collider data Analysis, Detector Physics and 
                Fabrication, QCD and Lattice Gauge Theories, Quantum Gravity, String Theory and Black Holes, Non-commutative Geometry, Quantum Computation, Condensed Matter Systems in Low 
                Dimensions.</li>
            <li>Detailed research interests of individual faculty members can be found on their respective home pages under Faculty.</li>
          </ul>
        </div>

        <div className="phd-box">
          <h2>Admission and Curriculum</h2>
          <ul>
            <li>The advertisement, examination, interview procedure, etc. follow the overall procedure followed by IISc.</li>
            <li>Interviews for the CHEP programme are conducted by a Departmental Committee.</li>
            <li>After admission, basic knowledge of the incoming students is assessed in subjects such as Classical Mechanics, Electromagnetic Theory, Mathematical physics, 
                Quantum Mechanics, Thermodynamics and Statistical Physics.</li>
            <li>During the first year, students are expected to fill up gaps in their knowledge, if necessary, by solving a set of problems on these subjects.</li>
          </ul>
        </div>
      </div>
      <div className="course-requirements">
  <p>Course requirements for CHEP students:</p>

  <div className="tables-container">
    <div className="table">
      <h3>First Semester</h3>
      <table>
        <tbody>
          <tr>
            <td>Nuclear and Particle Physics</td>
            <td>3:0</td>
          </tr>
          <tr>
            <td>Quantum Field Theory I</td>
            <td>3:0</td>
          </tr>
          <tr>
            <td>Elective E1 (One or None)</td>
            <td>3:0</td>
          </tr>
          <tr>
            <td></td>
            <td>6/9</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="table">
      <h3>Second Semester</h3>
      <table>
        <tbody>
          <tr>
            <td>Advanced Mathematical Methods in Physics</td>
            <td>3:0</td>
          </tr>
          <tr>
            <td>The Standard Model of Particle Physics</td>
            <td>3:0</td>
          </tr>
          <tr>
            <td>Elective E2 (One or None)</td>
            <td>3:0/6:0</td>
          </tr>
          <tr>
            <td></td>
            <td>6/9</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="table">
      <h3>Third Semester</h3>
      <table>
        <tbody>
          <tr>
            <td>Elective E3(One or none)</td>
            <td>3:0</td>
          </tr>
          <tr>
            <td></td>
            <td>3/0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <p>The minimum course credit requirement for the IISc Ph.D. programme is 12. Additional electives may be required to be credited depending on the area the student chooses to 
    specialize in.<br/>

    Electives (some electives may not be offered every year):</p>
   </div>
   <div className="elective-boxes">
  <div className="elective-box">
    <h3>Elective 1</h3>
    <ul>
      <li>Quantum Mechanics III (3:0)</li>
      <li>Advanced Statistical Physics (3:0)</li>
      <li>Condensed Matter Physics II (3:0)</li>
      <li>Physics Beyond the Standard Model (3:0)</li>
    </ul>
  </div>
  <div className="elective-box">
    <h3>Elective 2</h3>
    <ul>
      <li>Quantum Field Theory II (3:0)</li>
      <li>General Relativity (3:0)</li>
      <li>Cosmology for Theorists (3:0)</li>
      <li>Quantum Computation (3:0)</li>
      <li>String Theory (3:0)</li>
      <li>Experimental High Energy Physics (3:0)</li>
    </ul>
  </div>
  <div className="elective-box">
    <h3>Elective 3</h3>
    <ul>
      <li>AdS/CFT-or- Quantum Gravity in Anti-de Sitter Space (3:0)</li>
      <li>String Theory II (3:0)</li>
      <li>QCD and Collider Physics</li>
    </ul>
  </div>
</div>
<p className='phd-info'>All the electives may not be offered every year. The students have to choose the electives in consultation with their supervisors. The supervisor may ask the students to take 
    more electives than the list above, even after the Comprehensive Exam, as per his/her needs and interests. There is no provision for skipping courses, but a student may seek 
    exemption from any course by passing a written test at the beginning of the term.<br/><br/>
    Some of the courses overlap with those of the Physics department. The CHEP specific courses are: Nuclear and Particle Physics, Quantum Mechanics III, 
    Quantum Field Theory I and II, Advanced Mathematical Physics, General Relativity, Quantum Computation, String Theory and II, The Standard Model of Particle Physics, 
    Experimental High Energy Physics, and Collider Physics.<br/><br/>
    The syllabi for these courses appear <Link to="/syllabi">here</Link>.<br/><br/>
    There will be a Comprehensive Exam, which the students must take as soon as possible after passing the above courses. In any case, they must take the exam before the end of 
    their second year. The exam will test whether the student has sufficient preparation to begin Ph.D. research. Those who fail the exam will be given another attempt after a 
    few months.<br/><br/>
    At the time of joining, each student must find a provisional Faculty Advisor, who may not turn out to be the actual Ph.D. supervisor. The student must select the Ph.D. supervisor
     by the end of the second semester. Students will be permitted to work with a faculty outside CHEP if their research interests so demand. In such cases, however, they must have 
    a joint supervisor in CHEP. Beginning from the second year, students must present a seminar each year on their work, to acquaint the CHEP faculty with their progress.
    </p>
    </div>
  );
};

export default PhdProgramme;

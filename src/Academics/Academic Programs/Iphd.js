import React from "react";
import './AP.css';
import { Link } from 'react-router-dom';

const IntegratedPhD = () => {
    return (
        <div className="ip-container">
            <h1 className="ip-heading">Integrated Ph.D. Programme</h1>
            <hr className="ip-line"/>
            <p>CHEP participates in the Integrated Ph.D programme that is jointly run with the <b>Department of Physics</b> and the <b>Department of Instrumentation and Applied Physics</b>.
                The admission interview is conducted by a joint Physics/IAP/CHEP committee<br/><br/>
                Course requirements for CHEP students:
            </p>
            <div className="itable1">
                <div className="table">
                    <h3>FIRST SEMESTER</h3>
                     <table>
                        <tbody>
                            <tr>
                                <td>Classical Mechanics</td>
                                <td>3:0</td>
                            </tr>
                            <tr>
                                <td>Quantum Mechanics I</td>
                                <td>3:0</td>
                            </tr>
                            <tr>
                                <td>Mathematical Methods of Physics</td>
                                <td>3:0</td>
                            </tr>
                            <tr>
                                <td>Fundamentals of Astrophysics</td>
                                <td>3:0</td>
                            </tr>
                            <tr>
                                <td>General Physics Laboratory</td>
                                <td>0:3</td>
                            </tr>
                            <tr>
                                <td>Workshop Practice</td>
                                <td>0:1</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>16</td>
                            </tr>
                        </tbody>
                     </table>
                </div>
                <div className="table">
                <h3>SECOND SEMESTER</h3>
                     <table>
                        <tbody>
                            <tr>
                                <td>Statistical Mechanics</td>
                                <td>3:0</td>
                            </tr>
                            <tr>
                                <td>Quantum Mechanics II</td>
                                <td>3:0</td>
                            </tr>
                            <tr>
                                <td>Electromagnetic Theory</td>
                                <td>3:0</td>
                            </tr>
                            <tr>
                                <td>Condensed Matter Physics I</td>
                                <td>3:0</td>
                            </tr>
                            <tr>
                                <td>Analog, Digital and Microprocessor Electronics</td>
                                <td>1:2</td>
                            </tr>
                            <tr>
                                <td>Experiments in Condensed Matter Physics</td>
                                <td>0:3</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>18</td>
                            </tr>
                        </tbody>
                     </table>
                </div>
            </div>
            <div className="itable2">
            <div className="table">
                <h3>THIRD SEMESTER</h3>
                     <table>
                        <tbody>
                            <tr>
                                <td>Nuclear and Particle Physics</td>
                                <td>3:0</td>
                            </tr>
                            <tr>
                                <td>Elective E1 (One)</td>
                                <td>3:0</td>
                            </tr>
                            <tr>
                                <td>Seminar course</td>
                                <td>1:0</td>
                            </tr>
                            <tr>
                                <td>Advanced Experiments in Condensed Matter Physics</td>
                                <td>0:4</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>11</td>
                            </tr>
                        </tbody>
                     </table>
                </div>
                <div className="table">
                <h3>FOURTH SEMESTER</h3>
                     <table>
                        <tbody>
                            <tr>
                                <td>Project I</td>
                                <td>6:0</td>
                            </tr>
                            <tr>
                                <td>Advanced Mathematical Methods in Physics</td>
                                <td>3:0</td>
                            </tr>
                            <tr>
                                <td>Elective E2 (One or Two)</td>
                                <td>3:0/6:0</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>12/15</td>
                            </tr>                            
                        </tbody>
                     </table>
                </div>
            </div>
            <div className="itable3">
                <div className="table">
                    <h3>SUMMER TERM AFTER FOURTH SEM</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Project II</td>
                                <td>6:0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="itable4">
            <div className="table">
                <h3>FIFTH SEMESTER</h3>
                     <table>
                        <tbody>
                            <tr>
                                <td>Elective E3 (One or None)</td>
                                <td>3:0/0</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>3/0</td>
                            </tr>
                        </tbody>
                     </table>
                </div>
                <div className="table">
                <h3>SIXTH SEMESTER</h3>
                     <table>
                        <tbody>
                            <tr>
                                <td>Elective E2 (One or None)</td>
                                <td>3:0/0</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>3/0</td>
                            </tr>                            
                        </tbody>
                     </table>
                </div>
            </div>
        <p>The minimum course credit requirement for the IISc Int. Ph.D. programme is 64. The total course credit requirement for CHEP is higher. The list above can go up to 75 
            credits (because of the extra electives).<br/><br/>

            Electives (some electives may not be offered every year):</p>
            <div className="elective-boxes">
  <div className="elective-box">
    <h3>Elective 1</h3>
    <ul>
      <li>Quantum Field Theory I (3:0)</li>
      <li>Advanced Statistical Physics (3:0)</li>
      <li>Condensed Matter Physics II (3:0)</li>
    </ul>
  </div>
  <div className="elective-box">
    <h3>Elective 2</h3>
    <ul>
      <li>Quantum Field Theory II (3:0)</li>
      <li>General Relativity (3:0)</li>
      <li>Quantum Statistical Field Theory (3:0)</li>
      <li>Quantum Computation (3:0)</li>
      <li>String Theory (3:0)</li>
      <li>Experimental High Energy Physics (3:0)</li>
    </ul>
  </div>
  <div className="elective-box">
    <h3>Elective 3</h3>
    <ul>
      <li>The Standard Model of Particle Physics (3:0)</li>
      <li>String Theory II (3:0)</li>
      <li>QCD and Collider Physics</li>
    </ul>
  </div>
</div>
      <p>All the electives may not be offered every year. The students have to choose the electives in consultation with their supervisors. The supervisor may 
      ask the students to take more electives than the list above, even after the Comprehensive Exam, as per his/her needs and interests.<br/>
      There is no provision for skipping courses, but a student may seek exemption from any course by passing a written test at the beginning of the semester.<br/><br/>

      The syllabi for the CHEP specific courses appear <Link to="/syllabi">here</Link>.<br/><br/>

      The project is spread over the fourth semester and the succeeding summer term. The student may continue to work on the same subject with the same guide for his/her Ph.D. 
      research. Each student will be assigned a Faculty Advisor from Physics/CHEP at the time of joining. For the first two years, however the student will belong to the Physical 
      Sciences Division at IISc and not to any particular department. At the end of two years, the student will be officially transferred to the department of his/her project guide. 
      By the end of the third semester, the students will have to find a research supervisor. If necessary, the student can have a co-supervisor from another department.<br/><br/>

      After completing two years at IISc (i.e. after completing the project), and before the end of the fifth semester, the students will have to undergo a Comprehensive Exam. The 
      exam will test whether the student has sufficient preparation to begin Ph.D. research. Those who fail the exam will be given another attempt after a few months. For the 
      students continuing on to Ph.D. research at IISc, there is no requirement of submitting an M.S. thesis. But if a student wants to leave IISc after completing the course work, 
      he/she will have to work on the M.S. thesis that may take up to a year. After completion of the thesis, he/she will be awarded the M.S. degree by IISc.</p>

        </div>
    );
    };
export default IntegratedPhD
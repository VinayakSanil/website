import React from "react";
import './phdresult.css'


const phdresult =() => {
    return(
           <div className="results">
            <h1 className="r-head">Ph.D. Admissions</h1>
            <hr className="r-line" />
            <p className="r-info">The Ph.D. admission interviews were held from May 22<sup>nd</sup> to May 26<sup>th</sup>, 2023. The application numbers of the Selected and Waitlist Candidates are 
            given below:</p><br/>
            <table className="result-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Selected</th>
            <th>Waitlist*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GN</td>
            <td>230103641<br />230104826</td>
            <td>230108734<br />230104055</td>
          </tr>
          <tr>
            <td>OBC(NCL)</td>
            <td>230104257</td>
            <td>230100201<br />230107009</td>
          </tr>
          <tr>
            <td>EWS</td>
            <td>230103732</td>
            <td>230100277</td>
          </tr>
          <tr>
            <td>SC</td>
            <td>230105104</td>
            <td>230104393</td>
          </tr>
          <tr>
            <td>KM</td>
            <td>230100719</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <br/>
      <p className="r-info">*The Waitlist is published in the order of priority for candidates who may be called if selected candidates do not join or decline within the deadline.</p>
    </div>
  );
};

export default phdresult;
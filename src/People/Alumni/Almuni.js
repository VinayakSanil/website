import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import FS from './Formerstudents.xlsx';
import './alumni.css';

function Alumni() {
  const [alumniData, setAlumniData] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(FS);
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      if (data.length > 0) {
        const csvHeaders = Object.keys(data[0]);
        setHeaders(csvHeaders);
        setAlumniData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>ALUMNI</h1>
      <hr />
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {alumniData.map((alumni, index) => (
            <tr key={index}>
              {Object.values(alumni).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Alumni
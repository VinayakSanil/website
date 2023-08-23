import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import './students.css';
import sreemaye from './SreemayeAditya.jpg';
import Adarsh from './AadarshSingh.jpeg';
import Abhijeet from './AbhijeetSingh.jpg';
import Abhishek from './AbhishekDubey.jpg';
import aditi from './AdithiUdupa.jpg';
import Ahamad from './AhmadullahZahed.jpg';
import akash from './AkashKumarSaha.jpg';
import alam from './AlamKhan.jpg';
import aman from './AmandipDe.jpg';
import camellia from './CamelliaBose.jpg';
import chaitanya from './ChaitanyaBhatt.jpg';
import debjyoti from './DB.jpg';
import debapriyo from './DebapriyoChowdhury.jpg';
import deepa from './Deepa.jpg';
import deepak from './DeepakKumar.jpg';
import faizan from './Faizanbhat.jpg';
import jyotirmoy from './JyotirmoyMukherjee.jpg';
import lokesh from './Lokesh.jpg';
import mani from './ManiSA.png';
import pingal from './PingalPratyush.JPEG';
import prabhat from './PrabhatSolanki.jpg';
import pradipta from './Pradiptapathak.jpg';
import prasant from './PrasanjitAich.PNG';
import ranjini from './Ranjini.jpg';
import rhitaja  from './Rhitaja.jpg';
import rinchen from './RinchenSherpa.jpg';
import sabarnya from './SabarnyaMitra.jpg';
import sagar from './SagarModak.jpg';
import sayan from './SayanBhakta.jpg';
import subasish from './ShubhashisMallik.jpg';
import souvik from './SouvikBera.jpg';
import srijan from './Srijan.jpg';
import sudeepan from './SudeepanDatta.jpeg';
import vaibhav from './Vaibhav.jpeg';
import vishal from './VishalRao.jpg';
import xl from './students.xlsx';

// Sample student images (replace with actual image URLs)
const studentImages = {
  "Sreemayee Aditya": sreemaye,
  "Prasanjit Aich" : prasant,
  "Mani Shankar Ailiga": mani,
  "Souvik Bera": souvik,
  "Sayan Bhakta": sayan,
  "Faizan Bhat": faizan,
  "Chaitanya Bhatt": chaitanya,
  "Debajyoti Biswas": debjyoti,
  "Camellia Bose": camellia,
  "Debapriyo Chowdhury": debapriyo,
  "Sudeepan Datta": sudeepan,
  "Amandip De": aman,
  "Abhishek Dubey": Abhishek,
  "Deep Jyoti Das": deepa,
  "Mohd Siddique Akbar Alam Khan":alam,
  "Deepak Kumar": deepak,
  "Srijan Kumar": srijan,
  "Shubhashis Mallik": subasish,
  "Sabarnya Mitra": sabarnya,
  "Sagar Modak": sagar,
  "Ranjini Mondol": ranjini,
  "Jyotirmoy Mukherjee": jyotirmoy,
  "Pradipta Sankar Pathak": pradipta,
  "Pingal Pratyush Nath": pingal,
  "Vishal Rao": vishal,
  "Akash Kumar Saha": akash,
  "Rhitaja Sengupta": rhitaja,
  "Rinchen Sherpa": rinchen,
  "Aadarsh Singh": Adarsh,
  "Abhijeet Singh": Abhijeet,
  "Prabhat Solanki": prabhat,
  "Adithi Udupa": aditi,
  "Vaibhav": vaibhav,
  "Venkata Lokesh Kumar Yandoti": lokesh,
  "Ahmadullah Zahed": Ahamad

  // Add more student images here...
};

function Students() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(xl); // Make sure students.xlsx is in the public folder or served from the backend
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      if (data.length > 0) {
        setStudentData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="s-head">Students</h1>
      <hr className="s-line" />
      <div className="student-list">
        {studentData.map((student, index) => (
          <div className="infocard" key={index}>
            <div className="img-container">
              <img src={studentImages[student.Name]} alt={student.Name} />
            </div>
            <h3>{student.Name}</h3>
            <p><strong>Research Interests:</strong> {student["Research Interests"]}</p>
            <p><strong>Program &amp; Joining Year:</strong> {student["Program(Joining Year)"]}</p>
            <p><strong>Office:</strong> {student.Office}</p>
            <p><strong>Email:</strong> {student["Email Id"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Students;
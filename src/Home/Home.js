import React, { useState, useEffect } from 'react';
import './Home.css';
import {Link } from 'react-router-dom';
import { useRef } from 'react';
import S5 from './S1.jpg';
import S2 from './S2.jpeg';
import S3 from './S3.png';
import S4 from './S4.png';
import S1 from './S5.JPG';
import G1 from './G1.jpg';
import G2 from './G2.jpg';
import G3 from './G3.jpg';
import G4 from './G4.jpg';
import G5 from './G5.jpg';
import G6 from './G6.jpg';
import G7 from './G7.JPG';
import G8 from './G8.JPG';

const imageList = [S1, S2, S3, S4, S5];
const galleryList = [G1, G2,G3,G4,G5,G6,G7,G8];



function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const newsList = [
    {
      news: 'Satish Dhawan Visiting Chair Professor at CHEP: Prof. Sougato Bose, UCL, 17 July 2023 to 22 Aug 2023',
      date: '07/2023'
    },
    {
      news: (<>List of students selected to the Ph.D. program can be found{' '}
      <Link to="/news/phdresult" className="h-links"><b>here</b></Link>.</>),
      date: '06/2023'
    },
    {
      news: 'Prof. B. Ananthanarayan will be serving in the Editorial Board for the Book series titled SpringerBriefs in Physics from July 1st 2023 to December 31st 2027',
      date: '06/2023'
    },
    {
      news: 'Prof. Rohini Godbole has been confered the D.Sc. (Honoris Causa) by IIT-Bombay',
      date: '03/2023'
    },
    {
      news: 'Prof. B. Ananthanarayan has been inducted into the India-CERN Task Force of The Department of Atomic Energy and Deparmtent of Science and Technology',
      date: '02/2023'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleAddToGoogleCalendar = (eventDetails) => {
    const [day, month, year] = eventDetails.date.split('/'); // Extract day, month, and year
    const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

    const [time] = eventDetails.time.split(' '); // Extract time and period (AM/PM)
    const [hours, minutes] = time.split(':'); // Extract hours and minutes
    const formattedTime = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;

    const startDate = new Date(`${formattedDate}T${formattedTime}`); // Start date and time
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // End date (1 hour after start)

    const startDateStr = startDate.toISOString().replace(/-|:|\.\d+/g, ''); // Format start date to UTC string without separators
    const endDateStr = endDate.toISOString().replace(/-|:|\.\d+/g, ''); // Format end date to UTC string without separators

    const googleCalendarURL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${encodeURIComponent(startDateStr + '/' + endDateStr)}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.venue)}`;
    window.open(googleCalendarURL, '_blank');
  };

  const seminarList = [
    {
      title: 'Some investigations into algebraic and geometric properties of Feynman integrals and related topics',
      speaker: 'Abhijit Buddhadev Das',
      date: '19/06/2023',
      time: '2:30 PM',
      venue: 'Lecture Hall 3 New Physical Science Building',
      description: 'Seminar by Abhijit Buddhadev Das'
    },
    {
      title: 'Renormalization Group Summation at High Orders and Implications to the determination of some Standard Model Parameters',
      speaker: 'Mohd Siddique Akbar Alam Khan',
      date: '20/06/2023',
      time: '2:30 PM',
      venue: 'Lecture Hall 3 New Physical Science Building',
      description: 'Seminar by Mohd Siddique Akbar Alam Khan'
    }
  ];
  const formRef = useRef(null);
  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    // Retrieve the form data
    const formData = new FormData(formRef.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const contact = formData.get('contact');
    const message = formData.get('message');
  
    // Prepare the email body
      const emailBody = `
      Name: ${name}
      Email: ${email}
      Contact: ${contact}
      Message: ${message}
  `;
  
    // Send the email (implementation depends on your backend/server logic)
    // You can use a service like Nodemailer or an API endpoint to send the email
  
    // Clear the form fields
    formRef.current.reset();
  };
  
  

  return (
    <div className="home-container">
      <div className="content-container">
        <div className="image-carousel">
          {imageList.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="description-column">
          <h2 className="about-us">About Us</h2>
          <p className="descriptionA">
          We, at the Centre for High Energy Physics at the Indian Institute of Science, are dedicated to making and spreading knowledge of fundamental physics through Humboldt's 
          ideal of uniting research and teaching. Our faculty consists of 14 highly accomplished physicists, whose diversity in expertise enables us to mount a multi-pronged attack 
          on Nature's deepest mysteries. They imbue their zeal for research and discoveries in students of all denominations, training and mentoring them so they may embark on 
          scientific adventures of their own. To do this at a world-class level while being equitable and inclusive of mentees from all socioeconomic backgrounds is of great priority 
          to us.
          <br/><Link to='/aboutus'>Read More...</Link>
          </p>
        </div>
        </div>
      <div className="description-container">
        <div className="description-column">
          <h2 className="research">Research</h2>
          <p className="descriptionR">
          Research at CHEP encompasses diverse areas. We meticulously examine the Standard Model's nuances, unveiling strong nuclear force behaviors in extreme conditions. 
          Pathologies of the Standard Model are explored, delving into physics beyond it. This involves phenomenological endeavors to uncover novel effects in ongoing and future 
          experiments—across accelerator, astroparticle, and cosmological domains. A significant effort targets unveiling dark matter, an enigmatic invisible substance shaping cosmic 
          structure. Experimentally, we analyze data from the CMS experiment at CERN's Large Hadron Collider. Mathematically, we explore quantum field theory aspects, innovating 
          techniques for Feynman integrals and holography. Our quantum gravity group addresses marrying gravity with quantum physics, illuminating the Standard Model's structure. 
          Additionally, we specialize in applying quantum theory techniques in diverse domains—condensed matter physics, quantum computing, and black hole entropy.
          </p>
        </div>
        <div className="description-column">
          <h2 className="programs">Programs</h2>
          <p className="descriptionp">
          We are actively engaged in numerous programmes, of which some highlights are:
          <ul>
            <li>Including the IISc Undergraduate programme, a highly developed teaching scheme training students at the level of research.</li>
            <li>An Integrated PhD programme jointly conducted with the <a href='http://physics.iisc.ac.in/' target='blank' rel='noopener-noreferrer'>Department of Physics</a> and 
            the <a href='http://iap.iisc.ac.in/' target='blank' rel='noopener-noreferrer'>Department of Instrumentation and Applied Physics</a>.</li>
            <li>A robust visitors programme for scholars from around India and the world.</li>
            <li>Hosting of topical conferences and workshops.</li>
            <li>Coloquiums and seminars with a diverse roster of external speakers.</li>
            <li>Frequent lectures at national and international schools, extensive travel to global centres of excellence for collaboration and research presentation.</li>
            <li>In-house initiatives: journal clubs and discussion fora.</li>
          </ul>
          </p>
        </div>
        <div className="seminar-list">
          <h2 className="title">Seminars</h2>
          <ul className="list">
            {seminarList.map((seminar, index) => (
              <li key={index}>
                <strong>Title:</strong> {seminar.title}<br />
                <strong>Speaker:</strong> {seminar.speaker}<br />
                <strong>Date:</strong> {seminar.date}<br />
                <strong>Time:</strong> {seminar.time}<br />
                <strong>Venue:</strong> {seminar.venue}
                <div className="buttons-container">
                  <button
                    className="calendar-button"
                    onClick={() =>
                      handleAddToGoogleCalendar({
                        title: seminar.title,
                        date: seminar.date,
                        time: seminar.time,
                        description: seminar.description,
                        venue: seminar.venue
                      })
                    }
                  >
                    Add to Google Calendar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="view-all-seminars">View all Seminars</p>
        </div>
      </div>
        <div className="news-container">
        <div className="news-box">
  <h2 className="news-title">NEWS AND UPDATES</h2>
    {newsList.map((item, index) => (
      <div key={index} className="news-content">
        {item.news}<br/>
        <span className='news-date'>{item.date}</span>
      </div>
    ))}
    <p className='all-news'><Link to="/news" className="h-links">All News</Link></p>
  </div>

  <div className="form-submission-box">
    <h2 className="form-title">Get in Touch</h2>
    <form ref={formRef} onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="contact">Contact:</label>
        <input type="tel" id="contact" name="contact" pattern="[0-9]{10}" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" maxLength="150" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</div>
<div className="gallery-container">
        <h2 className="gallery-title">GALLERY</h2>
        <div className="image-gallery">
          {galleryList.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="gallery-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
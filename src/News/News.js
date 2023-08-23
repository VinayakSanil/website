import React from 'react';
import './News.css';
import { Link } from 'react-router-dom';
const News = () => {
  return (
    <div className='news'>
      <h2 className="n-head">News</h2>
      <hr className="n-line" />

      <h3 className='n-subhead'>July, 2023</h3>
      <ul className='n-list'>
        <li>Satish Dhawan Visiting Chair Professor at CHEP: Prof. Sougato Bose, UCL, 17 July 2023 to 22 Aug 2023</li>
      </ul>
      <h3 className="n-subhead">June, 2023</h3>
      <ul className="n-list">
        <li>List of students selected to the Ph.D. program can be found <Link to="/news/phdresult">here</Link>.</li>
        <li>Prof. B. Ananthanarayan will be serving in the Editorial Board for the Book series titled SpringerBriefs in Physics from July 1st 2023 to December 31st 2027</li>
      </ul>
      <h3 className='n-subhead'>March, 2023</h3>
      <ul className='n-list'>
        <li>Prof. Rohini Godbole has been confered the D.Sc. (Honoris Causa) by IIT-Bombay</li>
      </ul>
      <h3 className='n-subhead'>February, 2023</h3>
      <ul className='n-list'>
        <li>Prof. B. Ananthanarayan has been inducted into the India-CERN Task Force of The Department of Atomic Energy and Deparmtent of Science and Technology</li>
        <li><a href='https://sites.google.com/view/frontiers-23/' target='blank' rel="noopener noreferrer" className='n-links'>Frontiers in Particle Physics 2023, Conference organized by CHEP, 10-12 March 2023.</a></li>
      </ul>
      <h3 className='n-subhead'>March, 2022</h3>
      <ul className='n-list'>
        <li>Prof. Ranjan Laha has been selected as an Infosys Young Investigator</li>
      </ul>
      <h3 className='n-subhead'>December, 2021</h3>
      <ul className='n-list'>
        <li>Prof. Justin David's editorship at EPJC has been renewed for another 3 years.</li>
        <li>Prof. B. Ananthanarayan's editorship at EPJST has been renewed for another 3 years.</li>
        <li>Prof. Ranjan Laha selected as member of NASI.</li>
      </ul>
      <h3 className='n-subhead'>November, 2021</h3>
      <ul className='n-list'>
        <li>Prof. Rohini Godbole conferred Doctor of Science (honoris causa) by IIT-Kanpur.</li>
        <li>Prof. B. Ananthanarayan pleased to announce an exciting new collection on the Accelerating Universe co-edited with Subhendra Mohanty of Physical Research Laboratory, 
            Ahmedabad <a href='https://epjst.epj.org/epjst-news/2214-epjst-highlight-examining-the-accelerating-universe' target='blank' rel="noopener noreferrer" className='n-links'>Link</a>.</li>
      </ul>
      <h3 className='n-subhead'>September, 2021</h3>
      <ul className='n-list'>
        <li>Prof. Rohini Godbole receives the Goyal prize in Physics of the Kurukshetra University for her contribution to Theoretical High Energy Physics.</li>
      </ul>
      <h3 className='n-subhead'>August, 2021</h3>
      <ul className='n-list'>
        <li>Prof. Sachindeo Vaidya has become the member of the Editorial board of International Journal of Modern Physics A and Modern Physics Letters A.</li>
        <li>Prof. Apoorva Patel's work on "A Software Simulator for Noisy Quantum Circuits" has been expanded, and launched nationally by MeitY as a "Quantum Computer Simulator Toolkit"</li>
      </ul>
      <h3 className='n-subhead'>July, 2021</h3>
      <ul className='n-list'>
        <li>Prof. Dptiman Sen receives the J.C. Bose fellowship from SERB for the period 2021-2026.</li>
      </ul>
      <h3 className='n-subhead'>June, 2021</h3>
      <ul className='n-list'>
        <li>Prof. Rohini Godbole wins the Lifetime Achievement Award of the Karnataka Science and Technology Academy, Government of Karnataka.</li>
      </ul>
      <h3 className='n-subhead'>January, 2021</h3>
      <ul className='n-list'>
        <li>Prof. Rohini Godbole has been awarded the `Ordre National du Merite'.</li>
      </ul>
      <h3 className='n-subhead'>December, 2020</h3>
      <ul className='n-list'>
        <li>Prof. Aninda Sinha has been selected as an honoree on the Asian Scientist 100 list (2020 edition).</li>
      </ul>
      <h3 className='n-subhead'>September, 2020</h3>
      <ul className='n-list'>
        <li>Prof. B. Anathanarayan is a Member of the Strategic Scientific Advisory Board of Avesthagen Limited and The AVESTHAGENOME Project.</li>
      </ul>
      <h3 className='n-subhead'>October, 2019</h3>
      <ul className='n-list'>
        <li>Prof. Rohini Godbole receives the R.D. Birla Memorial Award of the Indian Physics Association.</li>
        <li>Prof. Justin David has been elected a fellow of the National Academy of Sciences, India.</li>
      </ul>
      <h3 className='n-subhead'>September, 2019</h3>
      <ul className='n-list'>
        <li>Prof. Aninda Sinha receives the Shanti Swarup Bhatnagar Prize for the year 2019 in Physical Sciences.</li>
      </ul>
      <h3 className='n-subhead'>March, 2019</h3>
      <ul className='n-list'>
        <li>Apratim Kaviraj has been awarded the Kumari L A Meera Memorial medal for best thesis in Theoretical Physics, IISc, 2018.</li>
        <li>Prof. B. Ananthanarayan has become an editor for the European Physical Journal - Special Topics (EPJ ST).</li>
      </ul>
      <h3 className='n-subhead'>February, 2019</h3>
      <ul className='n-list'>
        <li>CHEP In-House Symposium (1st and 2nd February, 2019).</li>
      </ul>
      <h3 className='n-subhead'>January, 2019</h3>
      <ul className='n-list'>
        <li>Prof. Justin R. David has been elected to the Fellowship of the Indian Academy of Sciences, effective from January 01, 2019.</li>
        <li>Prof. Rohini Godbole has become a member of Council of the Indian Academy of Sciences, 2019-2021.</li>
        <li>Prof. Rohini Godbole is in the scientific advisory committee of the Dutch research school of theoretical physics(DRSTP).</li>
        <li>Prof. Rohini Godbole has become a member of Council of the Indian Academy of Sciences, 2019-2021.</li>
      </ul>
      <h3 className='n-subhead'>November, 2018</h3>
      <ul className='n-list'>
        <li>Apratim Kaviraj has got the IPA Rahul Basu Memorial Award for Best Thesis in HEP for the period 2016-18.</li>
        <li>Prof. Justin David is an Associate Editor of `The European Physical Journal C'.</li>
      </ul> 
      <h3 className='n-subhead'>September, 2019</h3>
      <ul className='n-list'>
        <li>Prof. Rohini Godbole is Van der Waals Professor at University of Amsterdam (September -December 2018).</li>
        <li>Prof. Rohini Godbole gets the 3rd term of the J.C. Bose fellowship of the DST.</li>
      </ul>
      <h3 className='n-subhead'>August, 2019</h3>
      <ul className='n-list'>
        <li>Prof. Justin David is on the Editorial Board of `Current Science'.</li>
      </ul>
      <h3 className='n-subhead'>July, 2019</h3>
      <ul className='n-list'>
        <li>Aninda Sinha is now an editorial board member for New Journal of Physics (2018).</li>
      </ul>
      <h3 className='n-subhead'>May, 2019</h3>
      <ul className='n-list'>
        <li>Is SUSY still the best bunker to hide in, in light of experimental data?, 10-12 May 2018.</li>
      </ul>
      <h3 className='n-subhead'>February, 2019</h3>
      <ul className='n-list'>
        <li>CHEP In-House Symposium (16th and 17th February, 2018).</li>
      </ul>
    </div>
  );
};

export default News;

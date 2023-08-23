import React from 'react';
import {Route } from 'react-router-dom';
import HomePage from './Home/Home';
import Admissions from './Academics/Admissions/Admissions';
import AP from './Academics/Academic Programs/AP';
import Research from './Academics/Academic Programs/Research';
import PhD from './Academics/Academic Programs/PhD'
import IPhD from './Academics/Academic Programs/Iphd'
import Syllabi from './Academics/Academic Programs/syllabi';
import Faculty from './People/Faculty/Faculty';
import News from './News/News';
import Preults from './News/phdresult';
import conference from './Events/Conference/conference';
import Committee from './Committee/Committee';
import Alumni from './People/Alumni/Almuni';
import Anant from './People/Faculty/Faculty Personal/anant';
import Aninda from './People/Faculty/Faculty Personal/aninda';
import Apoorva from './People/Faculty/Faculty Personal/apoorva';
import Biplob from './People/Faculty/Faculty Personal/biplob';
import Chethan from './People/Faculty/Faculty Personal/chethan';
import Diptiman from './People/Faculty/Faculty Personal/diptiman';
import Gaurav from './People/Faculty/Faculty Personal/gaurav';
import Justin from './People/Faculty/Faculty Personal/justin';
import Jyothsna from './People/Faculty/Faculty Personal/jyothsna';
import Nirmal from './People/Faculty/Faculty Personal/nirmal';
import Prasad from './People/Faculty/Faculty Personal/prasad';
import Ranjan from './People/Faculty/Faculty Personal/ranjan';
import Rohini from './People/Faculty/Faculty Personal/rohini';
import Romesh from './People/Faculty/Faculty Personal/romesh';
import Sachin from './People/Faculty/Faculty Personal/sachin';
import Sudhir from './People/Faculty/Faculty Personal/sudhir';
import students from './People/Students/students';
import aboutus from './Home/aboutus';


function Routes() {
  return (
    <Routes>
      <Route path="/" component={HomePage} />
      <Route path="/admissions" component={Admissions} />
      <Route path="/academic-programs" component={AP} />
      <Route path="/academic-programs/research" component={Research} />
      <Route path="/academic-programs/phd-programme" component={PhD} />
      <Route path='/academic-programs/integrated-phd-programme' component={IPhD} />
      <Route path="/syllabi" component={Syllabi} />
      <Route path="/faculty" component={Faculty} /> 
      <Route path="/news" component={News} />
      <Route path="/news/phdresult" component={Preults} />
      <Route path="/conference" component={conference} />
      <Route path="/committee" component={Committee} />
      <Route path='/alumni' component={Alumni} />
      <Route path='/professor/anant' component={Anant} />
      <Route path='/professor/aninda' component={Aninda} />
      <Route path='/professor/apoorva' component={Apoorva} />
      <Route path='/professor/biplob' component={Biplob} />
      <Route path='/professor/chethan' component={Chethan} />
      <Route path='/professor/diptiman' component={Diptiman} />
      <Route path='/professor/gaurav' component={Gaurav} />
      <Route path='/professor/justin' component={Justin} />
      <Route path='/professor/jyothsna' component={Jyothsna} />
      <Route path='/professor/nirmal' component={Nirmal} />
      <Route path='/professor/ranjan' component={Ranjan} />
      <Route path='/professor/rohini' component={Rohini} />
      <Route path='/professor/romesh' component={Romesh} />
      <Route path='/professor/sachin' component={Sachin} />
      <Route path='/professor/sudhir' component={Sudhir} />
      <Route path='/professor/prasad' component={Prasad} />
      <Route path="/students" component={students} />
      <Route path='/aboutus' component={aboutus} />
    </Routes>
  );
}

export default Routes;

import React from 'react';
import './AP.css'

const Syllabi = () => {
return (
    <div className='sy-cont'>
        <h1 className='sy-head'>Syllabi for CHEP Specific Courses</h1>
        <hr className="ip-line"/>
        <p className='sy-content'>
            <div className='course-box'>
            <h3 className='course-name'>(a) HE 215 3:0 (AUG): <b>Nuclear and Particle Physics</b><br/></h3>
            Radioactive decay, subnuclear particles. Binding energies. Nuclear forces, pion exchange, Yukawa potential. Isospin, neutron and proton. Deuteron. Shell model, 
            magic numbers. Nuclear transitions, selection rules. Liquid drop model, collective excitations. Nuclear fission and fusion. Beta decay. Neutrinos. Fermi theory, 
            parity violation, V-A theory. Mesons and baryons. Lifetimes and decay processes. Discrete symmetries, C, P, T and G. Weak interaction transition rules. Strangeness, 
            K mesons and hyperons. Hadron multiplets, composition of mesons and baryons. Quark model and quantum chromodynamics.<br/><br/>
            <b>References:<br/></b>
            Povh B., Rith K., Scholz C. and Zetsche F., Particles and Nuclei: An Introduction to Physical Concepts (Second edition), Springer, 1999.<br/>
            Krane K.S., Introductory Nuclear Physics, John Wiley & Sons, 1988.<br/>
            Griffiths D., Introduction to Elementary Particles John Wiley & Sons, 1987.<br/>
            Perkins D.H., Introduction to High Energy Physics (Third edition), Addison-Wesley, 1987.<br/><br/>
            </div>
            <div className='course-box'>
            <h3 className='course-name'>(b) HE 316 3:0 (JAN): <b>Advanced Mathematical Methods in Physics</b></h3>
            Symmetries and group theory. Finite and continuous groups with examples. Group operations and representations. Homomorphism, isomorphism and automorphism. Reducibility, 
            equivalence, Schur's lemma. Permutation groups, Young diagrams. Lie groups and Lie algebras. SU(2), SU(3) and applications. Roots and weights. Dynkin diagrams. 
            Classification of compact simple Lie algebras. Exceptional groups. Elements of topology and homotopy.<br/><br/>
            <b>References:</b><br/>
            Georgi H., Lie Algebras in Particle Physics (Second edition), Perseus Books, 1999.<br/>
            Mukhi S. and Mukunda N., Introduction to Topology, Differential Geometry and Group Theory for Physicists, Wiley Eastern, 1990.<br/>
            Hamermesh M., Group Theory and its Applications to Physical Problems, Addison-Wesley, 1962.<br/><br/>
            </div>
            <div className='course-box'>
            <h3 className='course-name'>(c) HE 379: <b>Physics Beyond Standard Model</b></h3>
            Higgs discovery and its implications, effective field theories, supersymmetry and supergravity, extra dimensions and its variants, composite Higgs models, 
            Cosmological solutions like relaxions and its variants, neutrino masses and GUTS, axions, and modern probes of new physics.<br/><br/>
            <b>Prerequisites:</b>All QFT courses , Standard Model and preferably GTR.
            </div>
            <div className='course-box'>
            <h3 className='course-name'>(d) HE 384 3:0 (AUG): <b>Quantum Computation</b></h3>
            Foundations of quantum theory. States, observables, measurement and unitary evolution. Qubits versus classical bits, spin-half systems and photon polarisations. 
            Pure and mixed states, density matrices. Extension to positive operator valued measures and superoperators. Decoherence and master equations. Quantum entanglement and 
            Bell's theorems. Introduction to classical information theory and generalisation to quantum information. Dense coding, teleportation and quantum cryptography. Turing 
            machines and computational complexity. Reversible computation. Universal quantum logic gates and circuits. Quantum algorithms: database search, FFT and prime 
            factorisation. Quantum error correction and fault tolerant computation. Physical implementations of quantum computers.<br/><br/>
            <b>References:</b><br/>
            Nielsen M.A. and Chuang I.L., Quantum Computation and Quantum Information, Cambridge University Press, 2000.<br/>
            Preskill J., Lecture Notes for the Course on Quantum Computation,<br/>
            <a href="http://www.theory.caltech.edu/people/preskill/ph229" target="_blank" rel="noopener noreferrer">http://www.theory.caltech.edu/people/preskill/ph229</a><br/>
            Peres A., Quantum Theory: Concepts and Methods, Kluwer Academic, 1993.<br/><br/>
            </div>
            <div className='course-box'>
            <h3 className='course-name'>(e) HE 386 3:0 (JAN): <b>Experimental High Energy Physics</b></h3>
            Particles and interactions in the standard model. Strong, weak and electromagnetic interactions. Kinematics of particle interactions. Concepts of accelerators, linear 
            and circular Accelerators. Introduction to particle detectors, interaction of particles with matter. Gaseous detectors, scintillator detectors, solid state detector. 
            Readout electronics, vertex detection and tracking. Calorimetry for electrons, photons, charged hadrons and neutrons. Particle identification and detector systems. 
            Experimental tests of the building blocks of matter and their fundamental interactions. Examples of QCD tests, top quark, Z and W bosons, Higgs boson, new particle 
            searches. Review of some particle physics experiments, concepts of collider physics, basic phenomenology of a hard scattering process. Data analysis techniques in 
            collider physics, statistical analysis in particle physics.<br/><br/>
            <b>References:</b><br/>
            Perkins D.H., Introduction to High Energy Physics (Third edition), Addison-Wesley, 1987.<br/>
            Leo W.R., Techniques for Nuclear and Particle Physics Experiments: A How to Approach (Second revised edition) Narosa/Springer International, 2012.<br/>
            Knoll G.F., Radiation Detection and Measurement (Fourth edition), Wiley, 2010.<br/>
            Grupen C. and Schwartz B., Particle Detectors (Second edition), Cambridge University Press, 2011.<br/>
            Fernow R.C., Introduction to Experimental Particle Physics Cambridge University Press, 1986.<br/><br/>
            </div>
            <div className='course-box'>
            <h3 className='course-name'>(f) HE 388 3:0 (JAN): <b>QCD and Collider Physics</b><br/>(Prerequisites: Quantum Field Theory I and The Standard Model of Particle Physics)</h3>
            Review of perturbative QCD. Monte Carlo simulations and event generators. Jet physics, event shape variables. Tests of the structure of QCD, jet substructure analysis. 
            Introduction to lepton and hadron collider basics. Higgs and heavy quark production at the LHC, search for new physics at the LHC. Supersymmetry, extra dimensions and dark matter.
             Statistical analysis and limit setting.<br/><br/>
            <b>References:</b><br/>
            Ellis R., Stirling W. and Webber B., QCD and Collider Physics, (Cambridge Monographs on Particle Physics, Nuclear Physics and Cosmology) Cambridge University Press, 1996.<br/>
            Plehn T., Lectures on LHC Physics, Springer, 2012 [arXiv:0910.4182v6].<br/>
            Barger V.D. and Phillips R.J.N., Collider Physics (updated edition), CRC Press, 1996.<br/>
            Cowan G., Statistical Data Analysis Oxford Science Publications, 1998.<br/>
            </div>
            <div className='course-box'>
            <h3 className='course-name'>(g) HE 389 3:0 (AUG): <b>AdS/CFT</b> -or- <b>Quantum Gravity in Anti-de Sitter Space</b><br/>(Prerequisites: HE 398 General Relativity)</h3>
            The role of boundaries in quantum gravity: black holes and holography. CFT and AdS preliminaries. Large-N gauge theories. Large-N CFT as AdS quantum gravity. The AdS/CFT 
            dictionary: Euclidean and Lorentzian. Black holes in AdS: deconfinement vs Hawking-Page. What makes the correspondence compelling. The spectrum of AdS/CFT, String theory origins.<br/><br/>
            <b>References:</b><br/>
            Maldacena J. M. et al: Large N field theories, string theory and gravity: Phys. Rept. 323 (2000) 183-386~<br/>
            </div>
            <div className='course-box'>
            <h3 className='course-name'>(h) HE 391 3:0 (AUG): Quantum Mechanics III</h3>
            Path integrals in quantum mechanics. Action and evolution kernels. Free particle and harmonic oscillator solutions. Perturbation theory, transition elements. Fermions 
            and Grassmann integrals. Euclidean time formulation, statistical mechanics at finite temperature. Relativistic quantum mechanics, Klein-Gordon and Dirac equations. 
            Antiparticles and hole theory. Klein paradox. Nonrelativistic reduction. Coulomb problem solution. Symmetries P, C and T, spin-statistics theorem. Lorentz and Poincare 
            groups. Wigner classification of single particle states. Weyl and Majorana fermions. Modern topics such as graphene, Kubo formulae. Introduction to conformal symmetry 
            and supersymmetry.<br/><br/>
            <b>References:</b>
            Feynman R.P. and Hibbs A.R., Quantum Mechanics and Path Integrals, McGraw-Hill, 1965.<br/>
            Bjorken J.D. and Drell S., Relativistic Quantum Mechanics, McGraw-Hill, 1965.<br/>
            Greiner W., Relativistic Quantum Mechanics: Wave Equations (Third edition), Springer, 1990.<br/>
            Peskin M.E. and Schroeder D.V., An Introduction to Quantum Field Theory, Addison Wesley, 1995.<br/>
            </div>
            <div className='course-box'>
            <h3 className='course-name'>(i) HE 392 3:0 (JAN): String Theory<br/>(Prerequisite: Quantum Field Theory I)</h3>
            Bosonic Strings: closed and open, oriented and unoriented. Light cone quantization and spectrum. Polyakov path integral. BRST symmetry. Conformal field theory. 
            Modular invariance. Boundary states. Classical and quantum superstrings. Spin structures and GSO projection. Type II strings. D-branes and Type I strings. Torus 
            compactification and Heterotic strings. Current algebras and lattices. Bosonization. N=1,2 superconformal field theory.<br/><br/>
            <b>References:</b>
            Green M.B., Schwarz J.H. and Witten E., Superstring Theory, Vol. I and II, Cambridge University Press, 1989.<br/>
            Polchinski J., String Theory, Vol I and II, Cambridge University Press, 2005.<br/>
            Kiritsis E., String Theory in a Nutshell, Princeton University Press, 2007.<br/>
            </div>
            <div className='course-box'>
            <h3 className='course-name'>(j) HE 393 3:0 (AUG): String Theory II<br/>(Prerequisite: String Theory)</h3>
            Continuation of torus reductions and heterotic strings. D-branes again, this time via T-duality. Superconformal field theories. Picture changing. Spacetime supersymmetry. 
            Effective supergravity. D-brane actions. Orbifolds and orientifolds. Calabi-Yau compactification and connections to phenomenology. Green-Schwarz mechanism. BPS states and 
            p-branes. Web of string dualities. M-theory and F-theory. Black Holes and AdS/CFT correspondence.<br/><br/>
            <b>References:</b><br/>
            Green M.B., Schwarz J.H. and Witten E., Superstring Theory, Vol. I and II, Cambridge University Press, 1989.<br/>
            Polchinski J., String Theory, Vol I and II, Cambridge University Press, 2005.<br/>
            Kiritsis E., String Theory in a Nutshell, Princeton University Press, 2007.<br/>
            Blumhagen R., Lust D. and Theisen S., Basic Concepts of String Theory, Springer, 2013.<br/>
            </div>
            <div className='course-box'>
            <h3 className='course-name'>(k) HE 394 3:0 : Cosmology for Theorists</h3>
            FLRW metric, redshift and cosmography, measuring distances, concordance LCDM model - dark matter/energy, thermal history, nucleosynthesis, inflation, perturbation theory, 
            evolution of perturbations and structure, CMB anisotropies, tension(s) between early and late universe.<br/><br/>
            <b>References:</b><br/>
            Mukhanov - "Physical Foundations of Cosmology",<br/>
            Weinberg - "Cosmology".<br/>
            </div>
            <div className='course-box'>
            <h3 className='course-name'>(l) HE 395 3:0 (AUG): Quantum Field Theory I</h3>
            Scalar, spinor and vector fields. Canonical quantisation, propagators. Symmetries and Noether theorem. Path integrals for bosonic and fermionic fields, generating 
            functionals. Feynman diagrams. S-matrix, LSZ reduction formula. Interacting scalar and Yukawa theories. Covariant derivatives and gauge theories. Quantum electrodynamics. 
            Gauge invariance, massless photons, Ward identity. Elementary processes. Scattering cross-sections, optical theorem, decay rates. Loop diagrams, power counting, 
            divergences. Renormalization, fixed point classification. One loop calculations in QED. Callan-Symanzik equations, beta functions. Effective field theory.<br/><br/>
            <b>References:</b><br/>
            Zee A., Quantum Field Theory in a Nutshell (Second edition), Princeton University Press, 2010.<br/>
            Srednicki M., Quantum Field Theory, Cambridge University Press, 2007.<br/>
            Ryder L.H., Quantum Field Theory (Second edition), Cambridge University Press, 1996.<br/>
            Ramond P., Field Theory: A Modern Primer (Second edition), Levant Books, 2007.<br/>
            </div>
            <div className='course-box'>
            <h3 className='course-name'>(m) HE 396 3:0 (JAN): Quantum Field Theory II<br/>(Prerequisite: Quantum Field Theory I)</h3>
            Abelian gauge theories. QED processes and symmetries. Loop diagrams and 1-loop renormalization. Lamb shift and anomalous magnetic moments. Nonabelian gauge theories. 
            Faddeev-Popov ghosts. BRST quantization. QCD beta function, asymptotic freedom. Spinor helicity formalism for gauge theories. Composite operators, operator product 
            expansion. Anomalies. Lattice gauge theory, strong coupling expansion. Confinement and chiral symmetry breaking.<br/><br/>
            <b>References:</b><br/>
            Schwartz M.D., Quantum field theory and the standard model, Cambridge University Press, 2014.<br/>
            Srednicki M., Quantum Field Theory, Cambridge University Press, 2007.<br/>
            Peskin M.E. and Schroeder D.V., An Introduction to Quantum Field Theory, Addison Wesley, 1995.<br/>
            Weinberg S., The Quantum Theory of Fields, Vol. I: Foundations, Vol. II: Modern Applications, Cambridge University Press, 1996.<br/>
            </div>
            <div className='course-box'>
            <h3 className='course-name'>(n) HE 397 3:0 (AUG): The Standard Model of Particle Physics<br/>(Prerequisites: Quantum Field Theory I and II)</h3>
            Weak interactions before gauge theory. V-A theory, massive vector bosons. Spontaneous symmetry breaking, Goldstone bosons, Higgs mechanism. Charged and neutral currents, 
            gauge symmetries and SU(2)xU(1) Lagrangian. Flavour mixing, GIM mechanism. CP violation, K/B systems. Neutrinos. Electroweak precision measurements. Deep inelastic 
            scattering, parton model. Chiral Lagrangians and heavy quark effective field theories.<br/><br/>
            <b>References:</b><br/>
            Georgi H., Weak Interactions and Modern Particle Theory, Benjamin/Cummings, 1984.<br/>
            Halzen F. and Martin A.D., Quarks and Leptons: An Introductory Course in Modern Particle Physics, John Wiley & Sons, 1984.<br/>
            Pokorski S., Gauge Field Theories (Second edition), Cambridge University Press, 2000.<br/>
            Peskin M.E. and Schroeder D.V., An Introduction to Quantum Field Theory, Addison Wesley, 1995.<br/>
            </div>
            <div className='course-box'>
            <h3 className='course-name'>(o) HE 398 3:0 (JAN): General Relativity</h3>
            Review of tensor calculus and properties of the Riemann tensor. Killing vectors, symmetric spaces. Geodesics. Equivalence principle and its applications. Scalars, 
            fermions and gauge fields in curved space-time. Einstein's equations and black hole solutions. Schwarzschild solution, Motion of a particle in the Schwarzschild metric.
            Kruskal extension and Penrose diagrams. Reissner-Nordstrom solution, Kerr solution. Laws of black hole physics. Gravitational collapse. Oppenheimer-Volkoff and 
            Oppenheimer-Snyder solutions, Chandrasekhar limit. Cosmological models, Friedmann-Robertson-Walker metric. Open, closed and flat universes. Introduction to quantizing 
            fields in curved spaces and Hawking radiation.<br/><br/>
            <b>References:</b><br/>
            Landau L.D. and Lifshitz E.M., The Classical Theory of Fields, Pergamon Press, 1975.<br/>
            Weinberg S., Gravitation and Cosmology: Principles and Applications of the General Theory of Relativity, John Wiley & Sons, 1972.<br/>
            Wald R.M., General Relativity, Overseas Press, 2006.<br/>
            't Hooft G., Inroduction to General Relativity, Introduction to the theory of Black Holes, <a href="http://www.phys.uu.nl/~thooft/" target="_blank" rel="noopener noreferrer">http://www.phys.uu.nl/~thooft/</a><br/>
            </div>
        </p>
    </div>
);
};
export default Syllabi
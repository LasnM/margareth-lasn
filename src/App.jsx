import SectionButton from './components/sectionButtons';
import WorkExperience from './components/workExperience';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';
import Volunteering from './components/volunteering';
import About from './components/about';
import ContactMeButton from './components/contactMeButton';
import ContactForm from './components/contactForm';
import {Routes, Route} from 'react-router-dom';

function MainContent(){
  return (
    <>
      <div className="content-buttons">
        <SectionButton/>
      </div>
      <div className="container content-section">
        <Routes>
          <Route path="/" element={<WorkExperience />} />
          <Route path="/workexperience" element={<WorkExperience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/volunteering" element={<Volunteering />} />
        </Routes>
      </div>
    </>
  );
  }

function App() {
    return (
      <>
        <ContactMeButton />
        <About />
        <MainContent />
        <ContactForm />
      </>
    );
  }
  
  export default App;
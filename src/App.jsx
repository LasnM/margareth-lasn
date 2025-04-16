import React, {useState} from 'react';
import SectionButton from './components/sectionButtons';
import WorkExperience from './components/workExperience';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';
import Volunteering from './components/volunteering';
import About from './components/about';
import ContactMeButton from './components/contactMeButton';
import ContactForm from './components/contactForm';

function MainContent(){
    const [activeSection, setActiveSection] = useState('work experience');
  
    const renderContent = () => {
      if (activeSection === 'work experience') return <WorkExperience />
      else if (activeSection === 'education') return <Education />
      else if (activeSection === 'skills') return <Skills />
      else if (activeSection === 'projects') return <Projects />
      else if (activeSection === 'volunteering') return <Volunteering />
    }
  
    return (
      <>
        <div class='content-buttons'>
          <SectionButton activeButton={activeSection} onButtonClick={setActiveSection} />
        </div>
  
        <div class="container content-section">
          {renderContent()}
        </div>
      </>
    )
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
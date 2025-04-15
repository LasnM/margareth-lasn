//for design later on fix the porportions so everything is aligned correctly
//even by pixels not just by eye
import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import SectionButton from './components/sectionButtons';
import WorkExperience from './components/workExperience';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';
import Volunteering from './components/volunteering';
import About from './components/about';
import ContactMeButton from './components/contactMeButton';
import ContactForm from './components/contactForm';
import './index.css';

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

      <div class="content-section">
        {renderContent()}
      </div>
    </>
  )
}

const rootHeader = createRoot(document.getElementById('header'));
rootHeader.render(<ContactMeButton />);

const rootAboutMe = createRoot(document.getElementById('aboutMe'));
rootAboutMe.render(<About />);

const rootMainContent = createRoot(document.getElementById('resumeContent'));
rootMainContent.render(<MainContent />)

const rootContactForm = createRoot(document.getElementById('contactForm'));
rootContactForm.render(<ContactForm />);



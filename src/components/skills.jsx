import '../styles/content.scss';
import {frontendSkills, backendSkills} from '../data/skillsData';

export default function Skills(){
    

    return (
        <div id='skillset'>
            <div class="card-content-section">
            <h5>FRONTEND</h5>
            <div>COMPETENT</div>
            {frontendSkills.map((skill, index) => (
                skill.level === 'COMPETENT' ? (<div className='skill'>
                    <img src={skill.imageLink} alt={skill.altText}></img>
                    <div className='skill-name'>{skill.title}</div>
                </div>) : ''
            ))}
            <div>ENTRY-LEVEL</div>
            {frontendSkills.map((skill, index) => (
                skill.level === 'ENTRY-LEVEL' ? (<div className='skill'>
                    <img src={skill.imageLink} alt={skill.altText}></img>
                    <div className='skill-name'>{skill.title}</div>
                </div>) : ''
            ))}
            </div>
            <div class='card-contemt-section'>
                <h5>BACKEND</h5>
                <div>ENTRY-LEVEL</div>
                {backendSkills.map((skill, index) => (
                skill.level === 'ENTRY-LEVEL' ? (<div className='skill'>
                    <img src={skill.imageLink} alt={skill.altText}></img>
                    <div className='skill-name'>{skill.title}</div>
                </div>) : ''
            ))}
            </div>
        </div>
    );
}
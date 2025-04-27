import '../styles/content.scss';
import frontendSkills from '../data/frontendSkillsData';
import backendSkills from '../data/backendSkillsData';

export default function Skills(){
    

    return (
        <div className='flex flex-wrap justify-center'>
            <div className="card-content-section experience-paragraph">
                <h5 className='flex justify-center'>FRONTEND</h5>
                <div className='level flex justify-center'>COMPETENT</div>
                <div className='skillset'>
                    {frontendSkills.map((skill, index) => (
                        skill.level === 'COMPETENT' ? (<div className='skills flex flex-col items-center' id={skill.title}>
                            <img src={skill.imageLink} alt={skill.altText} className='logos'></img>
                            <div className='skill-name'>{skill.title}</div>
                        </div>) : ''
                    ))}
                </div>
                <div className='level flex justify-center'>ENTRY-LEVEL</div>
                <div className="skillset">
                    {frontendSkills.map((skill, index) => (
                        skill.level === 'ENTRY-LEVEL' ? (<div className='skills flex flex-col items-center'>
                        <img src={skill.imageLink} alt={skill.altText} className='logos'></img>
                        <div className='skill-name'>{skill.title}</div>
                        </div>) : ''
                    ))}
                </div>
            </div>
            <div className='card-content-section experience-paragraph'>
                <h5 className='flex justify-center'>BACKEND</h5>
                <div className='level flex justify-center'>ENTRY-LEVEL</div>
                <div className="skillset">
                {backendSkills.map((skill, index) => (
                skill.level === 'ENTRY-LEVEL' ? (<div className='skills flex flex-col items-center'>
                    <img src={skill.imageLink} alt={skill.altText} className='logos'></img>
                    <div className='skill-name'>{skill.title}</div>
                </div>) : ''
            ))}
                </div>
            </div>
        </div>
    );
}
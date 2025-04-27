import '../styles/content.scss';
import projects from '../data/projectsData';
import Button from './button';

export default function Projects(){
    return (
        <div className='flex flex-wrap justify-center'>
            {projects.map((project, index) => (
                <div className='container experience-paragraph project-section flex flex-col justify-between'>
                    <div className="flex flex-col">
                        <h5 className='flex justify-center'>{project.title}</h5>
                        {project.image != null ? <img src='./images/software-testing-lab.png' alt={project.title}
                        className='rounded border border-black'></img>
                        : null}
                        <div className='m-2 flex text-justify'>
                            {project.description}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button
                        title={project.buttonText}
                        to={project.link}
                        target='_blank'
                        ></Button>
                    </div>
                </div>
            ))}
        </div>

    );
}
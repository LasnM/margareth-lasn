import {useLocation} from 'react-router-dom';
import Button from './button';
import '../styles/sectionButtons.scss';

function Buttons(){
    const location = useLocation();
    const buttonsTitles = ['work experience', 'education', 'skills', 'projects', 'volunteering'];
    return(
        <div class='section-buttons flex justify-center'>
            {buttonsTitles.map(title => (
                <Button
                to={`/${title.replaceAll(' ', '')}`}
                key={title}
                isSelected={location.pathname === `/${title.replaceAll(' ', '')}` || (`/${title.replaceAll(' ', '')}` === '/workexperience' && location.pathname === '/')}
                title={title}
                id={title}>
                </Button>
            ))}
        </div>
    );
}

export default Buttons;
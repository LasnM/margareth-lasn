import Button from './button';
import '../styles/sectionButtons.scss';

function Buttons({activeButton, onButtonClick}){
    const buttonsTitles = ['work experience', 'education', 'skills', 'projects', 'volunteering'];
    return(
        <div class='section-buttons flex justify-center'>
            {buttonsTitles.map(title => (
                <Button
                key={title}
                isSelected={activeButton === title}
                onClick={() => onButtonClick(title)}
                title={title}
                id={title}>
                </Button>
            ))}
        </div>
    );
}

export default Buttons;
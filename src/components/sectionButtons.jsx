import Button from './button';

function Buttons({activeButton, onButtonClick}){
    const buttonsTitles = ['work experience', 'education', 'skills', 'projects', 'volunteering'];
    return(
        <div class='sectionButtons'>
            {buttonsTitles.map(title => (
                <Button
                key={title}
                isSelected={activeButton === title}
                className={title}
                onClick={() => onButtonClick(title)}
                title={title}>
                </Button>
            ))}
        </div>
    );
}

export default Buttons;
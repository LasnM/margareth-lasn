import Button from './button';

function Buttons({activeButton, onButtonClick}){
    const buttonsTitles = ['work experience', 'education', 'skills', 'projects', 'volunteering'];
    return(
        <div class='section-buttons'>
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
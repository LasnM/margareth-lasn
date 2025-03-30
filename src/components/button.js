function Buttons({activeButton, onButtonClick}){
    const buttonsTitles = ['work experience', 'education', 'skills', 'projects', 'volunteering'];
    let buttonsArray = [];
    for(let button of buttonsTitles){
        let buttonMarkup = <button class={`button ${activeButton === button ? ' selected' : '' }`} id={button} 
        onClick ={() => onButtonClick(button)}>{button}</button>
        buttonsArray.push(buttonMarkup);
    }      

    return <div class="container button-group">{buttonsArray}</div>;
}

export default Buttons;
function Buttons(){
    const buttonsTitles = ['work experience', 'education', 'skills', 'projects', 'volunteering'];
    let buttonsArray = [];
    for(let button of buttonsTitles){
        let isSelected = button === 'work experience';
        let buttonMarkup = <button class={`button ${isSelected ? ' selected' : '' }`} id={button}>{button}</button>
        buttonsArray.push(buttonMarkup);
    }      

    return <div class="container button-group">{buttonsArray}</div>;
}

export default Buttons;
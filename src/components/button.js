function Buttons(){
    const buttonsTitles = ['work experience', 'education', 'skills', 'projects', 'volunteering'];
    let buttonsArray = [];
    for(let button of buttonsTitles){
        let buttonMarkup = <button id={button}>{button}</button>
        buttonsArray.push(buttonMarkup);
    }      

    return <div className="button-group">{buttonsArray}</div>;
}

export default Buttons;
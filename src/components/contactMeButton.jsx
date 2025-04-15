import Button from './button';

function ContactMeButton(){
    return(
        <div className="justify-end" id='contact-btn'>
            <Button
        title='Contact Me'
        className='button'
        onClick={() => alert('Contact me button was clicked!')}>

        </Button>
        </div>
    );
}

export default ContactMeButton;
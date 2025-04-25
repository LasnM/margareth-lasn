import Button from './button';
import '../styles/contactMeButton.scss';

function ContactMeButton(){
    return(
        <div className="flex justify-end">
            <Button
            to='#contactme'
        title='Contact Me'
        className='contact-button'>
        </Button>
        </div>
    );
}

export default ContactMeButton;
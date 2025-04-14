import Button from './button';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function ContactForm(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service_2gelk2r', 'template_f94yhi9', form.current, 'tLj_LJi8eIr1qAC6v')
        .then(() => {
            console.log('Success!');
            alert('Message sent!') //make this be just a banner or something later
            form.current.reset();
        }, (error) => {
            console.log('Failed', error);
            alert('Something went wrong');//also make this into a banner or something
        });
    };

    return(
        <div className="contact-form">
            <h1>Contact me!</h1>
            <div className='contactFormBox'>
                <p>
                <h4>Reach out to me on:</h4>
                </p>
                <p>
                <img src='./images/linkedin-square-icon.png' alt='linkedin icon'></img>
                <h4>LinkedIn</h4>
                </p>
                <p>
                <img src='./images/mail-icon.png' alt='email icon'></img>
                <h4>E-mail</h4>
                </p>
                <p>
                    <h4>Or leave me a message here:</h4>
                </p>
                <form ref={form} onSubmit={sendEmail}>
                    <p>
                    <label for='name'>Name</label>
                    <input type="text" name='name' required/>
                    </p>
                    <p>
                        <label for='email'>E-mail</label>
                        <input type="text" name='email' required/>
                    </p>
                    <p>
                        <label for='inquiry'>Inquiry</label>
                        <input name='inquiry' type="text" rows='10' required/>
                    </p>
                    <Button
                    title='Send'
                    className='button'
                    type='submit'>
                    
                    </Button>
                </form>
            </div>
        </div>)
}

export default ContactForm;
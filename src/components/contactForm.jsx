import Button from './button';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import '../styles/contactForm.scss';

function ContactForm(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const currentForm = form.current;

        if (!currentForm.checkValidity()) {
            currentForm.reportValidity();
            return;
        }
        
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
        <div id='contactme' className="contact-form">
            <h1 className='flex justify-center'>Contact me!</h1>
            <div className='container ml-auto mr-auto max-w-xs rounded-lg' id='contactFormBox'>
                <p>
                <h4>Reach out to me on:</h4>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/margareth-lasn/" className='flex gap-2 items-center'
                    target="_blank" rel="noopener noreferrer">
                    <img src='./images/linkedin-square-icon.png' alt='linkedin icon' className='w-8'></img>
                    <h4 className='hover:underline'>LinkedIn</h4>
                    </a>
                </p>
                <p>
                    <a href="mailto:lasnmargareth5@gmail.com" className='flex gap-2 items-center'
                    target="_blank" rel="noopener noreferrer">
                        <img src='./images/mail-icon.png' alt='email icon' className='w-8'></img>
                        <h4 className='hover:underline'>E-mail</h4>
                    </a>
                </p>
                <p>
                    <h4>Or leave me a message here:</h4>
                </p>
                <form name='message' ref={form} onSubmit={sendEmail}>
                    <p>
                        <p>
                            <label for='name'>Name</label>
                        </p>
                        <input className='user-input rounded' type="text" name='name' required/>
                    </p>
                    <p>
                        <p>
                            <label for='email'>E-mail</label>
                        </p>
                        <input className='user-input rounded' type="text" name='email' required/>
                    </p>
                    <p>
                        <p>
                            <label for='inquiry'>Inquiry</label>
                        </p>
                        <textarea className='user-input rounded' name='inquiry' type="text" rows='5' required/>
                    </p>
                    <div className='flex justify-end p-2'>
                        <Button
                        title='Send'
                        className='button'
                        type='submit'>
                    
                        </Button>
                    </div>
                </form>
            </div>
        </div>)
}

export default ContactForm;
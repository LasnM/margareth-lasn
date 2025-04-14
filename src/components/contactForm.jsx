import Button from './button';

function ContactForm(){
    return(
        <div className="contactForm">
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
                <form onSubmit='ADD A FUNCTION HERE'>
                    <p>
                    <label for='name'>Name</label>
                    <input type="text" id='name' required/>
                    </p>
                    <p>
                        <label for='email'>E-mail</label>
                        <input type="text" id='email' required/>
                    </p>
                    <p>
                        <label for='inquiry'>Inquiry</label>
                        <input type="text" rows='10' required/>
                    </p>
                    <Button
                    title='Send'
                    className='button'>

                    </Button>
                </form>
            </div>
        </div>)
}

export default ContactForm;
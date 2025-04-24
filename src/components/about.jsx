import '../styles/about.scss';

export default function About(){
    return( 
        <div className="container mx-auto px-4 py-8">
            <div className='flex flex-col md:flex-row gap-4 justify-center'>
                <div className='flex-col content-center'>
                    <h1 className='heading' id='name'>MARGARETH LASN</h1>
                    <h4 className="heading" id='position'>&lt;JUNIOR FRONTEND DEVELOPER /&gt; </h4>
                    <div className='' id="about-me">
                        I'm a Tallinn, Estonia based junior developer skilled in HTML, CSS, JavaScript, and experience in using
                        React, Tailwind CSS, Bootstrap, and SASS frameworks. 
                        Gaining extra knowledge on responsive and accessible web design in my spare time.                   
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='md:max-w-md'>
                        <img src="./images/Margareth_Lasn.jpg" alt="Margareth Lasn" id='profile-pic'></img>
                    </div>
                </div>
            </div> 
        </div>
    );
}
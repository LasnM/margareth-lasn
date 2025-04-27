//for some reason the font renders G as an F in the view when running app
import '../styles/content.scss';

export default function Education(){
    return (
        <div class="container content-section education">
            <div class='experience-paragraph'>
                <h5>WESTERN NORWAY UNIVERSITY OF APPLIED SCIENCES</h5>
                <div className='position-place'>
                    <span>ERASMUS EXCHANGE STUDENT</span><span className='date'>2024 - PRESENT</span>
                </div>
                <div>
                On an Erasmus Exchange program through my master’s program at Tallinn University of Technology. 
                Have focused my studies in this institution on frontend development by taking a course in advanced web 
                applications and doing an internship at Lyse Tele AS.
                </div>
            </div>
            <div class='experience-paragraph'>
                <h5>TALLINN UNIVERSITY OF TECHNOLOGY</h5>
                <div className='position-place'>
                    <span>BUSINESS INFORMATION TECHNOLOFY MASTER'S DEGREE</span><span className='date'>2023 - PRESENT</span>
                </div>
                <div>
                During my studies at this level, I have shifted my full focus to frontend development by taking elective courses in 
                UI/UX design and web development.
                </div>
            </div>
            <div class='experience-paragraph'>
                <h5>TALLINN UNIVERSITY OF TECHNOLOGY</h5>
                <div className='position-place'>
                    <span>BUSINESS INFORMATION TECHNOLOFY BACHELOR'S DEGREE</span><span className='date'>2020 - 2023</span>
                </div>
                <div>
                During my studies in this bachelor’s program, I gained basic programming skills with HTML, CSS, and JavaScript through 
                hands-on coursework. This is also where I first got exposed to frontend programming, that sparked a long-term interest in 
                creating user interfaces.
                </div>
            </div>
        </div>
    );
}
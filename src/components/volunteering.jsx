import '../styles/content.scss';

export default function Volunteering(){
    return (
        <div class="volunteering-positions">
            <div class='experience-paragraph'>
                <h5>BOOSTER CONFERENCE</h5>
                <div className='position-place'>
                    <span>ON-SITE VOLUNTEER</span><span className='date'>MARCH 2025</span>
                </div>
                <div>
                    <ul>
                        <li>Made sure the speakers and workshop holders had everything that 
                            was needed for ther presentations/workrooms.</li>
                        <li>Presented the speakers to the audience before each session.</li>
                        <li>Made sure the technical side of the presentations were running smoothly.</li>
                    </ul>
                </div>
            </div>
            <div class='experience-paragraph'>
                <h5>ESN BERGEN</h5>
                <div className='position-place'>
                    <span>WEBMASTER</span><span className='date'>2024 - PRESENT</span>
                </div>
                <div>
                    <ul>
                        <li>Redesigned the front page of the organizations website.</li>
                        <li>At the moment keeping the information on the website up-to-date per 
                            the organizations board requests.</li>
                    </ul>
                </div>
            </div>
            <div class='experience-paragraph'>
                <h5>NPO GEEKS ON WHEELS</h5>
                <div className='position-place'>
                    <span>TEACHER</span><span className='date'>SEPTEMBER 2023 - NOVEMBER 2023</span>
                </div>
                <div>
                    <ul>
                        <li>Organized a software testing lab for 4th through 12th graders.</li>
                        <li>Created a website using HTML, CSS, and JS that consisted of games with 
                            small bugs for students to find and report.</li>
                    </ul>
                </div>
            </div>
            <div class='experience-paragraph'>
                <h5>TALTECH STUDENT COUNCIL OF THE SCHOOL OF IT</h5>
                <div className='position-place'>
                    <p><span>CHAIRMAN OF THE BOARD</span><span className='date'>2022 - 2023</span></p>
                </div>
                <div>
                    <ul>
                        <li>Changed how the organization elects its new board members. Now all of the board members 
                            are elected together (previously, half the board was elected in the autumn semester and the 
                            other half in the spring semester). </li>
                        <li>Helped the following board members find their team’s workflow faster.</li>
                    </ul>
                </div>
                <div className='position-place'>
                    <span>HEAD OF HUMAN RESOURCES</span><span className='date'>2021 - 2022</span>
                </div>
                <div>
                    <ul>
                        <li>Organized motivational events for our organizations' members.</li>
                        <li>Created more positions in my field where members could help out with organizing events.</li>
                        <li>Increased the number of active members from 20 to 60.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
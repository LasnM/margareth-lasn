import '../styles/content.scss';

export default function Experience(){
    return (
        <div class='work-experience'>
            <div class='experience-paragraph'>
                <h5>INNOVATION AND TECHNOLOGY INTERN</h5>
                <div className='position-place'>
                    <span>LYSE TELE BEDRIFT </span><span className='date'>MARCH 2025 - PRESENT</span>
                </div>
                <div>
                    <ul>
                        <li>Created a product pricing tool in Excel using Office Scripts for the sales team, 
                            which minimized the amount of price related inquiries the product team got from the sales people.</li>
                        <li>Contributing in a team whose goal is to improve the Go To Market process 
                            by implementing the IBM Design Thinking course.</li>
                    </ul>
                </div>
            </div>
            <div class='experience-paragraph'>
                <h5>JUNIOR ANALYST</h5>
                <div className='position-place'>
                    <span>CYBERNETICA </span><span className='date'>SEPTEMBER 2023 - JUNE 2024</span>
                </div>
                <div>
                    <ul>
                        <li>Wrote structured use cases for a digital military mobility system and 
                            collaborated in a multicultural team to define the systems functional scope.
                        </li>
                        <li>Described the Estonian Tax and Customs transit system database fields which 
                            resulted in better understandment of what kind of data is processed in the system.</li>
                        <li>Manually tested the Estonian Tax and Customs transit system to ensure the 
                            high quality of the software.</li>
                    </ul>
                </div>
            </div>
            <div class='experience-paragraph'>
                <h5>E-COMMERCE INTERN</h5>
                <div className='position-place'>
                    <span>TELE2 ESTONIA </span><span className='date'>JUNE 2022 - AUGUST 2022</span>
                </div>
                <div>
                    <ul>
                        <li>Maintained and updated content of the e-store on an e-commerce platform (Magento 2), 
                            ensuring accurate and visually consistent UI during the back-to-school campaign.</li>
                        <li>Structured the e-commerce teams Confluence page so that all of the teams work was 
                            documented in one place.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
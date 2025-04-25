import '../styles/content.scss';

export default function Skills(){
    return (
        <div class="skillset">
            <div class="grid grid-cols-3 gap-4">
                <div class="experience-paragraph">
                    <h5 class='list-title flex justify-center'>PROGRAMMING</h5>
                    <ul>
                        <li className='flex justify-center'>JavaScript (Competent)</li>
                        <li className='flex justify-center'>HTML (Competent)</li>
                        <li className='flex justify-center'>CSS (Comptetent)</li>
                    </ul>
                </div>
                <div class="experience-paragraph">
                <h5 class='list-title flex justify-center'>TOOLS</h5>
                    <ul>
                        <li className='flex justify-center'>Figma (Competent)</li>
                        <li className='flex justify-center'>VSCode (Competent)</li>
                        <li className='flex justify-center'>GIT (Competent)</li>
                    </ul>
                    </div>
                <div class="experience-paragraph">
                <h5 class='list-title flex justify-center'>FRAMEWORKS</h5>
                    <ul>
                        <li className='flex justify-center'>Bootstrap (Competent)</li>
                        <li className='flex justify-center'>Tailwind (Competent)</li>
                        <li className='flex justify-center'>Sass (Entry-level)</li>
                        <li className='flex justify-center'>React (Entry-level)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
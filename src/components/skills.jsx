import '../styles/content.scss';

export default function Skills(){
    return (
        <div class="skillset">
            <div class="grid md:grid-cols-3 gap-4">
                <div class="experience-paragraph">
                    <h5 class='list-title flex justify-center'>PROGRAMMING</h5>
                    <ul>
                        <li className='flex justify-center'>JAVASCRIPT (COMPETENT)</li>
                        <li className='flex justify-center'>HTML (COMPETENT)</li>
                        <li className='flex justify-center'>CSS (COMPETENT)</li>
                        <li className='flex justify-center'>JAVA (ENTRY-LEVEL)</li>
                        <li className='flex justify-center'>C# (ENTRY-LEVEL)</li>
                    </ul>
                </div>
                <div class="experience-paragraph">
                <h5 class='list-title flex justify-center'>TOOLS</h5>
                    <ul>
                        <li className='flex justify-center'>FIGMA (COMPETENT)</li>
                        <li className='flex justify-center'>VSCODE (COMPETENT)</li>
                        <li className='flex justify-center'>GIT & GITHUB (COMPETENT)</li>
                    </ul>
                    </div>
                <div class="experience-paragraph">
                <h5 class='list-title flex justify-center'>FRAMEWORKS & LIBRARIES</h5>
                    <ul>
                        <li className='flex justify-center'>BOOTSRAP (COMPETENT)</li>
                        <li className='flex justify-center'>REACT (ENTRY-LEVEL)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
import '../styles/about.scss';

export default function About(){
    return( 
        <div className="container mx-auto px-4 py-8">
            <div className='flex flex-col md:flex-row gap-4 items-stretch justify-center'>
                <div className='flex-col content-center'>
                    <h1 className='heading' id='name'>MARGARETH LASN</h1>
                    <h4 className="heading" id='position'>&lt;JUNIOR FRONTEND DEVELOPER /&gt; </h4>
                    <div className='object-fill' id="about-me">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Obcaecati iure mollitia tenetur at quos quam repellat quasi 
                        quae asperiores accusantium, minus error non incidunt consectetur 
                        earum totam debitis hic praesentium!
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='max-w-md w-full'>
                        <img src="./images/Margareth_Lasn.jpg" alt="Margareth Lasn" id='profile-pic' className='object-cover w-full h-full'></img>
                    </div>
                </div>
            </div> 
        </div>
    );
}
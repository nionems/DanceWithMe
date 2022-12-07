import PhotoLio from '../lionel.JPG'
import Logo from '../WhiteLogo-01.png'
import PhotoWinona from '../winona.jpg'
import AboutUsPic from '../AboutUs.jpeg'
import 'bootstrap/dist/css/bootstrap.css';
import './About.css';

export function About(props) {
    return (


<div className="about-us-container">
    <div class="row text-left">
        <div class="col-sm-3"> 
            <img className='AboutUsPic' src={AboutUsPic}/>
        </div>
        <div class="col-sm-9">
            <p>
            <h3 class="about-us-heading"> About Us </h3>
                Dance With Me was founded by two friends, Lionel and Winona, out of a passion for music. Our platform,
                which started in 2020, is a digital city guide that helps people discover new events in the city of Sydney.
                Our aim is for our customers to make new connections and friends, and most of all,
                dance more. Over the years Dance With Me has evolved and grown, we now let the community search,
                read and write reviews for recurring music events and parties in the city of Sydney.
                
                Dance With Me acknowledges the Traditional Owners of the lands where we live, work and play,
                and across the lands we travel through. We acknowledge and pay our respects to their cultures
                 and traditions, and to Elders past, present and emerging.</p>       
        </div>
    </div>


    <div class="row text-left2">
        <div class="col-sm-3"> 
        </div>
        <div class="col-sm-9">
        <h3 class="team-heading">  Meet The Team </h3>
            <div class="col-4"> <img className='logo' src={PhotoLio} /> <img className='logo' src={PhotoWinona} /></div>
            Lionel Coevoet & Winona Clayton
        </div>
        </div>


    </div>

        
    )
}



import PhotoLio from '../lionel.JPG'
import Logo from '../WhiteLogo-01.png'
import PhotoWinona from '../winona.jpg'
import AboutUsPic from '../AboutUs.jpeg'

export function About(props) {
    return (

        <div className="container text-center">

        <div class="col-center "> <img className='AboutUsPic' src={AboutUsPic} /></div>

            {/* <div class="row-1"> <img className='logo' src={PhotoLio} /></div> */}


            {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
            <div className="row m-5 ">
                <div className="col-md-8"></div>
                <h1>About Us</h1>
                Dance With Me was founded by two friends, Lionel and Winona, out of a passion for music. Our platform, which started in 2020, is a digital city guide that helps people discover new events in the city of Sydney. Our aim is for our customers to make new connections and friends, and most of all, dance more. Over the years as Dance With Me has evolved and grown, we now let the community search, read and write reviews for recurring music events and parties in the city of Sydney.
            </div>
            Dance With Me acknowledges the Traditional Owners of the lands where we live, work and play, and across the lands we travel through. We acknowledge and pay our respects to their cultures and traditions, and to Elders past, present and emerging.

            {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
            <div class="row m-5">
                <div class="col-6 col-md-4">
                    
                </div>
                <div class="col-6 col-md-4"><img className='logo' src={Logo} /></div>
     
            </div>

            {/* <!-- Columns are always 50% wide, on mobile and desktop --> */}
            <div class="row m-5">
                <div class="col-6 "> <img className='logo' src={PhotoLio} /></div>
                <div class="col-6"><img className='logo' src={PhotoWinona} /></div>
            </div>

        </div>


    )
}

import PhotoLio from '../lionel.JPG'
import Logo from '../WhiteLogo-01.png'
import PhotoWinona from '../winona.JPG'

export function About(props) {
    return (

        <div className="container text-center">

            {/* <div class="row-1"> <img className='logo' src={PhotoLio} /></div> */}


            {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
            <div className="row m-5 ">
                <div className="col-md-8"></div>
                <h1>About Us</h1>
                fffxddcjsaidchidocvhdivchdivdhvidhciuodchdisouchdiouchsdiovdshcioshcudhcudschiochidoshcdioschdisochdiuochdsiuhcudshc
                fffxddcjsaidchidocvhdivchdivdhvidhciuodchdisouchdiouchsdiovdshcioshcudhcudschioch
                fffxddcjs divchdivdhvidhciuodchdisouchdiouchsdiovdshcioshcudhcudschioch
                fffxddcjs divchdivdhvidhciuodchdisouchdiouchsdiovdshcioshcudhcudschioch
                divchdivdhvidhciuodchdisouchdiouchsdiovdshcioshcudhcudschioch
                divchdivdhvidhciuodchdisouchdiouchsdiovdshcioshcudhcudschioch
                aidchidocvhdivchdivdhvidhciuodchdisouchdiouchsdiovdshcioshcudhcudschioch
            </div>

            {/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
            <div class="row m-5">
                <div class="col-6 col-md-4">
                    
                </div>
                <div class="col-6 col-md-4"><img className='logo' src={Logo} /></div>
     
            </div>

            {/* <!-- Columns are always 50% wide, on mobile and desktop --> */}
            <div class="row m-5">
                <div class="col-6 "> <img className='logo' src={PhotoLio} /></div>
                <div class="col-6"><img className='logo' src={PhotoLio} /></div>
            </div>

        </div>


    )
}

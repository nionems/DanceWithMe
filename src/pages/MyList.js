import { useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom"
import Logo from '../WhiteLogo-01.png'

export function MyList( props ) {
    const navigate = useNavigate()

    useEffect( () => {
        if( props.auth ) {
            props.handler().then( (res) => navigate('/') )
        }
    }, [props.auth])
    return(

        
        <div className= "My List">
            
            <div className="container text-center">

{/* <div class="row-1"> <img className='logo' src={PhotoLio} /></div> */}


{/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
<div className="row m-5 ">
    <div className="col-md-8"></div>
    <h1>My List of Favourite</h1>
    
</div>

{/* <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --> */}
<div class="row m-5">
   
<div class="p-3 mb-2 bg-danger text-white"> Your list

</div>
    <div class="p-3 mb-2 bg-dark text-white">
    <div class="col-6 "> <img className='logo' src={Logo} /></div>
        
    </div>
    <div class="p-3 mb-2 bg-dark text-white">
    <div class="col-6 "> <img className='logo' src={Logo} /></div>


    </div>
    <div class="p-3 mb-2 bg-dark text-white">
    <div class="col-6 "> <img className='logo' src={Logo} /></div>
    
    </div>
    <div class="p-3 mb-2 bg-dark text-dark">
    <div class="col-6 "> <img className='logo' src={Logo} /></div>


    </div>
    <div class="p-3 mb-2 bg-dark text-white">
    <div class="col-6 "> <img className='logo' src={Logo} /></div>
    dhfjkdhfkdjhfkdjsfhkfhjksd
    jdjdhcshcidjcidjcicjdijdijc
    kchjkdchlchjkdchjlchildcihc
    
    </div>
    <div class="col-6 col-md-4-bg-dark class">
  

    </div>
    {/* <div class="col-6 col-md-4"><img className='logo' src={Logo} /></div> */}

</div>

{/* <!-- Columns are always 50% wide, on mobile and desktop --> */}
<div class="row m-5">
    
</div>

</div>
        </div>




    )
}
import { useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom"
import PhotoLio from '../lionel.JPG'

export function MyAccount( props ) {
    const navigate = useNavigate()

    useEffect( () => {
        if( props.auth ) {
            props.handler().then( (res) => navigate('/') )
        }
    }, [props.auth])

    



    // const MyFavourite = () => {
    //     useEffect(() => {
    //         document.event_title = 'events';
    //     });
    //     return (
    //         <div>
    //             <p>These are my events...</p>
    //         </div>
    //     );
    // };
    // export default MyFavourite;

    return(
        
        
        <div className= "My Account">
             <div className="container text-center">

          

            <h1 style={{ color: "white" }}>My Account</h1>
            <div class="p-3 mb-2 bg-dark text-white">
            <h1>Lionel Coevoet</h1>
            <div class="col-2 "> <img className='logo' src={PhotoLio} /></div>
            </div>

         </div>
        </div>




    )
}
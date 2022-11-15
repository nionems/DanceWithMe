import { useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom"

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
             <div className="col text-center">

          

            <h1 style={{ color: "white" }}>My Account</h1>


         </div>
        </div>




    )
}
import { useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom"
import PhotoLio from '../lionel.JPG'

export function MyAccount(props) {
    const navigate = useNavigate()

    useEffect(() => {
        if (props.auth) {
            props.handler().then((res) => navigate('/'))
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

    return (


        <div className="My Account">
            <div className="container text-center">





                <h1 style={{ color: "white" }}>My Account</h1>
                <div class="p-3 mb-2 bg-dark text-white">
                <div class="col-center m personal-info">
                        <div class="alert alert-info alert-dismissable">
                            <a class="panel-close close" data-dismiss="alert">×</a>
                            <i class="fa fa-coffee"></i>
                            Here you can <strong>edit or delete</strong>  your profile and account
                        </div>
                        
            
                    </div>
                    <h1>Lionel Coevoet</h1>
                    <div class="col-2 "> <img className='logo' class="avatar img-circle img-thumbnail" alt="avatar" src={PhotoLio} /></div>
                    <div class="col-2">
                        <h6>Upload a different photo...</h6>
                        
                    </div>
                    

                </div>
                
            </div>
        
        <h6></h6>
            </div>
           



            )
}
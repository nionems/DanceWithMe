import { useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom"
import PhotoLio from '../lionel.JPG'
import Logo from '../WhiteLogo-01.png'

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
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <img className='logo' class="avatar img-circle img-thumbnail" alt="avatar" src={PhotoLio} />
                            </div>
                            <div class="col-sm">
                                <div class="row">
                                    <div class="col-sm">
                                        <input type="text" class="form-control" placeholder="Lionel" aria-label="First name"></input>
                                    </div>
                                    <div class="col-sm">
                                        <input type="text" class="form-control" placeholder="Coevoet" aria-label="Last name"></input>
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="col-sm">
                                        <input type="text" class="form-control" placeholder="Student" aria-label="Occupation"></input>
                                    </div>
                                    <div class="col-sm">
                                        <input type="text" class="form-control" placeholder="11/01/1985" aria-label="Dob"></input>
                                    </div>

                                </div>


                            </div>
                            <div class="col-sm">

                                <div class="col-sm">
                                    <input type="text" class="form-control" placeholder="nionems@icloud.com" aria-label="email"></input>
                                </div>

                                <div class="col-sm">
                                    <input type="text" class="form-control" placeholder="********" aria-label="Password"></input>
                                </div>



                            </div>  <div class="col-3 col-md-3"><img className='logo' src={Logo} /></div>



                        </div>
                    </div>

                    <div class="col-3">
                        <label for="formFile" class="form-label">Edit Picture</label>
                        <input class="form-control" type="file" id="formFile"></input>


                    </div>

                    <button type="button" class="btn btn-danger">Cancel</button>
                    <button type="button" class="btn btn-danger">Edit Profile</button>



                </div>


            </div>


            <h6></h6>

        </div>




    )
}

// {/* <div class="mb-3 row">
// <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
// <div class="col-sm-10">
//     <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com"></input>
// </div>
// </div>

// <label for="inputPassword" class="col-sm-2 col-form-label bg-light">Password</label>
// <div class="col-sm-20">
//     <input type="password" class="form-control" id="inputPassword"></input>
// </div> */}

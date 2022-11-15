import { useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom"

export function MyList( props ) {
    const navigate = useNavigate()

    useEffect( () => {
        if( props.auth ) {
            props.handler().then( (res) => navigate('/') )
        }
    }, [props.auth])
    return(
        <div className= "My List">
             <div className="col text-center">

          

            <h1 style={{ color: "white" }}>My Favourite</h1>


         </div>
        </div>




    )
}


import { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom"
import Logo from '../WhiteLogo-01.png'
import Kizomba1 from '../Kizomba1.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import './MyList.css';

export function MyList(props) {
    const navigate = useNavigate()
    const [pageData, setPageData] = useState([])

    useEffect(() => {
        if (props.auth) {
            props.handler().then((res) => navigate('/'))
        }
    }, [props.auth])

    useEffect(() => {
        console.log(props.listData)
        setPageData(props.listData)
    }, [props.listData])

    if (pageData.length > 0) {
        const itemCollection = pageData.map((item, key) => {
            return (

                <div className="col-md-3">

                    <Image urlgetter={props.imageGetter} imgPath={"eventPicture/" + item.event_poster} />
                    <div className="card">
                        {/* <img src="" className="card-img-top" alt={item.event_title}></img> */}
                        <div className="card-body text-center bg-secondary">
                            <h3 style={{ color: "black" }} className="card-mylist-title">{item.event_title}</h3>
                            <h5 style={{ color: "black" }} className="card-mylist-day">{item.event_day}</h5>
                            <h6 style={{ color: "black" }} className="card-mylist-starttime">{item.event_starttime}</h6>
                            <h3 style={{ color: "gold" }} className="card-mylist-price">{item.event_price}</h3>
                            <Link to={"/events/" + item.id} >Detail</Link>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="Home">
                <div className="container">
                    <div className="row">
                        {itemCollection}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return null
    }
}

function Image(props) {
    const [imageURL, setImageURL] = useState()

    useEffect(() => {
        if (!imageURL) {
            props.urlgetter(props.imgPath)
                .then((url) => setImageURL(url))
                .catch((error) => console.log(error))
        }
    })
    if (imageURL) {
        return (
            <img src={imageURL} className="card-img-top" alt={props.Title} />
        )
    }
    else {
        return (
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        )
    }
}
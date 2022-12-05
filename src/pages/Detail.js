import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import {Reviews} from "../components/Reviews"


export function Detail(props) {
  const [eventData, setEventData] = useState()
  const [eventReviews, setEventReviews] = useState([]) 
  // const [ image, setImage] = useState()

  let { eventID } = useParams()

  useEffect(() => {
    if (!eventData) {
      props.getter("events", eventID)
        .then((data) => {
          setEventData(data)

          let reviews = props.getReviews(eventID)
          setEventReviews(reviews)
        })
    }
   })

 //fetch book reviews
//  useEffect(() => {
//     if(eventReviews.length == 0) {
//       props.getReviews( eventID )
//     }
//   }, [eventData])

//   // set book review from props
//   useEffect(() => {//
//     setEventReviews(props.reviews)
//   }, [props.reviews])

  const reviewSubmitHandler = (evento) =>{
    evento.preventDefault()
    const data = new FormData (evento.target)
    props.addReview ( data.get("eventId"), data.get("reviewtext"), data.get("userId") )
    .then ((res) => console.log(res))
  }


  if (eventData) {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col">
                    <h2>{eventData.event_title}</h2>
                    <h4>{eventData.event_genre}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <DetailImage data={eventData} getter={props.imageGetter} />
                </div>
                <div className="col">
                    <h4>Title</h4>
                    <p>{eventData.event_title}</p>
                    <h5>Genre</h5>
                    <p>{eventData.event_genre}</p>
                    <h5>start</h5>
                    <p>{eventData.event_starttime}</p>
                    <h5>end</h5>
                    <p>{eventData.evet_endtime}</p>
                    <h5>description</h5>
                    <p>{eventData.event_description}</p>
                    <div style={(props.auth) ? { display: "block" } : { display: "none" }}>
                        <button className="btn btn-info">Add to Favourites</button>
                        <form method="post" onSubmit={ reviewSubmitHandler}>
                            <label className="form-label">
                                <h5>Write a review for {eventData.event_title}</h5>
                            </label>
                            <textarea
                                cols="30"
                                rows="5"
                                name="reviewtext"
                                className="form-control"
                                placeholder="I love this event!..."
                            ></textarea>
                            <input type="hidden" name="userId" value={props.auth.uid} />
                            <input type="hidden" name="eventId" value={eventID} />
                            <button className="btn btn-info my-2">Review this event</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
else {
    return (
        <div className="container my-4"></div>
    )
}
}


function DetailImage(props) {
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
      if (props.data) {
          props.getter("eventPicture/" + props.data.event_poster)
              .then((url) => setImgUrl(url))
      }
  }, [props.data])

  if (imgUrl) {
      return (
          <img src={imgUrl} style={{ width: "100%" }} alt="event image" />
      )
  }
  else {
      return(
        <div class="spinner-border" role="status">
         <span class="sr-only"></span>
       </div>
      ) 
 }

}


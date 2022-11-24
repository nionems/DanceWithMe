import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'


export function Detail(props) {
  const [eventData, setEventData] = useState()

  let { eventID } = useParams()

  useEffect(() => {
    if (!eventData) {
      props.getter("events", eventID)
        .then((data) => {
          setEventData(data)
        })
    }
  })

  if (eventData) {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col">
            <h1> {eventData.event_title}</h1>
            <h2> {eventData.event_day}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>{eventData.event_price}</h2>
            <h2>{eventID}</h2>
            <h3> eventData.event_poster </h3>
            <h2> {eventData.event_description}</h2>
          </div>
          <div className="col">
            <h2>{eventData.event_genre}</h2>
            <h2>{eventData.event_starttime}</h2>
            <h2>{eventData.event_endtime}</h2>
          </div>
          <div className="col">
            <h2> {eventData.event_location}</h2>
          </div>
          <div className="col">
            <button className="btn btn-info"> review this event </button>
            <button className="btn btn-info bg-danger"> Add to Favourite</button>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container my-4" >

      </div>
    )
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
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { Link } from 'react-router-dom'

export function Detail(props) {
    const [eventData, setEventData]= useState()

    useEffect(()=>{
        if(!eventData) {
            props.getter("events",eventID)
            .then( (data) => {
                setEventData(data)
            } )
        }
    })
    let{ eventID } = useParams()

    if( eventData) {
    return (
        <div className="container my-4">
            <div className="row">
              <div className="col">
                <h2> eventData.event_title</h2>
              </div>
            </div>
          <div className="row">
            <div className="col">
            <h2>{eventID}</h2>
            <h3>Event poster </h3>
          </div>
          <div className="col">
                <h2>{eventID}</h2>
                <h3>Event poster </h3>
          </div>
          <div className="col">
               <h3>jdhfjdfhd</h3>
                <button className="btn btn-info bg-danger"> Add to Favourite</button>

                <button className="btn btn-info"> review this book </button>
            </div>
        </div>
     </div>

        
    )
    }
    else{
        return (
            <div className = "container my-4" ></div>
        )
    }
    
}
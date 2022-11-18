import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Home(props) {
  const [pageData, setPageData] = useState([])


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
          
            <h3 style={{ color: "black" }} className="card-title">{item.event_title}</h3>
              <h5 style={{ color: "black" }} className="card-title">{item.event_day}</h5>
              <h6 style={{ color: "black" }} className="card-title">{item.event_starttime}</h6>
              <h3 style={{ color: "gold" }} className="card-title">{item.event_price}</h3>
           
              
              <Link to={"/events/" + item.id } >Detail</Link>
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
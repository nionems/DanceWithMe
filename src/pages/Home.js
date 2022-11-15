import { useState, useEffect } from 'react'
export function Home(props) {
  const [pageData, setPageData] = useState([])


  useEffect(() => {
    console.log( props.listData )
    setPageData(props.listData)
  }, [props.listData])

  if (pageData.length > 0) {
    const itemCollection = pageData.map((item) => {
      return (



        
        <div className="col-md-4">
          <h1 style={{ color: "white" }}>Contact Us </h1>
          <h1  style={{ color: "white" }}>Tonight at the argyle </h1>
                     <p>jLorem Ipsum is simply dummy text of the printing andre like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>



          <div className="card">
            <div className="card-body">
            <h5 className="card-title">{item.event_starttime}</h5>
            <h5 className="card-title">{item.event_poster}</h5>
            <h5 className="card-title">{item.event_location}</h5>
            <h5 className="card-title">{item.event_}</h5>
         
              


            
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
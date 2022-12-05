import Logo from '../WhiteLogo-01.png'


export function Footer(props) {
    return (
      
        <footer>
            
            <div className="container-fluid">
            <div class="col-6 col-md-1"><img className='logo' src={Logo} /></div>
            <p>&copy; {props.year} all rights reserved to Winona and Lionel 2022</p>
              
               
            </div>
        </footer>
    )
}
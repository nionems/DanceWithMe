import { ContactForm } from '../components/ContactForm'
export function Contact(props) {
    return (

        <div className="Contact">
            

            <div className="container">

                <div className="col text-center">
                    <h1>  Contact Us </h1>
                    <p> </p>
                    <div className="App">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>

    )
}
import { ContactForm } from '../components/ContactForm'
import 'bootstrap/dist/css/bootstrap.css';
import './Contact.css';

export function Contact( props ) {
    return (

        <div className="Contact">
            <div className="container">
                <div className="col text-center">
                    <h1 class="contact-us-heading"> Contact Us </h1>
                    <p> </p>
                    <div className="App">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>

    )
}
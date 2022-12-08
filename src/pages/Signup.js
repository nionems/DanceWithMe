import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './Signup.css';

export function Signup(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [error, setError] = useState()
  const [success, setSuccess] = useState(false)
  const [dob, setDob] = useState('')
  const [occupation, setOccupation] = useState('')
  const [validOccupation, setValidOccupation] = useState(false)
  const [validDob, setValidDob] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    // check the value of email
    // check if email contains @ and it's not the first character
    if (email.length >= 5 && email.indexOf('@') > 0) {
      setValidEmail(true)
    }
    else {
      setValidEmail(false)
    }
  }, [email])

  useEffect(() => {
    if (password.length >= 6) {
      setValidPassword(true)
    }
    else {
      setValidPassword(false)
    }
  }, [password])

  useEffect(() => {
    if (dob.length >= 8) {
      setValidDob(true)
    }
    else {
      setValidDob(false)
    }
  }, [dob])

  useEffect(() => {
    if (occupation.length >= 4) {
      setValidOccupation(true)
    }
    else {
      setValidOccupation(false)
    }
  }, [occupation])

  useEffect(() => {
    if (success) {
      navigate('/')
    }
  }, [success])

  const submitHandler = (event) => {
    // console.log('submit')
    // stop the form from refreshing the page
    event.preventDefault()
    // reset error message
    setError(null)
    // capture data from form
    const data = new FormData(event.target)
    props.handler(data.get("useremail"), data.get("userpw"), data.get("userdob"), data.get("useroccupation"))
      .then(() => setSuccess(true))
      .catch((error) => {
        //console.log(error)
        handleErrors(error.code)
      })
  }

  const handleErrors = (code) => {
    // turn firebase errors into plain error messages for the visitor
    if ("auth/email-already-in-use") {
      setError("the email is already in use")
    }
  }

  return (
    <div className="container">
      <div className="row">
        <form className="col-md-4 offset-md-4" onSubmit={submitHandler}>
          <h2 class="signup-title" style={{ color: "white" }}>Sign up for an account today.</h2>
          <div className="mb-3">
            < label htmlFor="useremail">Please enter a valid email address:</label>
            <input
              type="email"
              id="useremail"
              name="useremail"
              placeholder="you@domain.com"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userpw">Password (minimum 8 characters)</label>
            <input
              type="password"
              id="userpw"
              name="userpw"
              placeholder="**********"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userdob"> Date of birth --/--/-- </label>
            <input
              type="dob"
              id="userdob"
              name="userdob"
              placeholder="--/--/--"
              className="form-control"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="useroccupation">Occupation</label>
            <input
              type="occupation"
              id="useroccupation"
              name="useroccupation"
              placeholder="Student, IT, Hospitalilty..."
              className="form-control"
              value={occupation}
              onChange={(event) => setOccupation(event.target.value)}
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-danger"
              disabled={(validEmail && validPassword) ? false : true}
            >
              Sign up
            </button>
            <div>{error}</div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col text-center">
          <Link className="btn btn-link" to="/signin">Sign in to your account</Link>
        </div>
      </div>
    </div>
  )
}
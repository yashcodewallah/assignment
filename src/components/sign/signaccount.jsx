import React from 'react'
import "./signaccount.css"
import {Link } from 'react-router-dom'


export default function signaccount(props) {

  const { setPage, details, setDetails } = props;
  const usernamePattern = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/


  return (
    <div className='signAccountContainer'>
      <div className='signHeading'>Sign UP</div>

      <div className='signDiv'>
        <label>Username: <input type="text" required placeholder='eg:- yash_1' autoFocus={true} value={details.username} onChange={(event) => setDetails({ ...details, username: event.target.value })} /></label>
        <div className='error'>{usernamePattern.test(details.username) | (details.username.length === 0) ? "" : "**INVALID USERNAME"}</div>
      </div>
      <div className='signDiv'>
        <label>Password: <input type="text" required placeholder='eg:- yashsharma@1' value={details.password} onChange={(event) => setDetails({ ...details, password: event.target.value })} /></label>
        <div className='error'>{passwordPattern.test(details.password) | (details.password.length === 0) ? "" : "**atleast 8 charcaters with alteast 1 number and 1 special character"}</div>
      </div>
      <div className='signDiv'>
        <label>Confirm Password: <input type="text" required placeholder='Confirm Password...' value={details.confirmPassword} onChange={(event) => setDetails({ ...details, confirmPassword: event.target.value })} /></label>
        <div className='error'>{details.confirmPassword === details.password | (details.confirmPassword.length === 0) ? "" : "**confirm password should match with the Password"}</div>
      </div>

      <div className='signDiv'>
        <label>Profile picture:<i className="fileIcon fas fa-plus"></i> <input type="file" onChange={(event) => {
          setDetails({ ...details, profilePicture: event.target.file })
          console.log(details.profilePicture)
        }} id="inputfile" required style={{ 'display': 'none' }} /> </label>
         <div className='error'>{details.profilePicture ? "" : "**confirm password should match with the Password"}</div>
      </div>


      <div className='signButtonContainer'>
        <button className='back-button' onClick={(event) => {
          event.preventDefault();
          setPage(2)
        }}>BACK</button>
        <button className='submitButton'><Link to="/finalpage">SUBMIT</Link></button>
      </div>
    </div>

  )
}

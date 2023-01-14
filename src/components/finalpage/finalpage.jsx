import React from 'react'
import "./finalPage.css"

export default function finalpage(props) {
    const{details}=props
   console.log(details.above75Tenth);
  return (
    <div className='finalPageContainer'>
        <div className='divs'>
        <div className='heading'>DETAILS</div>
        <li >FIRST NAME: {details.firstname}</li>
        <li >LAST NAME: {details.firstname}</li>
        <li>GENDER : {details.gender}</li>
        <li >EMAIL: {details.email}</li>
        <li >SCHOOLNAME: {details.schoolname}</li>
        <li >ABOVE18: {details.above18}</li>
        <li >ABOVE 75% IN 10TH : {details.above75Tenth ? "YES":"NO"}</li>
        <li >ABOVE 75% IN 12TH: {details.above75Twelveth ? "YES":"NO"}</li>
        <li >USERNAME: {details.username}</li>
        <li >PASSWORD: {details.password}</li>
        </div>
    </div>
  )
}

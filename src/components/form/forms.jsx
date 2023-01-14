import React, { useState } from 'react'
import CreateAccount from '../createaccount/createaccount'
import "./form.css"
import Education from '../education/education'
import SignAccount from '../sign/signaccount'


export default function Forms(props) {
  const [page, setPage] = useState(1)
  const{details,setDetails}=props
  const pagedisplay = () => {
    if (page === 1) {
      return <CreateAccount  details={details} setDetails={setDetails} setPage={setPage} />
    } else if (page === 2) {
      return <Education setPage={setPage} details={details} setDetails={setDetails}/>
    } else {
      return <SignAccount setPage={setPage} details={details} setDetails={setDetails}/>
    }
    // return <SignAccount setPage={setPage} details={details} setDetails={setDetails}/>
  }

  return (
    <div className='container'>
    <div className='formSliderContainer'>
    <div className='formSlider' style={{ 'width': page === 1 ? '33%' : page === 2 ? '66%' : '100%' }}></div>
    </div>
    <div className='formContainer' >
      {pagedisplay()}
    </div>
    </div>
  )
}

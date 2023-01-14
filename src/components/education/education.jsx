import React from 'react'
import "./education.css"
export default function Education(props) {
  const {setPage,details,setDetails}=props;
console.log(details.above75Tenth);
  const schoolPattern=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

const handleClick=(event)=>{
  event.preventDefault();
  if(schoolPattern.test(details.schoolname) && (details.above75Tenth===true) && (details.above75Twelveth===true)){
    setPage(3);
  }
}

  return (
    <div >
      <form className='educationForm'>
        <h1 className='educationHeading'>EDUCATIONAL DETAILS</h1>

          <div className='educationFormDivs1'>
            <label>School Name:<input type="text" className="inputText " autoFocus={true} required value={details.schoolname} onChange={(event) => {setDetails({ ...details, schoolname: event.target.value} )}} /> </label>
            <div className='error'>{(schoolPattern.test(details.schoolname) || details.schoolname.length === 0) ? "" : "** Invalid school name"}</div>
        </div>
      
        <div className='educationFormDivs1'>
          <label>Above 75% in 10th:<input type="checkbox" id="checkA" className="inputCheckbox " required  onChange={(event)=>setDetails({...details, above75Tenth: event.target.checked})}></input></label>
        <div className='error'>{(details.above75Tenth===true) ? "" : "** this is mandatory"}</div>
        </div>

        <div className='educationFormDivs1'>
          <label>Above 75% in 12th :<input type="checkbox" className="inputCheckbox" required  onChange={(event)=>setDetails({...details, above75Twelveth: event.target.checked})} ></input></label>
          <div className='error'>{(details.above75Twelveth===true) ? "" : "** This is mandatory"}</div>
        </div>
       
        <div className='educationFormDivs1'>
        
          <div className='file-heading'>Upload 12th Marksheet :</div>
         
          <label htmlFor='inputfile'><i className="file-icon fas fa-plus"></i><input id='inputfile' style={{ 'display': 'none' }} type="file" className='inputFile' required></input></label>
        </div>
      <div className='buttonContainer'>
        <button className='next-button' onClick={(event) => {
          event.preventDefault();
          props.setPage(1);
        } }>BACK</button>
        <button className='next-button' onClick={handleClick}>NEXT</button>
      </div>
      </form>
    </div>
  )
}

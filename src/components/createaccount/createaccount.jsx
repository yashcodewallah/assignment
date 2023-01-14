import React from 'react'
import "./createAccount.css"

export default function Createaccount(props) {
const {setPage,details,setDetails}=props;

const namePattern=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

const emailPattern=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/


const validatePage=()=>{

if(namePattern.test(details.firstname) && namePattern.test(details.lastname) && emailPattern.test(details.email) && details.above18==="yes"){
setPage(2)
console.log(details)
}
}

    return (
        <div>
            <form className='createform' >
                <h1 >CREATE ACCOUNT</h1>

                    
                    <div className='createformDivs1'>
                    <label>FIRST NAME:<input type="text" className="inputText firstname" autoFocus={true} required  value={details.firstname} onChange={(event)=> setDetails({...details,firstname:event.target.value})} /></label>
                    <div  className='error'>{(namePattern.test(details.firstname) || details.firstname.length===0) ? "":"** Invalid First name"} </div>
                    </div>
            
                
                    <div className='createformDivs1'>
                    <label>LAST NAME:<input type="text" className="inputText lastname" value={details.lastname} onChange={(event)=>setDetails({...details,lastname:event.target.value})} /> </label>
                    <div className='error'>{(namePattern.test(details.lastname) || details.lastname.length===0) ? "":"** Invalid last name"} </div>
                </div>
        

                    <div className='createformDivs1'>
                    <label>EMAIL:<input type="text" className="inputText email" value={details.email} onChange={(event)=>setDetails({...details,email:event.target.value})} required /></label>
                    <div className='error'>{(emailPattern.test(details.email) || details.email.length===0) ? "":"** Invalid Email"} </div>
                </div>


                <div className='createformDivs1'>
                <label>GENDER :
                <select className='genderDrop' onChange={(e)=>{
                    const temp=e.target.value;
                    setDetails({...details,gender:temp})
                }}>
                
            <option value = "Male" >Male</option>
            <option value = "Female" >Female</option>
            <option value="others">Others</option>
         </select>
         </label>
                </div>
        
                <div className='ageDiv'>
                 <div className='ageDivs1'>
                 <h4>Are you above 18?</h4>
                    <div className='age-check'>
                        <input type="radio" className="inputRadio" id="radioYes" value="yes"  name='age' onChange={(event)=>setDetails({...details,above18:event.target.value})}></input>
                        <span style={{ 'fontSize': '20px', 'fontFamily': 'poppins','marginLeft':'10px' }}>YES</span>
                    </div>

                    <div className='age-check'>
                        <input type="radio" className='inputRadio' id='radioNo' value="no" name='age' onChange={(event)=>setDetails({...details,above18:event.target.value})}></input>
                        <span style={{ 'fontSize': '20px', 'fontFamily': 'poppins' , 'marginLeft':'10px' }}>NO</span>
                    </div>
                </div>
                <div className='error'>{details.age==="no" && document.getElementsByName("age").checked ? "":"** You should be above 18"} </div>
                </div>


                <div className='buttonContainer'>
                    <button className='back-button' disabled>BACK</button>
                    <button className='next-button' onClick={(event)=>{
                    event.preventDefault();
                    validatePage();
                    }}>NEXT</button>
                </div>

            </form>
        </div>
    )
}

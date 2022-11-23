import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import StudentService from "../../Services/StudentService";

export default function AddPersonalDetails(){

    var user = JSON.parse(sessionStorage.getItem("user"));
    const authenticated = sessionStorage.getItem("authenticated") || false

    const [student, setstudent] = useState({})

    useEffect(()=>{
        StudentService.getStudent(user.userId)
        .then((response)=>{
            setstudent(response.data)
            sessionStorage.setItem("student",JSON.stringify(response.data))
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    },[user.userId])


    const submitForm = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const student = Object.fromEntries(formData);
        student.user = user

        StudentService.AddPersonalDetails(student)
        .then((response) => {                    
            alert("Personal details are successfully added")
            sessionStorage.setItem("gender",student.gender)
        }).catch((err) => {
            console.log(err)
            alert("Something went wrong")
        })
    };

    if (!authenticated) {
        return <Navigate replace to="/notauthorised" />;
    } 
    else{
    return(
        <>
        <div>.</div>
        <div className="row justify-content-center my-5">
        <div className="col-8 col-lg-10 col-xl-10">
        <div className="card">
        <div className="card-header"><h4>Personal Details</h4></div>
        <form className="card-body" onSubmit={submitForm} style={{padding :'20px 50px 20px 50px'}}>
            <div className="row">
                <div className="col">
            <h3>General information</h3>
            <br></br>

            <div className="row">
                <div className="col-lg-3 my-2">
                    <h6>Name</h6>
                </div>
                <div className="col">
                    <div className="mb-4">
                    <input className="form-control-plaintext" type="text" name = "firstName"
                    placeholder='First name'
                    defaultValue = {user.firstName}
                    required title="Please enter your first name"/>
                    </div>
                </div>
                    <div className="col">
                    <div className="mb-4">
                    <input className="form-control-plaintext" type="text" name = "lastName"
                    placeholder='Last name'
                    defaultValue = {user.lastName} 
                    required title="Please enter your last name"/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 my-2">
                    <h6>Gender</h6>
                </div>
                <div className="col">
                    <select className="form-select mb-4 w-50" name="gender"
                    value = {student.gender}
                    >
                    <option selected>Select</option>
                    <option defaultValue="1">Male</option>
                    <option defaultValue="2">Female</option>
                    </select> 
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 my-2">
                    <h6>Course</h6>
                </div>
                <div className="col">
                    <select className="form-select mb-4 w-50" name="course"
                    value = {student.course}
                    >
                    <option selected>Select Course</option>
                    <option defaultValue="DAC">DAC</option>
                    <option defaultValue="DBDA">DBDA</option>
                    <option defaultValue="DESD">DESD</option>
                    <option defaultValue="DITISS">DITISS</option>
                    <option defaultValue="DIoT">DIoT</option>
                    </select> 
                </div>
            </div>
           
            <div className="row">
            <div className="col-lg-3 my-2">
                    <h6>Batch</h6>
                </div>
                <div className="col">
                    <select className="form-select mb-4" name="batch"
                    value = {student.batch}>
                    <option selected>Select Batch</option>
                    <option defaultValue="Mar">Mar</option>
                    <option defaultValue="Sept">Sept</option>
                    </select> 
                </div>
                <div className="col">
                    <select className="form-select mb-4" name="year"
                    value = {student.year}
                    >
                    <option selected>Select year</option>
                    <option defaultValue="2022">2022</option>
                    <option defaultValue="2023">2023</option>
                    </select> 
                </div>
            </div>

            </div>

            <div className="col">
            <h3>Contact Details</h3>
            <br></br>

            <div className="row">
                <div className="col-lg-4 my-2">
                    <h6>Email id</h6>
                </div>
                <div className="col">
                    <div className="mb-4">
                    <input className="form-control" type="text" name = "emailId"
                    defaultValue = {user.emailId} disabled
                    />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 my-2">
                    <h6>Mobile Number</h6>
                </div>
                <div className="col-lg-2">
                    <input className="form-control" defaultValue='+91'/>
                </div>
                <div className="col">
                    <div className="mb-4">
                    <input className="form-control" type="text" name = "mobileNumber"
                    placeholder='Mobile number' 
                    required 
                    defaultValue = {student.mobileNumber}
                    pattern = "[789][0-9]{9}"
                    title="Please enter valid mobile number"
                    />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 my-2">
                    <h6>Address</h6>
                </div>
                <div className="col">
                    <div className="mb-4">
                    <textarea className="form-control" type="text" name = "address"
                    placeholder='Address' rows="4"
                    defaultValue= {student.address}
                    required title="Please enter your address"/>
                    </div> 
                </div>
            </div>

            </div>
            </div>           

            <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary w-100 mb-3" type="submit">
                Submit / Update
            </button>

            </div>

        </form>
        </div>
        </div>    
        
        </div>
             
        </>
    );
    }

}
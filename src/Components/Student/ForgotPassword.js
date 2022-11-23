import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import StudentService from "../../Services/StudentService";

export default function ForgotPassword(){

    let navigate = useNavigate(); 

    const [isExists, setisExists] = useState(true);

    const submitForm = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const inputObject = Object.fromEntries(formData);
        
        let emailId = inputObject.emailId
        const data = {emailId}
        console.log(data)

        StudentService.checkemailid(data).then(response => {               
            if(response.data === 1){
                localStorage.setItem("authenticated", 1);
                let path = '/changepassword'; 
                navigate(path , {state : emailId});          
            }
            else setisExists(false)
        }).catch((err) => {
            console.log(err)
            alert("Something went wrong")
        })

        }

    return(
        <>

        <div className="row justify-content-center my-3">
        <div className="col-8 col-lg-4 col-xl-4">
        <div className="card">
        <div className="card-header">Hostel Management System</div>
        <form className="card-body" onSubmit={submitForm} style={{padding :'20px 70px 20px 70px'}}>
            <h2>Forgot password</h2>
            <br></br>

            <div className="mb-4">
                <p id='passworderror' style={{
                color : "red",
                visibility : isExists ? "hidden":"visible"
                }}>
                Email id not exists
                </p>
                <input className="form-control" type="email" name = "emailId"
                placeholder='Enter email address' 
                required title="Please enter your email address"/>
            </div>

            <button className="btn btn-primary w-100 mb-3" type="submit">
                Continue
            </button>

        </form>
        </div>
        </div>
        </div>
             
        </>
    );
}
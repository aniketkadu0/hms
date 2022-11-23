import { useState } from "react";
import AdminService from "../../Services/AdminService";

export default function FacilityChartHtml(props){

    const [id, setId] = useState(props.price.id)
    const [facility, setFacility] = useState(props.price.room);
    const [price, setPrice] = useState(props.price.price);

    const handlechange = (e) => {
        let value = e.target.value
        if(e.target.name === "roomprice"){
            setPrice(value)
        }
    }

    const handleUpdate = () => {
        let formvalue = {id , facility , price}
        AdminService.updatefacilityprice(formvalue).then(response => {
            console.log("after update product :" + response)
            alert("Price updated successfully")
        }).catch((err) => {
            console.log(err)
            alert("Something went wrong")
        })
    }

    return(
        <tr>
            <td>{props.price.id}</td>
            <td >{props.price.facility}</td>
                <td>
                <input className="form-control"
                type = "number"
                name = "roomprice" 
                defaultValue={price}
                onChange ={handlechange}
                />
                </td> 
            <td>
                <button className="btn btn-success" onClick={handleUpdate}>Update price</button>
            </td>                      
        </tr>
                      
    );
}
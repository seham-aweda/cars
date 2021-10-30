import React from 'react';
import axios from 'axios';
import OneEmployee from "./oneEmployee";

const Employees = ({data}) => {
    const [Employee,setEmployee]=React.useState([])
    const [TempUser,setTempUser]=React.useState(null)

    React.useEffect(()=> {
        GetEmployee()

    },[])
    React.useEffect(()=> {
data(Employee)
    },[Employee])


    const GetEmployee = async ()=>{
        let results= await axios.get("https://617aedfecb1efe00170100ca.mockapi.io/clients");
        setEmployee(results.data);
    }

    const change=(e)=>{
        let ids;
        let chosen=Employee.find((user)=>{
            if(e.target.value===user.name){
                ids=user.id
                return user
            }
        })
        console.log(ids)
        setTempUser(chosen)
    }

    return(
        <>
        <div style={{marginLeft:'11vw'}}>
            <h1>Employee Status:</h1>
            <br/>
            { Employee? <div className={"employee"} >
            <select onChange={change}>
            <option>any</option>
                {Employee.map((person) => {
                    return <option key={person.id} >{person.name}</option>
                })
                }
        </select>
            </div> :"loading"
            }
            {TempUser ? <div><OneEmployee person={TempUser} /> </div>:""}
        </div></>
    )
}
export default Employees;
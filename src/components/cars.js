import React from 'react';
import axios from 'axios';

const CarsPIc = ({data}) => {
    const [Cars,setCars]=React.useState(null)
    const [SeniorGold,setSeniorGold]=React.useState([])
    const [SeniorNotGold,setSeniorNotGold]=React.useState([])
    const [NotSeniorGold,setNotSeniorGold]=React.useState([])
    const [NotSeniorNotGold,setNotSeniorNotGold]=React.useState([])
    const [TempName,setTempName]=React.useState("")

    // const [truthy,setTruthy]=React.useState(false)
    React.useEffect(()=> {
        GetCars()

    },[])
    const GetCars = async ()=>{
        let results= await axios.get("https://617c0238d842cf001711c1cc.mockapi.io/cars");
            console.log(results);
        (results.data).map((car)=>{
            return(car.isAvailible=true,car.rentDetails.name="")
        })
console.log(results.data)
setCars(results.data);
    }
    React.useEffect(()=>{
        filtered()
    },[data])

const filtered=()=>{
    let filteredBySeniorGold=data.filter(person=>{
        return (person.isSenior===true && person.salary>=30000)
    })
    setSeniorGold(filteredBySeniorGold)

    let filteredBySeniorNotGold=data.filter(person=>{
        return (person.isSenior===true && person.salary<30000)
    })
    setSeniorNotGold(filteredBySeniorNotGold)

    let filteredByNotSeniorGold=data.filter(person=>{
        return (person.isSenior===false && person.salary>=30000)
    })
    setNotSeniorGold(filteredByNotSeniorGold)

    let filteredByNotSeniorNotGold=data.filter(person=>{
        return (person.isSenior===false && person.salary<30000)
    })
    setNotSeniorNotGold(filteredByNotSeniorNotGold)
}
    const change=(e)=>{
        setTempName(e.target.value)
    }
     const click=(e)=>{
        console.log(e.target.name)
         if(TempName) {
             let SS = (Cars.map(car => {
                 if (e.target.name === car.id) {
                     car.isAvailible = false
                     car.rentDetails.name = TempName
                     return car
                 } else {
                     return car
                 }
             }))
             setCars(SS)
         }
         setTempName("")
     }

    return(
        <div style={{marginLeft:'11vw'}}>
            {console.log('TempName',TempName)}
        { Cars? <div className={"cars"}>
            {Cars.map((car) => {
                return <div style={{marginBottom: "10px",display:"flex",width:"fit-content",height:"fit-content"}}>
                    <img alt={car.name} src={car.avatar} width={"30%"} height={"30%"} />
                    <div><p><b><i>Car Type : </i></b>{car.name}</p>
                        <p style={{textDecoration:car.isAvailible ? "none" : "line-through"}}><b><i>isAvailible : </i></b><span style={{color:car.isAvailible ? "green" : "red"}}>{car.isAvailible ? "Yes" : "No"}</span></p>
                        <p style={{textDecoration:car.isGold ? "none" : "line-through"}}><b><i>For Gold Employee : </i></b><span style={{color:car.isGold ? "green" : "red"}}>{car.isGold ? "Yes" : "No"}</span></p>
                        <p style={{textDecoration:car.isSenior ? "none" : "line-through"}}><b><i>For Seniors : </i></b><span style={{color:car.isSenior ? "green" : "red"}}>{car.isSenior ? "Yes" : "No"}</span></p>
                        <p><b><i>Rent Details : </i></b>{car.rentDetails.name}</p>
                        {car.isAvailible ? <input type={"button"} name={car.id} value={"Rent"} onClick={click}/> : <span style={{color:"red"}}>Not Availible</span>}
                        <div>
                            {car.isAvailible ?
                                (car.isGold===true && car.isSenior===true)? <div>
                        { <select onChange={change} >
                            <option>any</option>
                            {SeniorGold.map(u => {
                               return  <option key={u.id}>{u.name}</option>
                            })}

                        </select>}
                            </div>:""
                            :""}
                             {car.isAvailible ?(car.isGold===false && car.isSenior===false)?<div>
                        { <select onChange={change}>
                            <option>any</option>
                            {NotSeniorNotGold.map(u => {
                               return  <option key={u.id}>{u.name}</option>
                            })}

                        </select>}
                            </div>:""
                       :"" }   {car.isAvailible ?(car.isGold===false && car.isSenior===true)?<div>
                        { <select onChange={change}>
                            <option>any</option>
                            {SeniorNotGold.map(u => {
                               return  <option key={u.id}>{u.name}</option>
                            })}

                        </select>}
                            </div>:""
                        :""}   {car.isAvailible ?(car.isGold===true && car.isSenior===false)?<div>
                        { <select onChange={change}>
                            <option>any</option>
                            {NotSeniorGold.map(u => {
                               return  <option key={u.id}>{u.name}</option>
                            })}

                        </select>}
                            </div>:""
                        :""}
                    </div>

                    </div>

                </div>
            })

            }
        </div> :"loading"
        }

        </div>
            )
}
export default CarsPIc;
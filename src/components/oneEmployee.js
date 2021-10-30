import React from "react";

export default function OneEmployee({person}) {

    return (
        <div key={person.id}>

            <div><img alt={person.name} src={person.avatar} width={"70%"} height={"70%"}/>
                <div><p><b><i>Employee Name : </i></b>{person.name}</p>
                    <p><b><i>isActive : </i></b>{person.isAcive ? "Remote Job" : "Office Job"}</p>
                    <p><b><i>Salary : </i></b>{person.salary}</p>
                    <p><b><i>Experience : </i></b>{person.isSenior ? "More than 3 years" : "Less than 3 years"}</p>
                    <p><b><i>Department : </i></b>{person.department}</p>
                </div>
            </div>
        </div>
    )
}
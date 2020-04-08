import React from 'react'

export const DoctorRow = ({d}) =>{
    console.log(d);
    return (
        <tr>
            <th>{d.names}</th>
            <th>{d.father_lastname} {d.mother_lastname}</th>
            <td>{d.rut}</td>
            <td>{d.medic_field}</td>
        </tr>
    )
}
    

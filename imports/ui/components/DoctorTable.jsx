import React, {Fragment, useState} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Doctors } from '../../api/doctors'

export const DoctorTable = ({doctors}) => {
    return (
        <Fragment>
            <h2 className="title">Lista de Doctores</h2>
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Rut</th>
                        <th>Especialidad</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((d,i)=>{
                        return (
                            <tr key={i}>
                                <th>{d.names}</th>
                                <th>{d.father_lastname} {d.mother_lastname}</th>
                                <td>{d.rut}</td>
                                <td>{d.medic_field}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}
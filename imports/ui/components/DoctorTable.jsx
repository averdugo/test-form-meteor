import React, {Fragment, useState} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Doctors } from '../../api/doctors'
import { DoctorRow } from './DoctorRow';

export const DoctorTable = ({doctors}) => {
     console.log(doctors);
     

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
                    {doctors.map(d=>{
                        <DoctorRow 
                            key={d.id}
                            doctor={d}
                        />
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}
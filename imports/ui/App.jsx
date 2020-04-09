import React, {Fragment, useState} from 'react';
import { Formulario } from './components/Formulario';
import { DoctorTable } from './components/DoctorTable';
import { Doctors } from '../api/doctors';



export const App = ({mongoDoctors}) => {
	const [doctors, saveDoctor] = useState(mongoDoctors)

	const createDoctor = doctor => {
		saveDoctor([
			...doctors,
			doctor
		]);
		Doctors.insert(doctor);
	}
	

	return	(
		<Fragment>
			<section className="hero">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">Administrador de Medicos</h1>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container is-fluid">
					<div className="columns">
						<div className="column">
							<Formulario
								createDoctor = {createDoctor}
							/>
						</div>
						<div className="column">
							<DoctorTable
								doctors = {mongoDoctors}
							/>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	)
};
 
import React, {Fragment, useState} from 'react';
import { Formulario } from './components/Formulario';
import { DoctorTable } from './components/DoctorTable';
import { DoctorRow } from './components/DoctorRow';

import { Doctors } from '../api/doctors'
import { withTracker } from 'meteor/react-meteor-data';

export const App = () => {
	
	const mongoDoctors = Doctors.find({}).fetch()

	const [doctors, saveDoctor] = useState(mongoDoctors)

	const createDoctor = doctor => {
		saveDoctor([
			...doctors,
			doctor
		]);
		Doctors.insert(doctor);
		console.log(Doctors.find({}).fetch());
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
								doctors = {doctors}
							/>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	)
};
 
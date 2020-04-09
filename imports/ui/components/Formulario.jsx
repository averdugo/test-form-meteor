import React, {Fragment,useState} from 'react';
import { useForm } from 'react-hook-form';
import '../../api/especialidadesMedicas';
import { Doctors } from '../../api/doctors';
const { validate } = require('rut.js');

export const Formulario = ({createDoctor}) => {
    const [doctor, updateDoctor] = useState({
        names: '',
        father_lastname: '',
        mother_lastname: '',
        rut: '',
        medic_field: ''
    });

    const updateState = e =>{
        updateDoctor({
            ...doctor,
            [e.target.name] : e.target.value
        })
    }

    const { names, father_lastname, mother_lastname, rut, medic_field} = doctor;

    const { register, handleSubmit, errors, setError } = useForm(); 
    const onSubmit = data => {
        if (!validate (data.rut) ) {
            setError("rut", 'notMatch',"Rut Incorrecto")
            return
        }
        data.id = Math.round(Math.random()*10);
        createDoctor(data)
        updateDoctor({
            names: '',
            father_lastname: '',
            mother_lastname: '',
            rut: '',
            medic_field: ''
        })
    };

    return (
        <Fragment>
            <h2 className="title">Formulario</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label className="label">Nombres</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            name="names" 
                            className="input" 
                            type="text" 
                            ref={register({ required: true })}
                            onChange={updateState}
                            value={names}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        <p className="help is-danger">{errors.names && errors.names.message}</p>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Apellido Paterno</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            name="father_lastname" 
                            className="input" 
                            type="text" 
                            ref={register({ required: true })}
                            onChange={updateState}
                            value={father_lastname}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        
                    </div>
                </div>
                <div className="field">
                    <label className="label">Apellido Materno</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            name="mother_lastname"  
                            className="input" 
                            type="text" 
                            ref={register({ required: true })}
                            onChange={updateState}
                            value={mother_lastname}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        
                    </div>
                </div>
                <div className="field">
                    <label className="label">Rut</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            name="rut"  
                            className="input" 
                            type="text" 
                            ref={register({ required: true })}
                            onChange={updateState}
                            value={rut}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        <p className="help is-danger">{errors.rut && errors.rut.message}</p>
                        
                    </div>
                </div>


                <div className="field">
                    <label className="label">Especialidad Medica</label>
                    <div className="control">
                        <div className="select">
                        <select
                            name="medic_field"
                            ref={register({ required: true })}
                            onChange={updateState}
                            value={medic_field}
                        >
                            {especialidadesMedicas.map((field, i)=>{
                                return(
                                    <option  key={i} value={field.nombre}>{field.nombre}</option>
                                )
                            })}
                        </select>
                        </div>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button type="submit" className="button is-link">Guardar</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Resetear</button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

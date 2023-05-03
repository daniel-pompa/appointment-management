import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  disableDatesPreviousToCurrentDate,
  formattedDate,
  generateID,
} from '../helpers';
import Alert from './Alert';

const Form = ({ patients, setPatients }) => {
  // Patient initial state
  const [pet, setPet] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [symptoms, setSymptoms] = useState('');

  // Create state of error alert
  const [error, setError] = useState(false);

  // Function that is executed when the user submits the form
  const handleSubmit = e => {
    e.preventDefault();
    // Validate form
    if ([pet, owner, phone, email, date, time, symptoms].includes('')) {
      setError(true);
      return;
    }

    // Remove previous error alert
    setError(false);

    // Create patient object
    const object = {
      pet,
      owner,
      phone,
      email,
      date: formattedDate(date), // Change date format
      time,
      symptoms,
      id: generateID(),
    };

    // Create a new appointment and add it to the main state in App.jsx
    setPatients([...patients, object]);

    // Reset form
    setPet('');
    setOwner('');
    setPhone('');
    setEmail('');
    setDate('');
    setTime('');
    setSymptoms('');
  };

  return (
    <div className='md:w-1/2 lg:w-2/5 my-8'>
      <h2 className='text-2xl text-gray-600 text-center font-black uppercase'>
        Citas Pacientes
      </h2>
      <p className='text-sm text-center text-gray-600 font-bold uppercase mt-2 pb-4'>
        Formulario nuevas {''}
        <span className='main-color'>citas</span>
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-lg rounded-md mx-3 p-4'
      >
        {/* Display alert to validate the form in case of errors */}
        {error && <Alert message='Todos los campos son obligatorios' />}
        <div className='my-4'>
          <label htmlFor='pet' className='block text-gray-600 font-bold'>
            Nombre Mascota
          </label>
          <input
            id='pet'
            type='text'
            placeholder='Nombre de la mascota'
            className='w-full text-gray-500 border-2 p-1 mt-1 rounded-md'
            value={pet}
            onChange={e => setPet(e.target.value)}
          />
        </div>

        <div className='my-4'>
          <label htmlFor='owner' className='block text-gray-600 font-bold'>
            Nombre Propietario
          </label>
          <input
            id='owner'
            type='text'
            placeholder='Nombre del propietario'
            className='w-full text-gray-500 border-2 p-1 mt-1 rounded-md'
            value={owner}
            onChange={e => setOwner(e.target.value)}
          />
        </div>

        <div className='my-4'>
          <label htmlFor='phone' className='block text-gray-600 font-bold'>
            Teléfono
          </label>
          <input
            id='phone'
            type='tel'
            placeholder='Teléfono de contacto'
            pattern='[0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}'
            className='w-full text-gray-500 border-2 p-1 mt-1 rounded-md'
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <small className='text-gray-600 font-bold'>
            Formato: 648 45 67 89
          </small>
        </div>

        <div className='my-4'>
          <label htmlFor='email' className='block text-gray-600 font-bold'>
            Correo electrónico
          </label>
          <input
            id='email'
            type='email'
            placeholder='Correo electrónico de contacto'
            className='w-full text-gray-500 border-2 p-1 mt-1 rounded-md'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='my-4'>
          <label htmlFor='date' className='block text-gray-600 font-bold'>
            Fecha
          </label>
          <input
            id='date'
            type='date'
            min={disableDatesPreviousToCurrentDate()}
            className='w-full text-gray-500 border-2 p-1 mt-1 rounded-md'
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>

        <div className='my-4'>
          <label htmlFor='time' className='block text-gray-600 font-bold'>
            Hora
          </label>
          <input
            id='time'
            type='time'
            min='09:00'
            max='18:00'
            className='w-full text-gray-500 border-2 p-1 mt-1 rounded-md'
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          <small className='text-gray-600 font-bold'>
            Horario 9:00 a 18:00
          </small>
        </div>

        <div className='my-4'>
          <label htmlFor='symptoms' className='block text-gray-600 font-bold'>
            Síntomas
          </label>
          <textarea
            id='symptoms'
            placeholder='Descripción de los síntomas'
            className='w-full text-gray-500 border-2 p-1 mt-1 rounded-md'
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type='submit'
          className='w-full text-sm text-white font-bold uppercase hover:bg-sky-400 cursor-pointer transition-all rounded-md mb-3 p-3 main-background-color'
        />
      </form>
    </div>
  );
};

Form.propTypes = {
  patients: PropTypes.array.isRequired,
  setPatients: PropTypes.func.isRequired,
};

export default Form;

import PropTypes from 'prop-types';

const Patient = ({ patient, setPatient }) => {
  /* Destructuring.
  Extract values from the patient object */
  const { pet, owner, phone, email, date, time, symptoms } = patient;

  return (
    <div className='bg-white shadow-lg rounded-md mx-3 mb-5 p-4'>
      <p className='text-gray-600 font-bold my-4'>
        Mascota: {''}
        <span className='font-normal text-gray-500'>{pet}</span>
      </p>

      <p className='text-gray-600 font-bold my-4'>
        Propietario: {''}
        <span className='font-normal text-gray-500'>{owner}</span>
      </p>

      <p className='text-gray-600  font-bold my-4'>
        Teléfono: {''}
        <span className='font-normal text-gray-500'>{phone}</span>
      </p>

      <p className='text-gray-600 font-bold my-4'>
        Correo electrónico: {''}
        <span className='font-normal text-gray-500'>{email}</span>
      </p>

      <p className='text-gray-600 font-bold my-4'>
        Fecha: {''}
        <span className='font-normal text-gray-500'>{date}</span>
      </p>

      <p className='text-gray-600 font-bold my-4'>
        Hora: {''}
        <span className='font-normal text-gray-500'>{time}</span>
      </p>

      <p className='text-gray-600 font-bold my-4'>
        Síntomas: {''}
        <span className='font-normal text-gray-500'>{symptoms}</span>
      </p>

      {/* Buttons to edit or delete a patient's appointment */}
      <div className='flex justify-between my-5'>
        <button
          type='button'
          className='text-white text-sm font-bold uppercase main-background-color hover:bg-sky-400 py-2 rounded-md transition-all cursor-pointer w-32'
          onClick={() => setPatient(patient)} // Place the patient in the main state in App.jsx
        >
          Editar
        </button>
        <button
          type='button'
          className='text-white text-sm font-bold uppercase bg-red-500 hover:bg-red-600 py-2 rounded-md transition-all cursor-pointer w-32'
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

Patient.propTypes = {
  patient: PropTypes.object.isRequired,
  setPatient: PropTypes.func.isRequired,
};

export default Patient;

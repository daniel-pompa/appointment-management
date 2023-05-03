import PropTypes from 'prop-types';

const Patient = ({ patient }) => {
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
    </div>
  );
};

Patient.propTypes = {
  patient: PropTypes.object.isRequired,
};

export default Patient;

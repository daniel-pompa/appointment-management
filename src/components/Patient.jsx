import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Patient = ({ patient, setPatient, deletePatient }) => {
  /* Destructuring.
  Extract values from the patient object */
  const { pet, owner, phone, email, date, time, symptoms, id } = patient;

  // SweetAlert2
  const MySwal = withReactContent(Swal);

  // Function that is executed when the user delete a patient's appointment
  const handleDelete = () => {
    // Alert to confirm or cancel to delete a patient's appointment
    MySwal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás recuperar la cita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#3085d6',
      confirmButtonText: '¡Sí, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then(result => {
      if (result.isConfirmed) {
        MySwal.fire('¡Eliminada!', 'La cita ha sido eliminada', 'success');
        deletePatient(id);
      }
    });
  };

  return (
    <div className='bg-white dark:bg-slate-700 shadow-lg rounded-md mx-3 mb-5 p-4'>
      <p className='text-gray-600 dark:text-slate-300 font-bold my-4'>
        Mascota: {''}
        <span className='font-normal text-gray-500 dark:text-slate-300'>
          {pet}
        </span>
      </p>

      <p className='text-gray-600 dark:text-slate-300 font-bold my-4'>
        Propietario: {''}
        <span className='font-normal text-gray-500 dark:text-slate-300'>
          {owner}
        </span>
      </p>

      <p className='text-gray-600 dark:text-slate-300 font-bold my-4'>
        Teléfono: {''}
        <span className='font-normal text-gray-500 dark:text-slate-300'>
          {phone}
        </span>
      </p>

      <p className='text-gray-600 dark:text-slate-300 font-bold my-4'>
        Correo electrónico: {''}
        <span className='font-normal text-gray-500 dark:text-slate-300'>
          {email}
        </span>
      </p>

      <p className='text-gray-600 dark:text-slate-300 font-bold my-4'>
        Fecha: {''}
        <span className='font-normal text-gray-500 dark:text-slate-300'>
          {date}
        </span>
      </p>

      <p className='text-gray-600 dark:text-slate-300 font-bold my-4'>
        Hora: {''}
        <span className='font-normal text-gray-500 dark:text-slate-300'>
          {time}
        </span>
      </p>

      <p className='text-gray-600 dark:text-slate-300 font-bold my-4'>
        Síntomas: {''}
        <span className='font-normal text-gray-500 dark:text-slate-300'>
          {symptoms}
        </span>
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
          onClick={handleDelete}
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
  deletePatient: PropTypes.func.isRequired,
};

export default Patient;

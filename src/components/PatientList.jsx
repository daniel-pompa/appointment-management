import PropTypes from 'prop-types';
import Patient from './Patient';

const PatientList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 my-8 md:h-screen custom-scrollbar custom-scrollbar-firefox'>
      <div className='sticky top-0 bg-gray-100'>
        {patients && patients.length ? (
          <>
            <h2 className='text-2xl text-gray-600 text-center font-black uppercase'>
              Lista Pacientes
            </h2>
            <p className='text-sm text-center text-gray-600 font-bold uppercase mt-2 pb-4'>
              Administrar citas {''}
              <span className='main-color'>Pacientes</span>
            </p>
          </>
        ) : (
          <>
            <h2 className='text-2xl text-gray-600 text-center font-black uppercase'>
              No hay citas
            </h2>
            <p className='text-sm text-center text-gray-600 font-bold uppercase mt-2'>
              Crea una nueva {''}
              <span className='main-color'>Cita</span>
            </p>
          </>
        )}
      </div>

      {/* Iterate patient array and display in patient list */}
      {patients.map(patient => (
        <Patient
          key={patient.id}
          patient={patient}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      ))}
    </div>
  );
};

PatientList.propTypes = {
  patients: PropTypes.array.isRequired,
  setPatient: PropTypes.func.isRequired,
  deletePatient: PropTypes.func.isRequired,
};

export default PatientList;

import Patient from './Patient';

const PatientList = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 my-8 md:h-screen overflow-y-scroll'>
      <div className='sticky top-0 bg-gray-100'>
        <h2 className='text-2xl text-gray-600 text-center font-black uppercase'>
          Lista Pacientes
        </h2>
        <p className='text-sm text-center text-gray-600 font-bold uppercase mt-2 pb-4'>
          Administrar citas {''}
          <span className='main-color'>Pacientes</span>
        </p>
      </div>

      {/* Patient appointment list */}
      <Patient />
      <Patient />
      <Patient />
      <Patient />
    </div>
  );
};

export default PatientList;

const Patient = () => {
  return (
    <div className='bg-white shadow-lg rounded-md mx-3 mb-5 p-4'>
      <p className='text-gray-600 font-bold my-4'>
        Mascota: {''}
        <span className='font-normal text-gray-500'>Hook</span>
      </p>

      <p className='text-gray-600 font-bold my-4'>
        Propietario: {''}
        <span className='font-normal text-gray-500'>Daniel Pompa Pareja</span>
      </p>

      <p className='text-gray-600  font-bold my-4'>
        Teléfono: {''}
        <span className='font-normal text-gray-500'>648 11 99 50</span>
      </p>

      <p className='text-gray-600 font-bold my-4'>
        Correo electrónico: {''}
        <span className='font-normal text-gray-500'>
          daniel.pompa@gmail.com
        </span>
      </p>

      <p className='text-gray-600 font-bold my-4'>
        Fecha: {''}
        <span className='font-normal text-gray-500'>18/04/2023</span>
      </p>

      <p className='text-gray-600 font-bold my-4'>
        Hora: {''}
        <span className='font-normal text-gray-500'>17:30</span>
      </p>

      <p className='text-gray-600 font-bold my-4'>
        Síntomas: {''}
        <span className='font-normal text-gray-500'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </span>
      </p>
    </div>
  );
};

export default Patient;

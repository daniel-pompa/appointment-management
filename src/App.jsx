import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';

function App() {
  /* Create state of patients
  It starts as an empty array and is filled with the data entered in the form */
  const [patients, setPatients] = useState([]);

  return (
    <div className='container mx-auto'>
      <Header />
      <div className='md:flex'>
        <Form patients={patients} setPatients={setPatients} />
        <PatientList />
      </div>
    </div>
  );
}

export default App;

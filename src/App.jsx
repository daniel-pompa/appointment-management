import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';

function App() {
  /* Create state of patients
  It starts as an empty array and is filled with the data entered in the form */
  const [patients, setPatients] = useState([]);

  /* Create the patient state
  It starts as an empty object
  When clicking the edit button of Patient.jsx component will populate the object */
  const [patient, setPatient] = useState({});

  return (
    <div className='container mx-auto'>
      <Header />
      <div className='md:flex'>
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList patients={patients} setPatient={setPatient} />
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';

function App() {
  /* Create state of patients
  Starts with patients stored in localStorage or with an empty array and will be filled with the data entered in the form */
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem('patients')) || []
  );

  /* Create the patient state
  It starts as an empty object
  When clicking the edit button of Patient.jsx component will populate the object */
  const [patient, setPatient] = useState({});

  // Patients useEffect
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  // Function to delete a patient's appointment
  const deletePatient = id => {
    const updatedPatients = patients.filter(patient => patient.id !== id);
    setPatients(updatedPatients);
  };

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
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;

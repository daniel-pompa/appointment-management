import { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';

function App() {
  /* Create state of patients
  It starts with patients stored in localStorage or with an empty array and will be filled with the data entered in the form */
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem('patients')) || []
  );

  /* Create the patient state
  It starts as an empty object
  When clicking the edit button of Patient.jsx component will populate the object */
  const [patient, setPatient] = useState({});

  // Create theme state
  const [theme, setTheme] = useState('');

  // Theme useEffect
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Patients useEffect
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  // Function to delete a patient's appointment
  const deletePatient = id => {
    const updatedPatients = patients.filter(patient => patient.id !== id);
    setPatients(updatedPatients);
  };

  // Function to switch to dark or light mode
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='container mx-auto'>
      <Header theme={theme} handleThemeSwitch={handleThemeSwitch} />
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

// Function to disable dates previous to the current date
export const disableDatesPreviousToCurrentDate = () => {
  return new Date(
    new Date().setHours(
      new Date().getHours() - new Date().getTimezoneOffset() / 60
    )
  )
    .toISOString()
    .split('T')[0];
};

// Generate a unique id for each patient
export const generateID = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);
  return random + date;
};

// Change date format
export const formattedDate = date => {
  const newDate = new Date(date);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  return newDate.toLocaleDateString('es-ES', options);
};

// Required format in the date field of the form when update a patient's appointment
export const validDateFormat = date => {
  return date.split('/').reverse().join('-');
};

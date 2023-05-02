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

import PropTypes from 'prop-types';

const Alert = ({ message }) => {
  return (
    <div className='bg-red-500 text-white text-center font-bold uppercase p-3 my-3 rounded-md'>
      <p>{message}</p>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired
};

export default Alert;

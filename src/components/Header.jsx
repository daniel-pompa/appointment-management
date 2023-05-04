import PropTypes from 'prop-types';
import MoonSvg from '../assets/images/moon.svg';
import SunSvg from '../assets/images/sun.svg';

const Header = ({ theme, handleThemeSwitch }) => {
  return (
    <div className='relative'>
      <div className='flex justify-center flex-col md:flex-row mt-10'>
        <h1 className='text-4xl text-center text-gray-600 dark:text-slate-300 font-black uppercase mb-4'>
          Clínica Veterinaria {''}
          <span className='main-color'>React</span>
        </h1>

        {/* Toggle button dark mode */}
        <div className='md:ml-2 flex justify-center'>
          <button
            className='w-8 h-8 flex justify-center items-center button-darkmode'
            onClick={handleThemeSwitch}
          >
            {theme === 'dark' ? (
              <img src={SunSvg} alt='Sun' />
            ) : (
              <img src={MoonSvg} alt='Moon' />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  handleThemeSwitch: PropTypes.func.isRequired,
};

export default Header;

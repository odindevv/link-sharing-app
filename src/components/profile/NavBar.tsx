import { Link } from 'react-router-dom';
import { logoutThunk } from '../../redux/thunks/auth.thunk';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';

type Section = 'Links' | 'Details' | 'Preview';

interface Props {
  section: Section;
  setSection: (newSection: Section) => void;
}

export const NavBar: React.FC<Props> = ({ section, setSection }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <div className='flex justify-between items-center space-x-4 md:space-x-0 bg-white px-4 py-6 rounded-md'>
      <Link to='/'>
        <img
          src='/logo-devlinks-large.svg'
          alt='DevLinks Logo Large'
          className='md:block hidden w-[120px] md:w-[150px]'
        />
        <img
          src='/logo-devlinks-small.svg'
          alt='DevLinks Logo Small'
          className='md:hidden'
        />
      </Link>

      <div className='flex items-center space-x-8 font-semibold'>
        <div className='flex items-center space-x-2 cursor-pointer'>
          <i
            className={`fa-link fas ${
              section === 'Links' ? 'text-purple-600' : 'text-gray-600'
            }`}
            onClick={() => setSection('Links')}
          ></i>
          <h4
            className={`md:block hidden  ${
              section === 'Links' ? 'text-purple-600' : 'text-gray-600'
            }`}
            onClick={() => setSection('Links')}
          >
            Links
          </h4>
        </div>
        <div className='flex items-center space-x-2 cursor-pointer'>
          <i
            className={`fa-user fas ${
              section === 'Details' ? 'text-purple-600' : 'text-gray-600'
            }`}
            onClick={() => setSection('Details')}
          ></i>
          <h4
            className={`md:block hidden  ${
              section === 'Details' ? 'text-purple-600' : 'text-gray-600'
            }`}
            onClick={() => setSection('Details')}
          >
            Profile Details
          </h4>
        </div>
        <div className='flex items-center space-x-2 cursor-pointer'>
          <i className='text-gray-600 fa-eye fas'></i>
          <h4
            className={`md:block hidden  ${
              section === 'Preview' ? 'text-purple-600' : 'text-gray-600'
            }`}
          >
            Preview
          </h4>
        </div>
      </div>
      <div className='cursor-pointer'>
        <i
          onClick={handleLogout}
          className='md:hidden font-semibold text-gray-400 fa-sign-out fas'
        ></i>
        <button
          onClick={handleLogout}
          className='md:block border-2 border-purple-600 hidden bg-white hover:bg-purple-600 px-8 py-2 rounded-md font-semibold text-center text-gray-600 hover:text-white transition-all'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

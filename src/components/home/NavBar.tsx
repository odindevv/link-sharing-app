import { Link } from 'react-router-dom';

export const NavBar = ({}) => {
  return (
    <div className='flex md:flex-row flex-col justify-between items-center md:space-x-4 bg-white px-4 py-6 rounded-md'>
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
      <ul className='flex items-center space-x-4'>
        <li className='text-gray-600 hover:text-purple-600 cursor-pointer'>
          Home
        </li>
        <li className='text-gray-600 hover:text-purple-600 cursor-pointer'>
          Pricing
        </li>
        <li className='text-gray-600 hover:text-purple-600 cursor-pointer'>
          About
        </li>
        <Link
          to='/auth/login'
          className='md:block hidden btn-purple-with-bg text-purple-600 cursor-pointer hover'
        >
          Login
        </Link>
        <Link
          to='/auth/login'
          className='block md:hidden !px-2 btn-purple-with-bg text-purple-600 cursor-pointer hover'
        >
          Login
        </Link>
      </ul>
    </div>
  );
};

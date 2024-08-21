export const NavBar = ({}) => {
  return (
    <div className='flex justify-between items-center space-x-4 md:space-x-0'>
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
      <div className='flex items-center space-x-8 font-semibold'>
        <div className='flex items-center space-x-2 cursor-pointer'>
          <i className='text-gray-400 fa-link fas'></i>
          <h4 className='md:block hidden text-gray-600'>Links</h4>
        </div>
        <div className='flex items-center space-x-2 cursor-pointer'>
          <i className='text-gray-400 fa-user fas'></i>
          <h4 className='md:block hidden text-gray-600'>Profile Details</h4>
        </div>
        <div className='flex items-center space-x-2 cursor-pointer'>
          <i className='text-gray-400 fa-eye fas'></i>
          <h4 className='md:block hidden text-gray-600'>Preview</h4>
        </div>
      </div>
      <div className='cursor-pointer'>
        <i className='md:hidden font-semibold text-gray-400 fa-sign-out fas'></i>
        <button className='md:block border-2 border-purple-600 hidden bg-white hover:bg-purple-600 px-8 py-2 rounded-md font-semibold text-center text-gray-600 hover:text-white transition-all'>
          Logout
        </button>
      </div>
    </div>
  );
};

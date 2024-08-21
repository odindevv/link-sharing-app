import { Links } from './Links';

export const LinksSection = ({}) => {
  return (
    <div className='flex lg:flex-row flex-col justify-evenly items-center lg:items-start lg:space-x-8 lg:space-y-0 mx-14 mt-8'>
      <picture className='lg:flex justify-center items-center hidden bg-white mt-8 md:mt-0 py-8 rounded-md w-[450px]'>
        <img
          src='illustration-phone-mockup.svg'
          className='h-[90%]'
          alt=''
        />
      </picture>
      <div className='flex flex-col flex-1 space-y-4 bg-white px-6 py-8 rounded-md'>
        <div className='space-y-4 pb-6'>
          <h1 className='font-bold text-3xl text-gray-600'>
            Customize your links
          </h1>
          <p className='text-sm gray'>
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <div className='flex flex-col space-y-8'>
          <button className='btn-purple-without-bg'>Add new link</button>
          <div className='flex flex-col space-y-4'>
            <Links />
          </div>
          <button className='btn-purple-with-bg'>Save</button>
        </div>
      </div>
    </div>
  );
};

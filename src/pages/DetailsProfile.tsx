import { FormInput } from '../components/profile/FormInput';
import { NavBar } from '../components/profile/NavBar';

export function DetailsProfile() {
  return (
    <div>
      <NavBar />
      <div className='flex lg:flex-row flex-col justify-evenly items-center lg:items-start lg:space-x-8 lg:space-y-0 mx-14 mt-8'>
        <picture className='lg:flex justify-center items-center hidden bg-white mt-8 md:mt-0 py-8 rounded-md w-[450px] h-[90%]'>
          <img
            src='illustration-phone-mockup.svg'
            className='block h-full object-cover'
            alt=''
          />
        </picture>
        <div className='flex flex-col flex-1 space-y-4 bg-white px-6 py-8 rounded-md'>
          <div className='space-y-4 pb-6'>
            <h1 className='font-bold text-3xl text-gray-600'>
              Profile Details
            </h1>
            <p className='text-sm gray'>
              Add your details to create a personal touch to your profile.
            </p>
          </div>
          <div className='flex flex-col space-y-8'>
            <div className='flex flex-col items-center space-y-2 text-center'>
              <img
                src='https://i.pinimg.com/736x/e7/ec/90/e7ec90954117e1e92293468f861c7334.jpg'
                alt=''
                className='shadow-lg rounded-full w-36 h-36'
              />
              <h3>Profile picture</h3>
            </div>
            <FormInput
              titleH3='First name'
              type='text'
              placeholder='Yordy'
            />
            <FormInput
              titleH3='Last name'
              type='text'
              placeholder='Martinez'
            />
            <FormInput
              titleH3='Email'
              type='email'
              placeholder='odindevv@gmail.com'
            />

            <button className='btn-purple-with-bg'>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

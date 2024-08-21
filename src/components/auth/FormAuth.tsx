import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Swal from 'sweetalert2';

import {
  authLogin,
  authRegisterWithEmailAndPassword,
  authThunkWithGoogle,
} from '../../redux/thunks/auth.thunk';

import { AppDispatch } from '../../redux/store';
import { useForm } from '../../hooks/useForm';

import { InputAuth } from './InputAuth';
import { LabelAuth } from './LabelAuth';

import type {
  Input,
  widthForm,
  heightForm,
  titleForm,
  buttonSubmit,
  paragraphForm,
} from '../../types';

interface Props {
  width: widthForm;
  height: heightForm;
  title: titleForm;
  paragraph: paragraphForm;
  inputs: Array<Input>;
  btnSubmit: buttonSubmit;
}

export const FormAuth: React.FC<Props> = ({
  width,
  height,
  title,
  paragraph,
  inputs,
  btnSubmit,
}) => {
  const initialState = inputs.reduce((acc, input) => {
    acc[input.name] = '';
    return acc;
  }, {} as { [key: string]: string });

  const [formValues, handleInputChange, reset] = useForm({ initialState });

  const isFormLogin = title === 'Login' ? true : false;
  const messageLogin = 'Dont have an account?';
  const messageRegister = 'Already have an account?';

  const dispatch: AppDispatch = useDispatch();

  const handleLoginWithGoogle = () => {
    dispatch(authThunkWithGoogle());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!isFormLogin) {
        dispatch(
          authRegisterWithEmailAndPassword({
            emailAuth: formValues['[Email] Register'],
            passwordAuth: formValues['[Password] Register'],
          })
        );
      } else {
        dispatch(
          authLogin({
            emailAuth: formValues['[Email] Login'],
            passwordAuth: formValues['[Password] Login'],
          })
        )
          .unwrap()
          .then((user) => {
            if (!user) {
              Swal.fire(
                'Invalid Credentials',
                'Please try again with the corrected data.',
                'error'
              );
              return;
            }
            reset();
          });
      }
    } catch (error) {
      console.log('Error during authentication:', error);
    }
  };
  return (
    <form
      className={`bg-white shadow-lg p-8 rounded-md w-[${width}] h-[${height}]`}
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col'>
        <h1 className='mb-4 font-bold text-3xl text-black'>{title}</h1>
        <p className='font-semibold text-gray-500 text-md'>{paragraph}</p>
        <div className='mt-4 text-center'>
          <i
            className='text-[#4285F4] text-3xl cursor-pointer fa-google fab'
            onClick={handleLoginWithGoogle}
          ></i>
        </div>
      </div>
      <div className='flex flex-col space-y-4'>
        {inputs.map((input) => (
          <div
            className='flex flex-col space-y-3'
            key={input.name}
          >
            <LabelAuth title={input.title} />
            <InputAuth
              input={input}
              value={formValues[input.name] || ''}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <div className='flex flex-col pt-8'>
          <button className='bg-purple-600 hover:bg-purple-600/80 shadow-md mb-4 rounded-md w-[95%] h-12 text-center text-white transition-all delay-75'>
            {btnSubmit}
          </button>
          <p className='font-semibold text-center text-gray-500 text-lg'>
            {isFormLogin ? messageLogin : messageRegister}
            <Link
              to={isFormLogin ? '/auth/register' : '/auth/login'}
              className='text-bold text-purple-600'
            >
              {isFormLogin ? ' Create account' : ' Login'}
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

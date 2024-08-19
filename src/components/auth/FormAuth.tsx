import { Link } from 'react-router-dom';

type Units = 'px' | '%';

type widthForm = `${number}${Units}`;
type heightForm = `${number}${Units}`;

type titleForm = 'Login' | 'Register';

type buttonSubmit = 'Log in' | 'Create new account';

type paragraphForm =
  | 'Add your details below to get back into the app'
  | 'Lets get you started sharing your links!';

type TypeInputs = 'text' | 'password' | 'email';

interface Input {
  title: string;
  placeholder: string;
  type: TypeInputs;
}

import { InputAuth } from './InputAuth';
import { LabelAuth } from './LabelAuth';

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
  const isFormLogin = title === 'Login' ? true : false;
  const messageLogin = 'Dont have an account?';
  const messageRegister = 'Already have an account?';
  return (
    <form
      className={`bg-white shadow-lg p-8 rounded-md w-[${width}] h-[${height}]`}
    >
      <div className='flex flex-col'>
        <h1 className='mb-4 font-bold text-3xl text-black'>{title}</h1>
        <p className='font-semibold text-gray-500 text-md'>{paragraph}</p>
        <div className='mt-4 text-center'>
          <i className='text-[#4285F4] text-3xl cursor-pointer fa-google fab'></i>
        </div>
      </div>
      <div className='flex flex-col space-y-4'>
        {inputs.map((input) => (
          <div
            className='flex flex-col space-y-3'
            key={input.title}
          >
            <LabelAuth title={input.title} />
            <InputAuth input={input} />
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

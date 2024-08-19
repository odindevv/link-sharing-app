import { FormAuth } from '../components/auth/FormAuth';
import type { Input } from '../types';

export function RegisterPage() {
  const inputs: Array<Input> = [
    {
      title: 'Email address',
      type: 'email',
      placeholder: 'e.g. odin@gmail.com',
    },
    {
      title: 'Password',
      type: 'password',
      placeholder: 'At least 8 characters',
    },
    {
      title: 'Confirm password',
      type: 'password',
      placeholder: 'At least 8 characters',
    },
  ];
  return (
    <FormAuth
      width='520px'
      height='520px'
      title='Register'
      paragraph='Lets get you started sharing your links!'
      inputs={inputs}
      btnSubmit='Create new account'
    />
  );
}

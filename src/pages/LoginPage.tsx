import { FormAuth } from '../components/auth/FormAuth';

import type { Input } from '../types';

export function LoginPage() {
  const inputs: Array<Input> = [
    {
      title: 'Email address',
      type: 'email',
      placeholder: 'e.g. odin@gmail.com',
    },
    {
      title: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
    },
  ];
  return (
    <FormAuth
      width='420px'
      height='520px'
      title='Login'
      paragraph='Add your details below to get back into the app'
      inputs={inputs}
      btnSubmit='Log in'
    />
  );
}

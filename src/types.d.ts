// auth

type titleForm = 'Login' | 'Register';

type buttonSubmit = 'Log in' | 'Create new account';

type paragraphForm =
  | 'Add your details below to get back into the app'
  | 'Lets get you started sharing your links!';

type Units = 'px' | '%';

type widthForm = `${string}${Units}`;
type heightForm = `${string}${Units}`;

export type TypeInputs = 'text' | 'password' | 'email';

export interface Input {
  title: string;
  placeholder: string;
  type: TypeInputs;
}

// auth

interface authState {
  isAuth: boolean;
  error: string | null;
  loading: boolean;
  userData?: {
    uid: string | null;
    email: string | null;
    displayName?: string | null;
    photoURL?: string | null;
  } | null;
}

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
  name: string;
  title: string;
  placeholder: string;
  type?: TypeInputs;
}

import { Input } from '../../types';

interface InputFieldProps {
  input: Input;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputAuth: React.FC<InputFieldProps> = ({
  input,
  value,
  onChange,
}) => {
  return (
    <input
      className='w-[95%] h-12 input-form'
      type={input.type}
      placeholder={input.placeholder}
      id={input.title}
      name={input.name}
      value={value}
      onChange={onChange}
    />
  );
};

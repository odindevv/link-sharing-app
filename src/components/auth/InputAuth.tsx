type TypeInputs = 'text' | 'password' | 'email';

interface Input {
  title: string;
  placeholder: string;
  type: TypeInputs;
}

interface InputFieldProps {
  input: Input;
}
export const InputAuth: React.FC<InputFieldProps> = ({ input }) => {
  return (
    <input
      className='border-2 border-gray-300/70 p-4 rounded-lg w-[95%] h-12 text-lg outline-purple-700'
      type={input.type}
      placeholder={input.placeholder}
      id={input.title}
    />
  );
};

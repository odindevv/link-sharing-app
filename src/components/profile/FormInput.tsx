interface Props {
  titleH3: string;
  type: string;
  placeholder: string;
}

export const FormInput: React.FC<Props> = ({ titleH3, type, placeholder }) => {
  return (
    <div className='flex flex-col justify-between items-center space-y-2'>
      <h3>{titleH3}</h3>
      <input
        type={type}
        name=''
        id=''
        placeholder={placeholder}
        className='!py-2 text-center input-form'
      />
    </div>
  );
};

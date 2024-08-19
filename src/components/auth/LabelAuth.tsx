interface LabelFieldProps {
  title: string;
}
export const LabelAuth: React.FC<LabelFieldProps> = ({ title }) => {
  return (
    <label
      htmlFor={title}
      className='font-semibold text-sm'
    >
      {title}
    </label>
  );
};

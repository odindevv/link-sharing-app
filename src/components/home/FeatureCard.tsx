interface Props {
  iconName: string;
  title: string;
  paragraph: string;
}

export const FeatureCard: React.FC<Props> = ({
  iconName,
  title,
  paragraph,
}) => {
  return (
    <div className='flex md:flex-row flex-col items-center md:space-x-2 md:text-start'>
      <li className={`${iconName} text-2xl`}></li>
      <div className='flex flex-col'>
        <h3 className='pr-0 md:pr-2 font-bold text-center text-md text-purple-600 md:text-start md:text-xl'>
          {title}
        </h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

import { Link } from 'react-router-dom';

interface Props {
  isAuth: boolean;
}

export const HeroSection: React.FC<Props> = ({ isAuth }) => {
  return (
    <section className='flex lg:flex-row flex-col justify-between items-center space-y-8 lg:space-y-0'>
      <article className='flex flex-col text-center lg:text-start'>
        <h2 className='ml-1 font-bold text-lg text-purple-600 uppercase tracking-wide'>
          Boost your online presence
        </h2>
        <div className='space-y-1 mt-4 font-bold text-black text-xl md:text-3xl lg:text-5xl'>
          <h1 className='lg:w-[90%] leading-tight'>
            Gather <span className='text-purple-600'>Links</span> in a Single
            Place and
            <span className='text-purple-600'> Increase</span> your User
            Engagement
          </h1>
        </div>
        <div className='flex items-center space-x-6 mt-8'>
          <span className='bg-purple-600 w-1 h-14'></span>
          <p className='mt-2 lg:mb-1 font-semibold text-lg'>
            Get your personalizated URL and share across your favorite social
            media for free.{' '}
          </p>
        </div>

        <Link to={isAuth ? '/links' : '/auth/login'}>
          <button className='mx-auto md:mx-0 mt-6 !px-12 !py-4 btn-purple-with-bg lg:self-start'>
            {isAuth ? 'Control Panel' : 'Get Started'}
          </button>
        </Link>
      </article>
      <picture className='w-[250px] lg:w-[650px]'>
        <img
          src='/undraw_social_thinking_re_y8cc.svg'
          alt=''
          className='w-full'
        />
      </picture>
    </section>
  );
};

// export const FeatureCard: React.FC<Props> = ({
//   iconName,
//   title,
//   paragraph,
// }) => {
//   return (
//     <div className='md:flex-row flex-col items-center md:space-x-2 text-center md:text-start'>
//       <li className={`${iconName} text-2xl`}></li>
//       <div className='flex flex-col'>
//         <h3 className='font-bold text-md text-purple-600'>{title}</h3>
//         <p>{paragraph}</p>
//       </div>
//     </div>
//   );
// };

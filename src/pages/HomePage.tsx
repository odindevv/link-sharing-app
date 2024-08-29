import { useSelector } from 'react-redux';
import { NavBar as NavBarPublic } from '../components/home/NavBar';
import { NavBar as NavBarLogged } from '../components/profile/NavBar';
import { RootState } from '../redux/store';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { Footer } from '../components/home/Footer';

export function HomePage() {
  const isAuth = useSelector((state: RootState) => state.authReducer.isAuth);

  return (
    <div className='bg-slate-200/60 py-4 md:p-4 min-h-screen'>
      {isAuth ? <NavBarLogged /> : <NavBarPublic />}
      <div className='space-y-12 mx-2 md:mx-14 mt-8'>
        <HeroSection isAuth={isAuth} />
        <section className='flex lg:flex-row flex-col-reverse items-center lg:items-start space-x-6 space-y-6 bg-white shadow-md px-2 py-4 pt-5 rounded-md min-h-full overflow-hidden'>
          <picture className='mt-4 md:mt-0 ml-4 md:ml-0 h-full'>
            <img
              src='/illustration-phone-mockup.svg'
              alt='Phone Mockup'
              className='w-[250px] lg:w-[650px] h-[480px]'
            />
          </picture>
          <FeaturesSection />
        </section>
      </div>
      <Footer />
    </div>
  );
}

import { FeatureCard } from './FeatureCard';

export const FeaturesSection = ({}) => {
  return (
    <div className='mt-2'>
      <h1 className='font-bold text-2xl text-center md:text-start -tracking-normal'>
        Features
      </h1>
      <div className='gap-4 grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 mt-4'>
        <FeatureCard
          iconName='fa-brands fa-windows'
          title='Customizeable'
          paragraph='Personalize your profile with our widgets from Text, Links, Youtube and many more.'
        />
        <FeatureCard
          iconName='fas fa-link'
          title='One Link'
          paragraph='Get a single link to promote your links to your audience.'
        />
        <FeatureCard
          iconName='fa-solid fa-arrow-trend-up'
          title='Insights'
          paragraph='Get insighting from your audience traffic.'
        />
        <div className='md:pt-4 md:pl-4'>
          <FeatureCard
            iconName='fa-solid fa-dollar-sign'
            title='Free'
            paragraph='Make your own profile not cost.'
          />
        </div>
      </div>
      <div className='flex flex-col space-y-4 mt-8'>
        <h1 className='font-bold text-2xl text-center md:text-start -tracking-tight'>
          What Our Users are Saying
        </h1>
        <div className='flex md:flex-row flex-col items-center md:items-start space-x-4'>
          <img
            src='https://i.pinimg.com/736x/e7/ec/90/e7ec90954117e1e92293468f861c7334.jpg'
            alt=''
            className='shadow-2xl rounded-full w-28 h-28'
          />
          <div className='flex flex-col space-y-1'>
            <p className='font-mediums italic'>
              "I have been using persona for my personal brand and I'm extremely
              happy with the decision, and I am so impressed with the ease of
              use and the professional look it adds to my online presence"
            </p>
            <h4 className='font-semibold text-purple-600'>Erin de Song</h4>
            <p className='pb-6 text-gray-600 text-sm'>
              Product Designer, Illustrator, Streamer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

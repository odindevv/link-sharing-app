import { LinkSelect } from './LinkSelect';

export const Links = ({}) => {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-2'>
          <i className='fa-bars fas gray'></i>
          <h3 className='font-semibold gray'>Link #1</h3>
        </div>
        <div className='flex space-x-2'>
          <h3 className='font-semibold cursor-pointer gray'>Remove</h3>
        </div>
      </div>

      <div className='flex flex-col space-y-12 h-max-[450px] h-min-[250px] overflow-y-auto'>
        <LinkSelect />
      </div>
    </div>
  );
};

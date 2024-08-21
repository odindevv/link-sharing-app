export const LinkSelect = ({}) => {
  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex flex-col'>
        <h4 className='mb-3 font-light gray'>Platform</h4>
        <select
          name=''
          id=''
          className='w-full input-form'
        >
          <option value='instagram'>Instagram</option>
          <option value='facebook'>Facebook</option>
          <option value='github'>Github</option>
        </select>
      </div>
      <div className='flex flex-col'>
        <h4 className='mb-3 font-light gray'>Link</h4>
        <input
          type='text'
          placeholder='https://www.github.com/odindevv'
          className='w-full input-form'
        />
      </div>
    </div>
  );
};

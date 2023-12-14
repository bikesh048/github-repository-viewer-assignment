const NoData: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className='flex items-center justify-center min-h-[80vh]'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold mb-4'>{message}</h2>
        {/* <p className='text-gray-500'>
          There is no data to display at the moment.
        </p> */}
      </div>
    </div>
  );
};

export default NoData;

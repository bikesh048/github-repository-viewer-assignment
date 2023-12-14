const NoData: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className='flex items-center justify-center min-h-[90vh]'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold mb-4'>{message}</h2>
      </div>
    </div>
  );
};

export default NoData;

import { icons } from '../utils/Constants';
import SearchInput from './SearchInput';

const SearchResultHeader: React.FC = () => {
  return (
    <div className='p-[15px] pb-0 md:pr-5 md:pl-10 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center grow pb-5'>
          <span className='hidden md:block text-xl mr-5'>{icons.github}</span>
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default SearchResultHeader;

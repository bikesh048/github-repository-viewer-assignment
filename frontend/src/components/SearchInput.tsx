import { useState } from 'react';
import { icons } from '../utils/Constants';
import { useNavigate, useParams } from 'react-router-dom';
const SearchInput: React.FC = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || '');
  const navigate = useNavigate();

  const searchQueryHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <div
      id='searchbox'
      className='h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0'
    >
      {icons.search}
      <input
        type='text'
        placeholder='GitHub Username'
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        className='grow outline-0 text-black/[0.87]'
      />
      {searchQuery && (
        <span onClick={() => setSearchQuery('')} className='text-sm'>
          {icons.close}
        </span>
      )}
    </div>
  );
};

export default SearchInput;

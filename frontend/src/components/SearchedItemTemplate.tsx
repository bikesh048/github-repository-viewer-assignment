import { RepositoriesData } from '../utils/api';

const SearchedItemTemplate: React.FunctionComponent<{
  data: RepositoriesData;
}> = ({ data }) => {
  return (
    <div className='flex flex-col py-3 max-w-[700px]'>
      <div
        className='group cursor-pointer'
        onClick={() => window.open(data.html_url)}
      >
        <div className='group-hover:underline text-xl text-[#1a0dab] pt-2'>
          {data.name}
        </div>
        <div className='text-sm truncate text-[#202124]'>
          {data.description}
        </div>
      </div>
      <div className='text-sm text-[#4d5156] leading-6 pt-1'>
        <span className='pr-2'>{data.language}</span>
        <a href={data.stargazers_url} className='pr-2'>
          {data.stargazers_count}
        </a>
        <span>{data.updated_at}</span>
      </div>
    </div>
  );
};

export default SearchedItemTemplate;

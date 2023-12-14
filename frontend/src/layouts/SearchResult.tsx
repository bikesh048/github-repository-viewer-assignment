import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import SearchResultHeader from '../components/SearchResultHeader';
import SearchedItemTemplate from '../components/SearchedItemTemplate';
import { useParams } from 'react-router-dom';
import { fetchDataFromApi, RepositoriesData } from '../utils/api';
import NoData from '../components/NoData';
// import Pagination from '../components/Pagination';

const SearchResult: React.FC = () => {
  const [result, setResult] = useState<RepositoriesData[]>([]); // Specify the type for result
  const [error, setError] = useState<string | null>(null);

  const { query, startIndex } = useParams<{
    query: string;
    startIndex: string;
  }>();

  useEffect(() => {
    fetchSearchResults(query);
  }, [query, startIndex]);

  const fetchSearchResults = async (username: string | undefined) => {
    try {
      if (username === undefined) {
        console.error('Username is undefined');
        return;
      }
      const res = await fetchDataFromApi(username);
      setResult(res);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError('User not available');
    }
  };

  if (error) {
    return (
      <div className='flex flex-col min-h-[100vh]'>
        <SearchResultHeader />
        <main className='p-[12px] text-center'>
          <div className='flex text-sm text-[#70757a] mb-3'>
            Repositories of github user - <strong>{query}</strong>
          </div>
          <NoData message={error} />
        </main>
        <Footer />
      </div>
    );
  }

  if (!result.length) {
    return (
      <div className='flex flex-col min-h-[100vh]'>
        <SearchResultHeader />
        <main className='grow p-[12px] pb-0 md:pr-5 md:pl-10'>
          <div className='flex text-sm text-[#70757a] mb-3'>
            Repositories of github user - <strong>{query}</strong>
          </div>
          <NoData message='No data available' />
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <SearchResultHeader />
      <main className='grow p-[12px] pb-0 md:pr-5 md:pl-10'>
        <div className='flex text-sm text-[#70757a] mb-3'>
          Repositories of github user - <strong>{query}</strong>
        </div>
        {result.map((item, index) => (
          <SearchedItemTemplate key={index} data={item} />
        ))}
      </main>
      {/* <Pagination /> */}
      <Footer />
    </div>
  );
};

export default SearchResult;

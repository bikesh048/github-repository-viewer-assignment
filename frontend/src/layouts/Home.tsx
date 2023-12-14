import { Button } from '../components/Button';
import Footer from '../components/Footer';
import HomeHeader from '../components/HomeHeader';
import SearchInput from '../components/SearchInput';

// TODO
// Button feature need to be added

const Home: React.FC = () => {
  return (
    <div className='flex h-[100vh] flex-col'>
      <HomeHeader />
      <main className='grow flex justify-center'>
        <div className='w-full px-5 flex flex-col items-center mt-44'>
          <strong className='text-xl mb-8'>GitHub Repositories</strong>
          <SearchInput />
          <div className='flex gap-2 mt-8'>
            <Button> Repository Search</Button>
            <Button> Trending Repositories</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

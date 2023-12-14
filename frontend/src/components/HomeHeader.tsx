import { icons } from '../utils/Constants';
import { Button } from './Button';
import { url } from '../utils/Constants';

const HomeHeader: React.FunctionComponent = () => {
  return (
    <header className='h-16 flex justify-between md:justify-end items-center gap-4 px-6'>
      <div className='flex gap-4 items-center'>
        <a
          href={url.github}
          target='_blank'
          rel='noopener noreferrer'
          className='text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer'
        >
          GitHub
        </a>
        <Button size='icon' variant='ghost' className='text-xl'>
          {icons.github}
        </Button>
      </div>
    </header>
  );
};

export default HomeHeader;

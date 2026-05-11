import { backgroundImg } from '../assets';

function Notes() {
  return (
    <div className='relative'>
      <div className="fixed z-1 h-screen w-screen">
        <img src={backgroundImg} className="object-cover z-1" alt="" />
      </div>
      <div className='flex items-center justify-center text-4xl z-10 h-screen w-screen'>
        <p>Notes</p>
      </div>
    </div>
  );
}

export default Notes
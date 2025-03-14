import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'
export const ContactSection = () => {
  return (
    <div className='py-16'>
      <div className="container">
        <div className='text-center bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl'>
          <h1 className='text-2xl'>Lets create something special together</h1>
          <p className='text-sm mt-2'>
            Want to bring your next project to life? Let's chat about how we help you achieve your goals.
          </p>
         
          <button className='text-white gap-2 bg-gray-900 px-8 py-2 inline-flex items-center rounded-xl  mt-4'>
            <span className='font-semibold'>
              Contact us
            </span>
            <ArrowUpRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

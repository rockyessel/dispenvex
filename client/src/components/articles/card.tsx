const DisperseArticleCard = () => {
  return (
    <div className='flex flex-col justify-center rounded-2xl shadow-sm bg-white bg-opacity-0 max-w-[357px]'>
      <div className='flex flex-col justify-center pb-5 w-full bg-white rounded-2xl'>
        <img
          src='https://images.mirror-media.xyz/publication-images/8PPrhasBnT8C9o5-dr6cj.png?height=1440&width=2880'
          className='w-full rounded-2xl bg-opacity-10 min-h-[175px]'
        />
        <div className='flex flex-col px-4 mt-6 w-full'>
          <div className='text-xl font-semibold tracking-normal leading-6 text-black text-opacity-80'>
            Introducing the Boost Guild
          </div>
          <div className='flex gap-2 justify-between mt-2'>
            <div className='flex gap-1 justify-between px-2 py-1 rounded-full bg-black bg-opacity-0'>
              <div className='flex justify-center items-center w-4 h-4 rounded-full aspect-square bg-black bg-opacity-10'>
                <div className='shrink-0 h-4 rounded-full shadow-sm bg-white bg-opacity-0' />
              </div>
              <div className='flex-auto text-sm tracking-normal text-black text-opacity-60'>
                RabbitHole
              </div>
            </div>
            <div className='grow justify-center px-2 py-1.5 text-sm tracking-normal rounded-full bg-black bg-opacity-0 text-black text-opacity-40'>
              February 15
            </div>
          </div>
          <div className='mt-5 text-base font-light tracking-normal leading-6 text-black text-opacity-60'>
            Boost’s mission is to increase global economic
            <br />
            opportunities by making crypto more
            <br />
            accessible and meritocratic. As a public good
            <br />
            infrastructure, Boost is not controlled by a<br />
            single entity. Rather, it’s controlled by a group
          </div>
          <div className='flex gap-5 justify-between mt-2.5 text-sm font-semibold leading-5 text-center text-blue-600 whitespace-nowrap'>
            <img
              loading='lazy'
              srcSet='...'
              className='my-auto max-w-full rounded-full shadow-sm aspect-[7.14] w-[142px]'
            />
            <div className='justify-center px-7 py-3 rounded-lg bg-blue-600 bg-opacity-10'>
              Mint
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisperseArticleCard;

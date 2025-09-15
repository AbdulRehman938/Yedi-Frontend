import React from 'react'

const Mirror = () => {
  // Detect mobile view (max-width: 767px)
  // Detect xs (<=425px) and mobile (<=767px) views
  let marginTop = '';
  if (typeof window !== 'undefined') {
    if (window.innerWidth <= 425) {
      marginTop = '9rem';
    } else if (window.innerWidth <= 767) {
      marginTop = '8rem';
    }
  }
  const mobileStyle = marginTop ? { marginTop } : {};
  return (
    <div className='w-full h-[300rem] bg-secondary flex flex-col justify-start items-center relative top-56'>
      <img
        src="/Mirror1.png"
        alt="mirror1"
        className='w-full h-auto object-contain absolute -top-44 2xl:mb-5 xl:mt-[1.15rem] lg:mt-[4rem] md:mt-[6rem]'
        style={mobileStyle}
      />
      <div
        id='mirror'
        className='
          w-[95%] xs:w-[95%] sm:w-[90%] md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%]
          h-[15rem] mt-44 xs:h-[24rem] sm:h-[15rem] md:h-[25rem] md:mt-20 lg:h-[30rem] xl:h-[45rem] 2xl:h-[55rem]
          bg-black relative z-10 top-[-20rem] rounded-full overflow-hidden flex justify-center items-center
        '
      >
        <img src="/Mirror.svg" alt="mirror" className='w-auto h-[100%] z-0 object-cover absolute' />
        <div className='w-full h-full bg-[#4c4c4c57] absolute z-10'></div>
        <h1 className='absolute text-white text-[2rem] font-black z-10 text-center lg:text-[4rem] md:text-[3rem] '>Your key to <br /> Exceptional Success</h1>
      </div>
    </div>
  )
}

export default Mirror
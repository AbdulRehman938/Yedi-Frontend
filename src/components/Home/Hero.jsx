import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[120vh] 2xl:h-[120vh] relative overflow-hidden'>
      {/* Background path image */}
      {/* Desktop/Tablet path image */}
      <img src="/path.svg" alt="path" className='absolute inset-0 w-full h-auto sm:block hidden object-cover z-0' />
      {/* Mobile path image */}
      <img src="/pathHomeMobile.svg" alt="path mobile" className='absolute inset-0 w-full h-[40rem] mb-[5rem] sm:hidden object-contain z-0' />

      {/* Desktop and tablet layout */}
      <div className='hidden sm:block'>
        {/* Text content section */}
        <div id='top' className='absolute w-[50%] flex flex-col justify-start items-start h-[50%] 
                                z-10
                                2xl:left-[65rem] 2xl:top-[10rem]
                                xl:left-[40rem] xl:top-[8rem]
                                lg:left-[30rem] lg:top-[5rem]
                                md:left-[23rem] md:top-[4rem]'>
          {/* Heading with responsive sizing */}
          <h1 className='text-primary font-bold
                        2xl:text-[10rem] 2xl:leading-[8rem]
                        xl:text-[10rem] xl:leading-[8rem]
                        lg:text-[7rem] lg:leading-[6rem]
                        md:text-[5rem] md:leading-[4rem]'>
            Find Your Restroom
          </h1>

          {/* Subheading with responsive sizing */}
          <p className='text-secondary ml-4
                      2xl:text-5xl 2xl:mt-12
                      xl:text-2xl xl:mt-10
                      lg:text-xl lg:mt-5
                      md:text-lg md:mt-6'>
            Find. Scan. Unlock
          </p>

          {/* Buttons container with responsive sizing */}
          <div className='w-[60%] flex justify-between items-center ml-4
                        2xl:h-24 2xl:mt-12
                        xl:h-16 xl:mt-10
                        lg:h-14 lg:mt-5
                        md:h-12 md:mt-6'>
            {/* Location button */}
            <button className='bg-transparent font-medium border border-primary text-primary rounded-[2rem] 
                            hover:bg-[#b1b1b128] hover:scale-105 ease-in-out duration-300
                            w-[48%] h-[70%] 
                            2xl:text-lg 2xl:py-2 2xl:px-4
                            xl:text-base xl:py-1.5 xl:px-3
                            lg:text-sm lg:py-1 lg:px-3
                            md:text-xs md:py-1 md:px-2'>
              LOCATIONS
            </button>

            {/* Download app button */}
            <button className='bg-primary/80 font-medium text-white rounded-[2rem] 
                            hover:bg-primary hover:scale-105 ease-in-out duration-300
                            w-[48%] h-[70%]
                            2xl:text-xl 2xl:py-2 2xl:px-4
                            xl:text-lg xl:py-1.5 xl:px-3
                            lg:text-sm lg:py-1 lg:px-3
                            md:text-xs md:py-1 md:px-3'>
              DOWNLOAD APP
            </button>
          </div>
        </div>

        {/* Character image with responsive positioning */}
        <img
          src="/Home-character.svg"
          alt="character"
          className='relative z-10
                    2xl:top-[30rem] 2xl:left-[20rem] 2xl:w-[20rem]
                    xl:top-[23rem] xl:left-[15rem] xl:w-[15%]
                    lg:top-[17rem] lg:left-[15rem] lg:w-[15%]
                    md:top-[13rem] md:left-[10rem] md:w-[15%]'
        />
      </div>

      {/* Mobile layout */}
      <div className='sm:hidden flex flex-col items-center justify-start bg-transparent h-full px-4 text-center mt-10 pt-4'>


        {/* Mobile text content */}
        <div className='z-10 flex flex-col items-center bg-transparent'>
          <h1 className='text-primary text-5xl font-bold leading-tight mb-4'>
            Find Your Restroom
          </h1>

          <p className='text-secondary text-xl mb-8'>
            Find. Scan. Unlock
          </p>

         
        </div>
        <img
          src="/Home-character.svg"
          alt="character"
          className='w-[50%] max-w-[250px] mb-8 z-10'
        />
         <div className='flex justify-between items-center w-full gap-4 z-10'>
            <button className='bg-transparent border border-primary text-primary py-2 px-4 rounded-full w-[45%] text-sm font-medium hover:bg-[#b1b1b128]'>
              LOCATIONS
            </button>

            <button className='bg-primary/80 text-white py-2 px-4 rounded-full text-sm font-medium w-[45%] hover:bg-primary'>
              DOWNLOAD APP
            </button>
          </div>
      </div>
    </div>
  )
}

export default Hero
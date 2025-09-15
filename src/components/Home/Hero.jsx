import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[115vh] 2xl:h-[90vh] relative overflow-hidden'>
      {/* Background path image */}
      <img src="/path.svg" alt="path" className='absolute inset-0 w-full h-auto sm:h-auto h-[300px] object-cover z-0' />

      {/* Desktop and tablet layout */}
      <div className='hidden sm:block'>
        {/* Text content section */}
        <div id='top' className='absolute w-[50%] flex flex-col justify-start items-start h-[50%] 
                                z-10
                                2xl:left-[85rem] 2xl:top-[10rem]
                                xl:left-[40rem] xl:top-[8rem]
                                lg:left-[30rem] lg:top-[5rem]
                                md:left-[23rem] md:top-[4rem]'>
          {/* Heading with responsive sizing */}
          <h1 className='text-primary font-bold
                        2xl:text-[15rem] 2xl:leading-[12rem]
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
                        2xl:h-32 2xl:mt-12
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
                    2xl:top-[35rem] 2xl:left-[30rem] 2xl:w-[30rem]
                    xl:top-[23rem] xl:left-[15rem] xl:w-[15%]
                    lg:top-[17rem] lg:left-[15rem] lg:w-[15%]
                    md:top-[13rem] md:left-[10rem] md:w-[15%]'
        />
      </div>

      {/* Mobile layout */}
      <div className='sm:hidden flex flex-col items-center justify-center h-full px-4 text-center mb-[20rem]'>
        {/* Mobile character image - positioned above text */}


        {/* Mobile text content */}
        <div className='z-10 flex flex-col items-center'>
          <h1 className='text-primary text-5xl font-bold leading-tight mb-4'>
            Find Your Restroom
          </h1>

          <p className='text-secondary text-xl mb-8'>
            Find. Scan. Unlock
          </p>

          <div className='flex flex-col w-full gap-4'>
            <button className='bg-transparent border border-primary text-primary py-2 px-4 rounded-full text-sm font-medium hover:bg-[#b1b1b128]'>
              LOCATIONS
            </button>

            <button className='bg-primary/80 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-primary'>
              DOWNLOAD APP
            </button>
          </div>
        </div>
        <img
          src="/Home-character.svg"
          alt="character"
          className='w-[70%] max-w-[250px] mb-8 z-10'
        />
      </div>
    </div>
  )
}

export default Hero
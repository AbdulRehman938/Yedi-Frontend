import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5, ease: 'easeIn' } }
}

const AnimatedItem = ({ children, className }) => {
  const ref = useRef(null)
  const [inView, setInView] = React.useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      <AnimatePresence>
        {inView && (
          <motion.div
            drag
            dragElastic={0.2}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Hero = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
      smoothTouch: true,
      gestureOrientation: 'vertical',
      syncTouch: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 1.2,
      lerp: 0.15,
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className='w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[100vh] 2xl:h-[140vh] relative overflow-hidden'>
      {/* Background path image */}
      <AnimatedItem className='absolute inset-0'>
        <img src="/path.svg" alt="path" className='absolute inset-0 w-full h-auto sm:block 2xl:h-[120vh] xl:h-[100vh] lg:h-[70vh] hidden object-cover z-0' />
      </AnimatedItem>
      <AnimatedItem className='absolute inset-0'>
        <img src="/pathHomeMobile.svg" alt="path mobile" className='absolute inset-0 w-full h-[40rem] mb-[5rem] sm:hidden object-contain z-0' />
      </AnimatedItem>

      {/* Desktop and tablet layout */}
      <div className='hidden sm:block'>
        <AnimatedItem className='absolute w-[50%] flex flex-col justify-start items-start h-[50%] 
                                z-10
                                2xl:left-[65rem] 2xl:top-[10rem]
                                xl:left-[40rem] xl:top-[8rem]
                                lg:left-[30rem] lg:top-[5rem]
                                md:left-[23rem] md:top-[4rem]'>
          <h1 className='text-primary font-bold
                        2xl:text-[10rem] 2xl:leading-[8rem]
                        xl:text-[10rem] xl:leading-[8rem]
                        lg:text-[7rem] lg:leading-[6rem]
                        md:text-[5rem] md:leading-[4rem]'>
            Find Your Restroom
          </h1>
          <p className='text-black ml-4
                      2xl:text-5xl 2xl:mt-12
                      xl:text-2xl xl:mt-10
                      lg:text-xl lg:mt-5
                      md:text-lg md:mt-6'>
            Find. Scan. Unlock
          </p>
          <div className='w-[50%] flex justify-between items-center ml-4
                        2xl:h-24 2xl:mt-12 2xl:w-[45%]
                        xl:h-16 xl:mt-10
                        lg:h-14 lg:mt-5 lg:w-[60%]
                        md:h-12 md:mt-6 md:w-[70%]'>
            <AnimatedItem>
              <button className='bg-transparent font-medium border border-primary text-primary rounded-[2rem] 
                            hover:bg-[#b1b1b128] hover:scale-105 ease-in-out duration-300
                            w-[150%] h-[70%] 
                            2xl:text-lg 2xl:py-2 2xl:px-6 
                            xl:text-base xl:py-1.5 xl:px-3
                            lg:text-sm lg:py-1 lg:px-3
                            md:text-xs md:py-1 md:px-2'>
                LOCATIONS
              </button>
            </AnimatedItem>
            <AnimatedItem>
              <button className='bg-primary/80 font-medium text-white rounded-[2rem] 
                            hover:bg-primary hover:scale-105 ease-in-out duration-300
                            w-[120%] h-[70%]
                            2xl:text-xl 2xl:py-2 2xl:px-4
                            xl:text-lg xl:py-1.5 xl:px-3
                            lg:text-sm lg:py-1 lg:px-3
                            md:text-xs md:py-1 md:px-2'>
                DOWNLOAD APP
              </button>
            </AnimatedItem>
          </div>
        </AnimatedItem>

        <AnimatedItem>
          <img
            src="/Home-character.svg"
            alt="character"
            className='relative z-10
                    2xl:top-[30rem] 2xl:left-[20rem] 2xl:w-[20rem]
                    xl:top-[23rem] xl:left-[15rem] xl:w-[15%]
                    lg:top-[17rem] lg:left-[15rem] lg:w-[15%]
                    md:top-[13rem] md:left-[10rem] md:w-[15%]'
          />
        </AnimatedItem>
      </div>

      {/* Mobile layout */}
      <div className='sm:hidden flex flex-col items-center justify-start bg-transparent h-full px-4 text-center mt-10 pt-4'>
        <AnimatedItem className='z-10 flex flex-col items-center bg-transparent mt-10'>
          <h1 className='text-primary text-6xl font-bold leading-tight mb-4'>
            Find Your Restroom
          </h1>
          <p className='text-black text-xl mb-8'>
            Find. Scan. Unlock
          </p>
        </AnimatedItem>
        <AnimatedItem>
          <img
            src="/Home-character.svg"
            alt="character"
            className='relative w-[65%] ml-6 left-4 max-w-[250px] mb-5 bottom-4 z-20'
          />
        </AnimatedItem>
        <div className='flex justify-between items-center w-[90%] gap-8 z-10'>
          <AnimatedItem>
            <button className='bg-transparent border border-primary text-primary py-2 px-4 rounded-full w-[120%] text-sm font-medium hover:bg-[#b1b1b128]'>
              LOCATIONS
            </button>
          </AnimatedItem>
          <AnimatedItem>
            <button className='bg-primary/80 text-white py-2 px-4 rounded-full text-sm font-medium w-[100%] hover:bg-primary'>
              DOWNLOAD APP
            </button>
          </AnimatedItem>
        </div>
      </div>
    </div>
  )
}

export default Hero

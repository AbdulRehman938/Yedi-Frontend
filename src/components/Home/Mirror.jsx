import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5, ease: 'easeIn' } }
}

const Mirror = () => {
  let marginTop = ''
  if (typeof window !== 'undefined') {
    if (window.innerWidth <= 425) {
      marginTop = '9rem'
    } else if (window.innerWidth <= 767) {
      marginTop = '8rem'
    }
  }
  const mobileStyle = marginTop ? { marginTop } : {}

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
    })
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <div className='w-[100vw] h-[151.5rem] bg-secondary flex flex-col justify-start items-center relative top-56'>
      {/* Fade on first image */}
      <motion.img
        src="/Mirror1.png"
        alt="mirror1"
        className='w-full h-auto object-contain absolute -top-44 2xl:mb-5 xl:mt-[1rem] lg:mt-[4rem] md:mt-[6rem]'
        style={mobileStyle}
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
      />

      {/* Fade on entire mirror div */}
      <motion.div
        id='mirror'
        className='
  w-[95%] xs:w-[95%] sm:w-[90%] md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%]
 h-[35rem] mt-44 sm:h-[25rem] md:h-[25rem] md:mt-20 lg:h-[30rem] xl:h-[40rem] 2xl:h-[55rem]
  bg-transparent relative z-10 top-[-20rem] rounded-full overflow-hidden flex justify-center items-center
'

        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Fade on mirror image */}
        <motion.img
          src="/Mirror.svg"
          alt="mirror"
          className='w-auto h-[100%] z-0 object-cover absolute'
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
        />

        <div className='w-full h-full bg-[#4c4c4c57] absolute z-10'></div>

        {/* Fade on heading */}
        <motion.h1
          className='absolute text-white text-[2rem] font-black z-10 text-center lg:text-[4rem] md:text-[3rem] 2xl:text-[7rem]'
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
        >
          Your key to <br /> Exceptional Success
        </motion.h1>
      </motion.div>


      <div
        id='second'
        className='w-full h-auto flex relative z-20 flex-col justify-center items-start'
      >
        {/* Background assets */}
        <img
          src="/Mirror2.svg"
          alt="Mirror desktop"
          className="hidden sm:block w-full h-auto object-contain absolute z-10 top-[-20rem]
     2xl:top-[-20rem] xl:top-[-18rem] lg:top-[-15rem] md:top-[-12rem] sm:top-[-10rem]"
        />
        <div className="absolute z-10 top-[-30rem]
        w-full h-[10rem] flex flex-col items-center -space-y-[80px] md:hidden">
          <img src="/brownmobile4.svg" alt="Mirror part 4" className="w-full h-auto object-contain" />
          <img src="/brownmobile1.svg" alt="Mirror part 1" className="w-full h-auto object-contain" />
          <img src="/brownmobile2.svg" alt="Mirror part 2" className="w-full h-auto object-contain" />
          <img src="/brownmobile3.svg" alt="Mirror part 3" className="w-full h-auto object-contain" />
        </div>

        {/* FIRST SECTION */}
        <motion.div
          className='absolute z-30 w-full h-auto top-[5rem] 2xl:top-[5rem] xl:top-[-2rem] lg:top-[-7rem] md:top-[2rem] xs:top-[-10rem] xs:h-[10rem] flex flex-col justify-around items-start'
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className='w-[40%] h-auto absolute z-30 
      2xl:left-64 2xl:top-10 xl:left-44 xl:top-0 lg:left-44 lg:top-16 
      md:left-16 md:top-4 sm:left-8 sm:top-3
      xs:relative xs:left-0 xs:top-0 xs:w-[100%] xs:text-2xl xs:mx-auto xs:text-center
      flex flex-col justify-around items-start xs:items-center gap-4'>
            <h1 className='2xl:text-7xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-primary font-bold'>
              We've all been there
            </h1>
            <p className='2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs text-gray-500 font-medium'>
              You're away from home and unsure <br className='xs:hidden' /> where you can <span className='text-black font-medium'>go</span>.
            </p>
          </div>
          <img src="/Home-character2.svg" alt="char2"
            className='absolute z-30
        2xl:left-[70rem] 2xl:top-[1rem] 2xl:h-[30rem] 2xl:w-[20rem]
        xl:left-[50rem] xl:top-[1rem] xl:h-[17rem] xl:w-[17rem]
        lg:left-[45rem] lg:top-[4rem] lg:h-[15rem] lg:w-[15rem]
        md:left-[40rem] md:top-[1rem] md:h-[18rem] md:w-[12rem]
        sm:right-4 sm:top-[1rem] sm:h-[14rem] sm:w-[10rem]
        xs:relative xs:mx-auto xs:mt-[15rem] xs:h-[12rem] xs:w-[9rem]'/>
        </motion.div>

        {/* SECOND SECTION */}
        <motion.div
          className='absolute z-30 w-full h-auto
      2xl:top-[45rem] xl:top-[25rem] lg:top-[15rem] md:top-[30rem] sm:top-[25rem] xs:top-[20rem]
      flex flex-col justify-around items-start'
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src="/Home-character3.svg" alt="char3"
            className='absolute
        2xl:top-[8rem] 2xl:left-[10rem] 2xl:h-[30rem] 2xl:w-[20rem]
        xl:top-[7rem] xl:left-[8rem] xl:h-[26rem] xl:w-[17rem]
        lg:top-[10rem] lg:left-[6rem] lg:h-[15rem] lg:w-[15rem]
        md:top-[5rem] md:left-[4rem] md:h-[18rem] md:w-[12rem]
        sm:top-[4rem] sm:left-[2rem] sm:h-[14rem] sm:w-[10rem]
        xs:relative xs:mx-auto xs:mt-[15rem] xs:order-2 xs:h-[12rem] xs:w-[9rem]'/>
          <div className='w-[40%] h-auto absolute z-30
      2xl:left-[60rem] 2xl:top-[1rem]
      xl:left-[52rem] xl:top-[5rem]
      lg:left-[33rem] lg:top-[2rem]
      md:left-[36rem] md:top-[1rem]
      sm:right-4 sm:top-[1rem] sm:w-[45%]
      xs:relative xs:left-0 xs:top-0 xs:w-[90%] xs:mx-auto xs:text-center xs:order-1
      flex flex-col justify-around items-start xs:items-center gap-4'>
            <h1 className='2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-primary font-bold'>
              A tiny ask shouldn't <br className='xs:hidden' /> feel so big.
            </h1>
            <p className='2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs text-gray-500 font-medium'>
              Waiting in line, holding it in, just to <span className='text-black font-medium'>beg</span> <br className='xs:hidden' />
              for a restroom key. It's awkward. I don't <br className='xs:hidden' />
              want to tell someone I have to evacuate <br className='xs:hidden' /> my bowels.
            </p>
          </div>
        </motion.div>

        {/* THIRD SECTION */}
        <motion.div
          className='absolute z-30 w-full h-auto
      2xl:top-[90rem] xl:top-[65rem] lg:top-[40rem] md:top-[60rem] sm:top-[50rem] xs:top-[40rem]
      flex flex-col justify-around items-start'
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className='w-[40%] h-auto absolute z-30
      2xl:left-64 2xl:top-10 xl:left-44 xl:top-8 lg:left-32 lg:top-20 md:left-16 md:top-4 sm:left-8 sm:top-3
      xs:relative xs:left-0 xs:top-0 xs:w-[90%] xs:mx-auto xs:text-center
      flex flex-col justify-around items-start xs:items-center gap-4'>
            <h1 className='2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-primary font-bold'>
              No more asking permission
            </h1>
            <p className='2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs text-gray-500 font-medium'>
              With Yedi, it's easy go straight in and <br className='xs:hidden' />
              find the bathroom door, scan and <br className='xs:hidden' />
              unlock to find <span className='text-black font-medium'>relief</span>.
            </p>
          </div>
          <img src="/Home-character4.svg" alt="char4"
            className='absolute z-30
        2xl:left-[70rem] 2xl:top-[15rem] 2xl:h-[30rem] 2xl:w-[20rem]
        xl:left-[60rem] xl:top-[11rem] xl:h-[26rem] xl:w-[17rem]
        lg:left-[40rem] lg:top-[9rem] lg:h-[22rem] lg:w-[15rem]
        md:left-[40rem] md:top-[7rem] md:h-[18rem] md:w-[12rem]
        sm:right-4 sm:top-[5rem] sm:h-[14rem] sm:w-[10rem]
        xs:relative xs:mx-auto xs:mt-[15rem] xs:h-[12rem] xs:w-[9rem]'/>
        </motion.div>
      </div>

    </div>
  )
}

export default Mirror

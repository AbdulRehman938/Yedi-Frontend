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
    <div className='w-[100vw] h-[151.5rem] mirror-main bg-secondary flex flex-col justify-start items-center relative top-56 mirror-container'>
      {/* Main top image */}
      <motion.img
        src="/Mirror1.png"
        alt="mirror1"
        className='mirror1-img w-full h-auto object-contain absolute -top-44 2xl:mb-5 xl:mt-[1rem] lg:mt-[4rem] md:mt-[6rem]'
        style={mobileStyle}
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
      />

      {/* Mirror container */}
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
        <motion.img
          src="/Mirror.svg"
          alt="mirror"
          className='mirror-svg w-auto h-[100%] z-0 object-cover absolute'
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
        />
        <div className='w-full h-full bg-[#4c4c4c57] absolute z-10'></div>
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

      <div id='second' className='w-full h-auto flex relative z-20 flex-col justify-center items-start'>
        <img
          src="/Mirror2.svg"
          alt="Mirror desktop"
          className="mirror2-img hidden sm:block w-full h-auto object-contain absolute z-10 top-[-20rem]
            2xl:top-[-20rem] xl:top-[-18rem] lg:top-[-15rem] md:top-[-12rem] sm:top-[-10rem]"
        />
        <div className="absolute z-10 top-[-30rem] w-full h-[10rem] flex flex-col items-center -space-y-[80px] md:hidden">
          <img src="/brownmobile4.svg" alt="Mirror part 4" className="brownmobile4 w-full h-auto object-contain" />
          <img src="/brownmobile1.svg" alt="Mirror part 1" className="brownmobile1 w-full h-auto object-contain" />
          <img src="/brownmobile2.svg" alt="Mirror part 2" className="brownmobile2 w-full h-auto object-contain" />
          <img src="/brownmobile3.svg" alt="Mirror part 3" className="brownmobile3 w-full h-auto object-contain" />
        </div>

        {/* Section 1 */}
        <motion.div className='absolute z-30 w-full h-auto top-[5rem] 2xl:top-[5rem] xl:top-[-2rem] lg:top-[-7rem] md:top-[2rem] xs:top-[-10rem] xs:h-[10rem] flex flex-col justify-around items-start mirror-section1'
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}>
          <div className='w-[40%] h-auto absolute z-30 
            2xl:left-64 2xl:top-10 xl:left-44 xl:top-0 lg:left-44 lg:top-16 
            md:left-16 md:top-4 sm:left-8 sm:top-3
            xs:relative xs:left-0 xs:top-0 xs:w-[100%] xs:text-2xl xs:mx-auto xs:text-center
            flex flex-col justify-around items-start xs:items-center gap-4'>
            <h1 className='2xl:text-7xl section1-h1 xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-primary font-bold section1-heading'>
              We've all been there
            </h1>
            <p className='2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs text-gray-500 font-medium section1-text'>
              You're away from home and unsure <br className='xs:hidden' /> where you can <span className='text-black font-medium'>go</span>.
            </p>
          </div>
          <img src="/Home-character2.svg" alt="char2" className='section1-img absolute z-30 char2-img
            2xl:left-[70rem] 2xl:top-[1rem] 2xl:h-[30rem] 2xl:w-[20rem]
            xl:left-[50rem] xl:top-[1rem] xl:h-[17rem] xl:w-[17rem]
            lg:left-[45rem] lg:top-[4rem] lg:h-[15rem] lg:w-[15rem]
            md:left-[40rem] md:top-[1rem] md:h-[18rem] md:w-[12rem]
            sm:right-4 sm:top-[1rem] sm:h-[14rem] sm:w-[10rem]
            xs:relative xs:mx-auto xs:mt-[15rem] xs:h-[12rem] xs:w-[9rem]'/>
        </motion.div>

        {/* Section 2 */}
        <motion.div className='absolute z-30 w-full h-auto
          2xl:top-[45rem] xl:top-[25rem] lg:top-[15rem] md:top-[30rem] sm:top-[25rem] xs:top-[20rem]
          flex flex-col justify-around items-start'
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}>
          <img src="/Home-character3.svg" alt="char3" className='absolute char3-img
            2xl:top-[8rem] 2xl:left-[10rem] 2xl:h-[30rem] 2xl:w-[20rem]
            xl:top-[7rem] xl:left-[12rem] xl:h-[18rem] xl:w-[17rem]
            lg:top-[10rem] lg:left-[6rem] lg:h-[15rem] lg:w-[15rem]
            md:top-[5rem] md:left-[4rem] md:h-[18rem] md:w-[12rem]
            sm:top-[4rem] sm:left-[2rem] sm:h-[14rem] sm:w-[10rem]
            xs:relative xs:mx-auto xs:mt-[15rem] xs:order-2 xs:h-[12rem] xs:w-[9rem]'/>
          <div className='w-[40%] h-auto absolute z-30
            2xl:left-[60rem] 2xl:top-[1rem]
            xl:left-[45rem] xl:top-[5rem]
            lg:left-[33rem] lg:top-[2rem]
            md:left-[36rem] md:top-[1rem]
            sm:right-4 sm:top-[1rem] sm:w-[45%]
            xs:relative xs:left-0 xs:top-0 xs:w-[90%] xs:mx-auto xs:text-center xs:order-1
            flex flex-col justify-around items-start xs:items-center gap-4'>
            <h1 className='2xl:text-7xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-primary font-bold'>
              A tiny ask shouldn't <br className='xs:hidden' /> feel so big.
            </h1>
            <p className='2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs text-gray-500 font-medium'>
              Waiting in line, holding it in, just to <span className='text-black font-medium'>beg</span> <br className='xs:hidden' />
              for a restroom key. It's awkward. I don't <br className='xs:hidden' />
              want to tell someone I have to evacuate <br className='xs:hidden' /> my bowels.
            </p>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div className='absolute z-30 w-full h-auto
          2xl:top-[90rem] xl:top-[53rem] lg:top-[40rem] md:top-[60rem] sm:top-[50rem] xs:top-[40rem]
          flex flex-col justify-around items-start'
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}>
          <div className='w-[40%] h-auto absolute z-30
            2xl:left-64 2xl:top-10 xl:left-44 xl:top-12 lg:left-32 lg:top-20 md:left-16 md:top-4 sm:left-8 sm:top-3
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
          <img src="/Home-character4.svg" alt="char4" className='absolute z-30 char4-img
            2xl:left-[70rem] 2xl:top-[15rem] 2xl:h-[30rem] 2xl:w-[20rem]
            xl:left-[55rem] xl:top-[11rem] xl:h-[22rem] xl:w-[17rem]
            lg:left-[40rem] lg:top-[9rem] lg:h-[22rem] lg:w-[15rem]
            md:left-[40rem] md:top-[7rem] md:h-[18rem] md:w-[12rem]
            sm:right-4 sm:top-[5rem] sm:h-[14rem] sm:w-[10rem]
            xs:relative xs:mx-auto xs:mt-[15rem] xs:h-[12rem] xs:w-[9rem]'/>
        </motion.div>
      </div>

      {/* DPI-based media queries */}
      <style>{`
        /* Laptop 100% scaling */
        @media (min-resolution: 96dpi) and (max-resolution: 110dpi) {
         .mirror-container { height: 160rem !important; padding-top: 4rem !important; }
          .mirror1-img { top: -30rem !important; width: 95% !important; }
          .mirror-svg { width: 90% !important; }
          .mirror2-img { top: -20rem !important; }
          .brownmobile1, .brownmobile2, .brownmobile3, .brownmobile4 { width: 110% !important; }
          .char2-img { top: 0rem !important; left: 42rem !important; width: 14rem !important; }
          .char3-img { top: 8rem !important; left: 10rem !important; width: 20rem !important; }
          .char4-img { top: 15rem !important; left: 70rem !important; width: 20rem !important; }
          .section1-heading { font-size: 3.8rem !important; margin-left: -2rem !important; }
          .section1-text { font-size: 1.4rem !important; line-height: 2rem !important; }
        }
        /* Laptop 125% scaling */
        @media (min-resolution: 120dpi) and (max-resolution: 130dpi) {
          .mirror-container { height: 80rem !important; padding-top: 10rem !important; }
          .mirror-main { height: 200rem !important; width: 100% !important; }
         #mirror { top: -30rem !important; width: 90% !important; height: 50rem !important; }
          .mirror1-img { top: -10rem !important; width: 100% !important; }
          .mirror-svg { width: 100% !important; }
          .mirror2-img { top: -18rem !important; }
          .brownmobile1, .brownmobile2, .brownmobile3, .brownmobile4 { width: 120% !important; }
          .char2-img { top: 1rem !important; left: 35rem !important; width: 13rem !important; }
          .char3-img { top: 7rem !important; left: 12rem !important; width: 17rem !important; }
          .char4-img { top: 11rem !important; left: 55rem !important; width: 17rem !important; }
          #second { top: -12rem !important; }
       .section1-h1 { font-size: 4rem !important; margin-left: -1rem !important; margin-top: -8rem !important; }
       .section1-img { margin-top: -10rem !important; margin-left: 30rem !important; height: 40rem !important; }
        }

                /* Laptop 150% scaling (~144–160dpi) */
        @media (min-resolution: 144dpi) and (max-resolution: 160dpi) {
         .mirror-container { height: 160rem !important; padding-top: 4rem !important; }
         .mirror1-img { top: -28rem !important; width: 90% !important; }
          .mirror-svg { width: 85% !important; }
          .mirror2-img { top: -18rem !important; }
          .brownmobile1, .brownmobile2, .brownmobile3, .brownmobile4 { width: 120% !important; }
          .char2-img { top: 1rem !important; left: 35rem !important; width: 13rem !important; }
          .char3-img { top: 7rem !important; left: 12rem !important; width: 17rem !important; }
          .char4-img { top: 11rem !important; left: 55rem !important; width: 17rem !important; }
          .section1-heading { font-size: 3.5rem !important; margin-left: -1rem !important; }
          .section1-text { font-size: 1.3rem !important; line-height: 1.9rem !important; }
        }
      `}</style>
    </div>
  )
}

export default Mirror

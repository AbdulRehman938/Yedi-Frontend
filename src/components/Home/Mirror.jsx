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
    <div className='w-full h-[300rem] bg-secondary flex flex-col justify-start items-center relative top-56'>
      {/* Fade on first image */}
      <motion.img
        src="/Mirror1.png"
        alt="mirror1"
        className='w-full h-auto object-contain absolute -top-44 2xl:mb-5 xl:mt-[1.15rem] lg:mt-[4rem] md:mt-[6rem]'
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
          h-[15rem] mt-44 xs:h-[24rem] sm:h-[15rem] md:h-[25rem] md:mt-20 lg:h-[30rem] xl:h-[45rem] 2xl:h-[55rem]
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
    </div>
  )
}

export default Mirror

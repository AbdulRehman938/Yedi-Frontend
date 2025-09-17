import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  exit: { opacity: 0, y: -40, transition: { duration: 1, ease: 'easeIn' } },
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
    <div className="w-full bg-secondary flex flex-col items-center relative pt-56 overflow-visible 2xl:mt-[30rem]">
      <div className="w-full max-w-[1440px] mx-auto relative flex flex-col items-center overflow-visible px-4 sm:px-6 lg:px-8">
        {/* Top overflowing mirror image */}
        <motion.img
          src="/Mirror1.png"
          alt="mirror1"
          className="mirror1-img w-full h-auto object-contain inset-0 z-30 absolute xs:top-[-25rem]"
          style={mobileStyle}
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
        />

        {/* Mirror container */}
        <motion.div
          id="mirror"
          className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[85%] xl:w-[85%] 2xl:w-[95%] max-w-[1440px] z-30 2xl:mt-[-20rem]
                     h-[35rem] sm:h-[28rem] md:h-[30rem] lg:h-[38rem] xl:h-[46rem] 2xl:h-[45rem] xs:top-[-20rem] 
                     bg-transparent relative -mt-20 sm:-mt-10 lg:-mt-32 rounded-[50rem] overflow-hidden flex justify-center items-center"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.img
            src="/Mirror.svg"
            alt="mirror"
            className="mirror-svg w-auto h-full z-0 object-cover absolute max-w-[1440px]"
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
          />
          <div className="w-full h-full bg-[#4c4c4c57] absolute z-10"></div>
          <motion.h1
            className="absolute text-white text-[2rem] font-black z-10 text-center lg:text-[4rem] md:text-[3rem] 2xl:text-[7rem]"
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
          >
            Your key to <br /> Exceptional Success
          </motion.h1>
        </motion.div>

        {/* Sections */}
        <div id="second" className="w-[100vw] max-w-[1440px] relative z-20 flex flex-col overflow-visible mt-[20rem]">
          {/* Mirror background for desktop */}
          <img
            src="/Mirror2.svg"
            alt="Mirror desktop"
            className="hidden sm:block w-full h-auto object-contain absolute z-10
      top-[-20rem] 2xl:top-[-40rem] xl:top-[-10rem] lg:top-[-15rem] md:top-[-12rem] sm:top-[-10rem]"
          />

          {/* Brownmobile pieces for small screens */}
          <div className="absolute z-10 top-[-30rem] w-full h-[10rem] flex flex-col items-center -space-y-[80px] md:hidden">
            <img src="/brownmobile4.svg" alt="Mirror part 4" className="brownmobile4 w-full  max-h-[30rem] mt-[-20rem] object-cover" />
            <img src="/brownmobile1.svg" alt="Mirror part 1" className="brownmobile1 w-full  max-h-[30rem] mt-[-20rem] object-cover" />
            <img src="/brownmobile2.svg" alt="Mirror part 2" className="brownmobile2 w-full  max-h-[30rem] mt-[20rem] relative top-[20rem] object-cover" />
            <img src="/brownmobile3.svg" alt="Mirror part 3" className="brownmobile3 w-full  max-h-[30rem] mt-[-20rem]  relative top-[30rem] object-cover" />
          </div>

          {/* Section 1 */}
          <motion.div
            className="relative z-30 w-[80%] ml-28 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mt-[8rem] xs:ml-[3.5rem] xs:relative xs:top-[-30rem]"
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left px-2 xl:mt-[-2rem] xl:ml-[10rem]">
              <h1 className="2xl:text-6xl xl:text-3xl lg:text-5xl md:text-4xl xs:text-3xl text-primary font-bold">
                We've all been there
              </h1>
              <p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xl text-gray-500 font-medium">
                You're away from home and unsure <br className="xs:hidden" /> where you can <span className="text-black font-medium">go</span>.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end xl:mt-[5rem]">
              <img src="/Home-character2.svg" alt="char2" className="w-2/3 xs:w-[60%] lg:w-[55%] xl:w-[50%] 2xl:w-[45%] max-w-md" />
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            className="relative z-30 w-full flex flex-col md:flex-row-reverse items-center md:items-start justify-between gap-10 py-24 xs:relative xs:top-[-25rem]"
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left px-2 2xl:w-[40%] xl:mr-[5rem] xl:mt-[-4rem]">
              <h1 className="2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl  text-primary font-bold xs:text-3xl">
                A tiny ask shouldn't <br className="xs:hidden" /> feel so big.
              </h1>
              <p className="2xl:text-2xl xl:text-sm lg:text-lg md:text-base sm:text-sm xs:text-xs text-gray-500 font-medium">
                Waiting in line, holding it in, just to <span className="text-black font-medium">beg</span> <br className="xs:hidden" />
                for a restroom key. It's awkward. I don't <br className="xs:hidden" />
                want to tell someone I have to evacuate <br className="xs:hidden" /> my bowels.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img src="/Home-character3.svg" alt="char3" className="w-2/3 sm:w-1/2 lg:w-[55%] xl:w-[40%] 2xl:w-[35%] 2xl:ml-[10rem] 2xl:mt-[5rem] max-w-md" />
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            className="relative z-30 w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10 py-24 2xl:mt-[-20rem] 2xl:px-[5rem]"
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left px-2 2xl:mt-[-10rem]">
              <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-primary font-bold">
                No more asking permission
              </h1>
              <p className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm xs:text-xs text-gray-500 font-medium">
                With Yedi, it's easy go straight in and <br className="xs:hidden" />
                find the bathroom door, scan and <br className="xs:hidden" />
                unlock to find <span className="text-black font-medium">relief</span>.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img src="/Home-character4.svg" alt="char4" className="w-2/3 sm:w-1/2 lg:w-[55%] xl:w-[50%] 2xl:w-[45%] 2xl:mt-10 max-w-md" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Mirror

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
    })
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <section className="relative w-full flex flex-col items-center bg-transparent">
      {/* Background Images */}
      <div className="absolute inset-0 w-full flex justify-center">
        <div className="w-full max-w-[1440px] mx-auto relative">
          <AnimatedItem className="absolute inset-0">
            <img
              src="/path.svg"
              alt="path"
              className="hidden sm:block w-full h-auto object-cover"
            />
          </AnimatedItem>
          <AnimatedItem className="absolute inset-0">
            <img
              src="/pathHomeMobile.svg"
              alt="path mobile"
              className="sm:hidden w-full h-auto object-contain"
            />
          </AnimatedItem>
          {/* Spacer to prevent overlap */}
          <div className="pb-[50rem] sm:pb-0" />
        </div>
      </div>

      {/* Desktop / Tablet Layout */}
      <div className="hidden sm:block relative w-full max-w-[1440px] mx-auto overflow-visible">
        <div className="mx-auto h-auto min-h-[100vh] px-8 lg:px-12 2xl:px-16 pt-28 pb-20 grid grid-cols-12 gap-8 items-start">
          {/* Image left */}
          <AnimatedItem className="col-span-5 flex justify-center items-start relative z-10 pt-6 lg:mt-[6.5rem] md:pt-0 xl:mt-[17rem]">
            <img
              src="/Home-character.svg"
              alt="character"
              className="w-[60%] md:w-[70%] lg:w-[80%] xl:w-[80%] max-w-full h-auto"
            />
          </AnimatedItem>

          {/* Text right */}
          <AnimatedItem className="col-span-7 flex flex-col items-start justify-start z-10 lg:ml-28 lg:-mt-20">
            <h1 className="text-primary font-bold
              2xl:text-[8rem] 2xl:leading-[6.5rem]
              xl:text-[5.5rem] xl:leading-[5.2rem]
              lg:text-[6rem] lg:leading-[5rem]
              md:text-[4rem] md:leading-[3.6rem]">
              Find Your <br /> Restroom
            </h1>
            <p className="text-black ml-2
              2xl:text-4xl 2xl:mt-10
              xl:text-2xl xl:mt-6
              lg:text-xl lg:mt-6
              md:text-lg md:mt-6">
              Find. Scan. Unlock
            </p>
            <div className="flex flex-wrap gap-6 mt-8 lg:gap-10">
              <AnimatedItem>
                <button className="bg-transparent font-medium border border-primary text-primary rounded-[2rem]
                  hover:bg-[#b1b1b128] hover:scale-105 ease-in-out duration-300
                  px-6 py-3 text-sm md:text-base lg:text-lg">
                  LOCATIONS
                </button>
              </AnimatedItem>
              <AnimatedItem>
                <button className="bg-primary/80 font-medium text-white rounded-[2rem]
                  hover:bg-primary hover:scale-105 ease-in-out duration-300
                  px-6 py-3 text-sm md:text-base lg:text-lg">
                  DOWNLOAD APP
                </button>
              </AnimatedItem>
            </div>
          </AnimatedItem>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden flex flex-col items-center w-full px-4 text-center mt-0 pt-4 max-w-screen-sm z-30 mx-auto min-h-[85vh] pb-16 overflow-visible">
        <AnimatedItem className="z-30 flex flex-col items-center mt-10">
          <h1 className="text-primary text-6xl font-bold leading-tight mb-4">Find Your Restroom</h1>
          <p className="text-black text-lg mb-8">Find. Scan. Unlock</p>
        </AnimatedItem>
        <AnimatedItem>
          <img
            src="/Home-character.svg"
            alt="character"
            className="w-[65%] max-w-[250px] mt-10 mb-5 z-10 ml-10"
          />
        </AnimatedItem>
        <div className="flex justify-between items-center w-[100%] gap-2 z-10">
          <AnimatedItem>
            <button className="bg-transparent font-medium border border-primary text-primary rounded-[2rem]
              hover:bg-[#b1b1b128] hover:scale-105 ease-in-out duration-300
              py-2 px-12 text-sm">
              LOCATIONS
            </button>
          </AnimatedItem>
          <AnimatedItem>
            <button className="bg-primary/80 font-medium text-white rounded-[2rem]
              hover:bg-primary hover:scale-105 ease-in-out duration-300
              py-2 px-10 text-sm">
              DOWNLOAD APP
            </button>
          </AnimatedItem>
        </div>
      </div>
    </section>
  )
}

export default Hero
